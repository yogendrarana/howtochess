import { Chess } from "chess.js";
import type { ChessMove, MoveCommentary } from "@/types/chess";

/**
 * Generate a list of moves with FEN snapshots.
 * @param sanMoves - Array of SAN moves like ["e4", "c6", "d4"]
 * @param commentary - Optional array of commentary for each move.
 */

export function generateMovesWithFEN(
	sanMoves: Array<string>,
	commentary: Array<MoveCommentary>,
): ChessMove[] {
	const chess = new Chess();
	const result: ChessMove[] = [];

	result.push({
		fen: chess.fen(),
		san: "",
		commentary: {
			description: "Starting Position",
		},
		captured: false,
	});

	sanMoves.forEach((san, index) => {
		const move = chess.move(san);
		if (!move) {
			throw new Error(`Invalid move at index ${index}: ${san}`);
		}

		result.push({
			san,
			fen: chess.fen(),
			commentary: commentary[index],
			captured: move.isCapture(),
		});
	});

	return result;
}
