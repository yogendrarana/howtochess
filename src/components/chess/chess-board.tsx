import { useEffect } from "react";
import {
	DndContext,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import type { Move, Square as ChessSquare } from "chess.js";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";

import { Piece } from "./piece";
import { Square } from "./square";
import { useChessStore } from "@/store/chess-store";
import { FILES, type PieceData, RANKS, squareId } from "@/constants/chess";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function ChessBoard({ className }: { className?: string }) {
	const {
		game,
		selectedSquare,
		validMoves,
		lastMove,
		isBoardFlipped,
		playerColor,
		currentMoveIndex,
		moveHistory,
		setSelectedSquare,
		setValidMoves,
		makeMove,
		goToMove,

		// guide related
		guidedMode,
	} = useChessStore();

	const position = game.board();

	// Configure sensors to require a minimum drag distance
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 1, // Require 1px movement before drag starts
			},
		}),
	);

	const handleSquareClick = (square: string) => {
		// Disable manual play if guided mode
		if (guidedMode) return;

		// If we're viewing history, return to current position first
		if (currentMoveIndex < moveHistory.length - 1) {
			goToMove(moveHistory.length - 1);
			return;
		}

		// Check if player can move this piece based on playerColor setting
		const piece = game.get(square as ChessSquare);
		if (playerColor !== "both" && piece) {
			if (playerColor === "white" && piece.color !== "w") return;
			if (playerColor === "black" && piece.color !== "b") return;
		}

		// If no square is selected and there's a piece on the clicked square
		if (!selectedSquare) {
			if (piece && piece.color === game.turn()) {
				setSelectedSquare(square);
			}
			return;
		}

		// If clicking the same square, deselect
		if (selectedSquare === square) {
			setSelectedSquare(null);
			return;
		}

		// If clicking a different square, try to move
		const result = makeMove(selectedSquare, square);

		// Handle result
		if (result.status === "checkmate") {
			toast("Checkmate!", {
				description: `${result.winner === "w" ? "White" : "Black"} wins!`,
			});
		} else if (result.status === "draw") {
			toast("Draw!", {
				description: "The game ended in a draw.",
			});
		}

		if (result.status === "illegal") {
			// If invalid move, select the new square if it has a piece of current turn
			if (piece && piece.color === game.turn()) {
				setSelectedSquare(square);
			} else {
				setSelectedSquare(null);
			}
		} else {
			setSelectedSquare(null);
		}
	};

	const handleDragStart = (event: DragStartEvent) => {
		// Disable manual play if guided mode
		if (guidedMode) return;

		const from = event.active.id as string;
		const piece = game.get(from as ChessSquare);

		// Only allow dragging if it's the player's turn and based on playerColor setting
		if (piece && piece.color === game.turn()) {
			if (playerColor !== "both") {
				if (playerColor === "white" && piece.color !== "w") return;
				if (playerColor === "black" && piece.color !== "b") return;
			}
			setSelectedSquare(from);
		}
	};

	const handleDragEnd = (event: DragEndEvent) => {
		// Disable manual play if guided mode
		if (guidedMode) return;

		// If we're viewing history, return to current position first
		if (currentMoveIndex < moveHistory.length - 1) {
			goToMove(moveHistory.length - 1);
			return;
		}

		const from = event.active.id as string;
		const to = event.over?.id as string;

		if (to && from !== to) {
			const result = makeMove(from, to);
			if (result.status === "checkmate") {
				toast("Checkmate!", {
					description: `${result.winner === "w" ? "White" : "Black"} wins!`,
				});
			} else if (result.status === "draw") {
				toast("Draw!", {
					description: "The game ended in a draw.",
				});
			}
		}

		// Clear selection after drag
		setSelectedSquare(null);
	};

	const renderPiece = (file: string, rank: number) => {
		const row = 8 - rank;
		const col = FILES.indexOf(file as (typeof FILES)[number]);
		const piece = position[row]?.[col] as PieceData | null;

		if (!piece) return null;

		const id = squareId(file, rank);
		const symbol = `${piece.color}${piece.type}`;
		return <Piece id={id} symbol={symbol} />;
	};

	// Update valid moves when a square is selected
	useEffect(() => {
		if (selectedSquare) {
			const moves = game.moves({
				square: selectedSquare as ChessSquare,
				verbose: true,
			}) as Move[];
			setValidMoves(moves.map((move) => move.to));
		} else {
			setValidMoves([]);
		}
	}, [selectedSquare, game, setValidMoves]);

	return (
		<div className={className}>
			<DndContext
				sensors={sensors}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
			>
				<div
					className={cn("relative", {
						"rotate-180": isBoardFlipped,
					})}
				>
					<div className="w-full grid grid-cols-8 border-4 rounded border-primary aspect-square">
						{RANKS.map((rank) =>
							FILES.map((file) => {
								const id = squareId(file, rank);
								return (
									<Square
										key={id}
										id={id}
										rank={rank}
										file={file}
										className="aspect-square w-full h-full"
										isHighlighted={validMoves.includes(id)}
										isLastMove={
											lastMove?.from === id ||
											lastMove?.to === id
										}
										isSelected={selectedSquare === id}
										onClick={() => handleSquareClick(id)}
										isBoardFlipped={isBoardFlipped}
									>
										{renderPiece(file, rank)}
									</Square>
								);
							}),
						)}
					</div>
				</div>
			</DndContext>
		</div>
	);
}
