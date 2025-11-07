import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Chess, type Move, type Square } from "chess.js";

import type {
	PlayerColor,
	MoveHistory,
	CapturedPieces,
} from "@/constants/chess";

interface PersistedChessState {
	moveHistory: MoveHistory[];
	currentMoveIndex: number;
	isBoardFlipped: boolean;
	playerColor: PlayerColor;
	capturedPieces: CapturedPieces;
}

interface ChessState extends PersistedChessState {
	// game state
	game: Chess;
	selectedSquare: string | null;
	validMoves: string[];
	lastMove: { from: string; to: string } | null;

	// actions
	setGame: (game: Chess) => void;
	setSelectedSquare: (square: string | null) => void;
	setValidMoves: (moves: string[]) => void;
	setLastMove: (move: { from: string; to: string } | null) => void;
	setMoveHistory: (history: MoveHistory[]) => void;
	setCurrentMoveIndex: (index: number) => void;
	setIsBoardFlipped: (flipped: boolean) => void;
	setPlayerColor: (color: PlayerColor) => void;
	setCapturedPieces: (pieces: CapturedPieces) => void;

	// complex actions
	makeMove: (from: string, to: string, promotion?: string) => boolean;
	goToMove: (index: number) => void;
	removeLastMove: () => void;
	removeMultipleMoves: (count: number) => void;
	goBackward: () => void;
	goForward: () => void;
	resetGame: () => void;
	updateCapturedPieces: () => void;
	getGameStatus: () => string;
}

const getInitialState = () => {
	const defaultFen = new Chess().fen();
	return {
		game: new Chess(),
		selectedSquare: null,
		validMoves: [],
		lastMove: null,
		moveHistory: [{ fen: defaultFen, move: "", san: "Start" }],
		currentMoveIndex: 0,
		isBoardFlipped: false,
		playerColor: "both" as PlayerColor,
		capturedPieces: { w: [], b: [] } as CapturedPieces,
	};
};

export const useChessStore = create<ChessState>()(
	persist(
		(set, get) => {
			const initialState = getInitialState();

			return {
				...initialState,

	// Basic setters
	setGame: (game) => set({ game }),
	setSelectedSquare: (square) => set({ selectedSquare: square }),
	setValidMoves: (moves) => set({ validMoves: moves }),
	setLastMove: (move) => set({ lastMove: move }),
	setMoveHistory: (history) => set({ moveHistory: history }),
	setCurrentMoveIndex: (index) => set({ currentMoveIndex: index }),
	setIsBoardFlipped: (flipped) => set({ isBoardFlipped: flipped }),
	setPlayerColor: (color) => set({ playerColor: color }),
	setCapturedPieces: (pieces) => set({ capturedPieces: pieces }),

	// Complex actions
		makeMove: (from, to, promotion = "q") => {
			const state = get();
			try {
				const copy = new Chess(state.game.fen());

				// Check if move is a capture BEFORE making the move
				const targetPiece = copy.get(to as Square);
				let capturedPiece: string | undefined;

				if (targetPiece) {
					// Store the captured piece with the correct case:
					// lowercase for black pieces, uppercase for white pieces
					const pieceSymbols: { [key: string]: string } = {
						p: "p",
						n: "n",
						b: "b",
						r: "r",
						q: "q",
						k: "k",
					};
					// If targetPiece is white, store as uppercase (P, N, B, R, Q, K)
					// If targetPiece is black, store as lowercase (p, n, b, r, q, k)
					capturedPiece =
						targetPiece.color === "w"
							? pieceSymbols[targetPiece.type].toUpperCase()
							: pieceSymbols[targetPiece.type];
				}

				const move = copy.move({
					from: from as Square,
					to: to as Square,
					promotion,
				});

				if (move) {
					const newHistory = state.moveHistory.slice(
						0,
						state.currentMoveIndex + 1,
					);
					newHistory.push({
						fen: copy.fen(),
						move: `${from}-${to}`,
						san: (move as Move).san,
						captured: capturedPiece,
					});

				set({
					game: copy,
					lastMove: { from, to },
					selectedSquare: null,
					moveHistory: newHistory,
					currentMoveIndex: newHistory.length - 1,
				});

				get().updateCapturedPieces();

				// Check for game end
				if (copy.isGameOver()) {
					setTimeout(() => {
						if (copy.isCheckmate()) {
							alert(
								`Checkmate! ${copy.turn() === "w" ? "Black" : "White"} wins!`,
							);
						} else if (copy.isDraw()) {
							alert("Game drawn!");
						}
					}, 100);
				}
				return true;
			}
		} catch (e) {
			console.error("Invalid move:", e);
		}
		return false;
	},

	goToMove: (index) => {
		const state = get();
		const historyEntry = state.moveHistory[index];
		const tempGame = new Chess(historyEntry.fen);

		set({
			game: tempGame,
			currentMoveIndex: index,
			selectedSquare: null,
			validMoves: [],
		});

		// Set last move if it's not the first position
		if (index > 0) {
			const currentEntry = state.moveHistory[index];
			const [from, to] = currentEntry.move.split("-");
			if (from && to) {
				set({ lastMove: { from, to } });
			} else {
				set({ lastMove: null });
			}
		} else {
			set({ lastMove: null });
		}
	},

	removeLastMove: () => {
		const state = get();
		if (state.currentMoveIndex > 0) {
			const newHistory = state.moveHistory.slice(
				0,
				state.currentMoveIndex,
			);
			const tempGame = new Chess(newHistory[newHistory.length - 1].fen);

			set({
				moveHistory: newHistory,
				currentMoveIndex: newHistory.length - 1,
				game: tempGame,
				selectedSquare: null,
				validMoves: [],
			});

			// Update last move
			if (newHistory.length > 1) {
				const lastMoveEntry = newHistory[newHistory.length - 1];
				const [from, to] = lastMoveEntry.move.split("-");
				if (from && to) {
					set({ lastMove: { from, to } });
				} else {
					set({ lastMove: null });
				}
			} else {
				set({ lastMove: null });
			}

			get().updateCapturedPieces();
		}
	},

	goBackward: () => {
		const { currentMoveIndex, goToMove } = get();
		if (currentMoveIndex > 0) {
			goToMove(currentMoveIndex - 1);
		}
	},

	goForward: () => {
		const { currentMoveIndex, moveHistory, goToMove } = get();
		if (currentMoveIndex < moveHistory.length - 1) {
			goToMove(currentMoveIndex + 1);
		}
	},

	removeMultipleMoves: (count) => {
		const state = get();
		if (state.currentMoveIndex >= count) {
			const newHistory = state.moveHistory.slice(
				0,
				state.moveHistory.length - count,
			);
			const tempGame = new Chess(newHistory[newHistory.length - 1].fen);

			set({
				moveHistory: newHistory,
				currentMoveIndex: newHistory.length - 1,
				game: tempGame,
				selectedSquare: null,
				validMoves: [],
			});

			if (newHistory.length > 1) {
				const lastMoveEntry = newHistory[newHistory.length - 1];
				const [from, to] = lastMoveEntry.move.split("-");
				if (from && to) {
					set({ lastMove: { from, to } });
				} else {
					set({ lastMove: null });
				}
			} else {
				set({ lastMove: null });
			}

			get().updateCapturedPieces();
		}
	},

	resetGame: () => {
		const newGame = new Chess();
		set({
			game: newGame,
			selectedSquare: null,
			validMoves: [],
			lastMove: null,
			moveHistory: [{ fen: newGame.fen(), move: "", san: "Start" }],
			currentMoveIndex: 0,
			capturedPieces: { w: [], b: [] },
		});
	},

	updateCapturedPieces: () => {
		const state = get();
		const captured: CapturedPieces = { w: [], b: [] };

		state.moveHistory.forEach((history) => {
			if (history.captured) {
				// If captured piece is lowercase (black piece), white captured it
				// If captured piece is uppercase (white piece), black captured it
				const capturingColor =
					history.captured === history.captured.toLowerCase()
						? "w"
						: "b";
				captured[capturingColor].push(history.captured);
			}
		});

		set({ capturedPieces: captured });
	},

	getGameStatus: () => {
		const { game } = get();
		if (game.isCheckmate())
			return `Checkmate! ${game.turn() === "w" ? "Black" : "White"} wins!`;
		if (game.isDraw()) {
			if (game.isStalemate()) return "Stalemate! Game drawn!";
			if (game.isThreefoldRepetition())
				return "Threefold repetition! Game drawn!";
			if (game.isInsufficientMaterial())
				return "Insufficient material! Game drawn!";
			return "Game drawn!";
		}
		if (game.isCheck())
			return `Check! ${game.turn() === "w" ? "White" : "Black"} to move.`;
		return `${game.turn() === "w" ? "White" : "Black"} to move`;
	},
			};
		},
		{
			name: "chess-storage",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				moveHistory: state.moveHistory,
				currentMoveIndex: state.currentMoveIndex,
				isBoardFlipped: state.isBoardFlipped,
				playerColor: state.playerColor,
				capturedPieces: state.capturedPieces,
			}),
			onRehydrateStorage: () => (state) => {
				if (state?.moveHistory && state.moveHistory.length > 0) {
					// Reconstruct Chess object from persisted FEN
					const currentFen =
						state.moveHistory[state.currentMoveIndex]?.fen;
					if (currentFen) {
						try {
							state.game = new Chess(currentFen);
							// Reconstruct lastMove from current history entry
							if (state.currentMoveIndex > 0) {
								const currentEntry = state.moveHistory[state.currentMoveIndex];
								const [from, to] = currentEntry.move.split("-");
								if (from && to) {
									state.lastMove = { from, to };
								} else {
									state.lastMove = null;
								}
							} else {
								state.lastMove = null;
							}
							// Reset UI state
							state.selectedSquare = null;
							state.validMoves = [];
						} catch (error) {
							console.error("Failed to restore game from localStorage:", error);
							// Reset to default state if restoration fails
							const defaultState = getInitialState();
							Object.assign(state, defaultState);
						}
					} else {
						// If no valid FEN, reset to default state
						const defaultState = getInitialState();
						Object.assign(state, defaultState);
					}
				}
			},
		},
	),
);
