import { useEffect } from "react";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import {
	DndContext,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";

import { Piece } from "./piece";
import { Square } from "./square";
import { MoveHistory } from "./move-history";
import { BoardControls } from "./board-controls";
import { CapturedPieces } from "./captured-pieces";
import { useChessStore } from "@/store/chess-store";
import { FILES, type PieceData, RANKS, squareId } from "@/constants/chess";

export function ChessBoard() {
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
	} = useChessStore();

	const position = game.board();

	// Configure sensors to require a minimum drag distance
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8, // Require 8px movement before drag starts
			},
		}),
	);

	// Get display ranks and files based on board orientation
	const displayRanks = isBoardFlipped ? [...RANKS].reverse() : RANKS;
	const displayFiles = isBoardFlipped ? [...FILES].reverse() : FILES;

	// Update valid moves when a square is selected
	useEffect(() => {
		if (selectedSquare) {
			const moves = game.moves({ square: selectedSquare, verbose: true });
			setValidMoves(moves.map((move) => move.to));
		} else {
			setValidMoves([]);
		}
	}, [selectedSquare, game, setValidMoves]);

	const handleSquareClick = (square: string) => {
		// If we're viewing history, return to current position first
		if (currentMoveIndex < moveHistory.length - 1) {
			goToMove(moveHistory.length - 1);
			return;
		}

		// Check if player can move this piece based on playerColor setting
		const piece = game.get(square);
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
		const moveMade = makeMove(selectedSquare, square);

		if (!moveMade) {
			// If invalid move, select the new square if it has a piece of current turn
			if (piece && piece.color === game.turn()) {
				setSelectedSquare(square);
			} else {
				setSelectedSquare(null);
			}
		}
	};

	const handleDragStart = (event: DragStartEvent) => {
		const from = event.active.id as string;
		const piece = game.get(from);

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
		// If we're viewing history, return to current position first
		if (currentMoveIndex < moveHistory.length - 1) {
			goToMove(moveHistory.length - 1);
			return;
		}

		const from = event.active.id as string;
		const to = event.over?.id as string;

		if (to && from !== to) {
			makeMove(from, to);
		}

		// Clear selection after drag
		setSelectedSquare(null);
	};

	const renderPiece = (file: string, rank: number) => {
		const row = 8 - rank;
		const col = FILES.indexOf(file);
		const piece = position[row]?.[col] as PieceData | null;

		if (!piece) return null;

		const id = squareId(file, rank);
		const symbol = `${piece.color}${piece.type}`;
		return <Piece id={id} symbol={symbol} />;
	};

	return (
		<>
			<BoardControls />

			{/* Main content area with board and move history */}
			<div className="flex gap-8 w-full max-w-6xl">
				{/* Left side - Board and controls */}
				<div className="flex flex-col gap-4">
					{/* Chess Board */}
					<DndContext
						sensors={sensors}
						onDragStart={handleDragStart}
						onDragEnd={handleDragEnd}
					>
						<div
							className={`relative ${isBoardFlipped ? "rotate-180" : ""}`}
						>
							{/* File labels (a-h) */}
							<div className="flex ml-14 mb-2">
								{displayFiles.map((file) => (
									<div
										key={file}
										className="w-16 h-8 flex items-center justify-center text-lg font-semibold"
									>
										{file}
									</div>
								))}
							</div>

							<div className="flex">
								{/* Rank labels (1-8) */}
								<div className="flex flex-col justify-around mr-2 w-8">
									{displayRanks.map((rank) => (
										<div
											key={rank}
											className="h-16 flex items-center justify-center text-lg font-semibold"
										>
											{rank}
										</div>
									))}
								</div>

								{/* Chess board */}
								<div className="grid grid-cols-8 w-[512px] h-[512px] border-4 border-gray-800 rounded-sm">
									{displayRanks.map((rank) =>
										displayFiles.map((file) => {
											const id = squareId(file, rank);
											return (
												<Square
													key={id}
													id={id}
													isHighlighted={validMoves.includes(
														id,
													)}
													isLastMove={
														lastMove?.from === id ||
														lastMove?.to === id
													}
													isSelected={
														selectedSquare === id
													}
													onClick={() =>
														handleSquareClick(id)
													}
													isBoardFlipped={
														isBoardFlipped
													}
												>
													{renderPiece(file, rank)}
												</Square>
											);
										}),
									)}
								</div>
							</div>
						</div>
					</DndContext>

					<div className="text-base text-gray-600 w-[640px] break-all bg-gray-100 p-3 rounded-lg">
						<strong>FEN:</strong> {game.fen()}
					</div>
				</div>

				{/* Right side - Vertical move history and captured pieces */}
				<div className="flex flex-col gap-6 w-80">
					<CapturedPieces />
					<MoveHistory />
				</div>
			</div>
		</>
	);
}
