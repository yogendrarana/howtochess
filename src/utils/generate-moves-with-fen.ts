import { Chess } from "chess.js";
import type { ChessMove } from "@/types/chess";

/**
 * Generate a list of moves with FEN snapshots.
 * @param sanMoves - Array of SAN moves like ["e4", "c6", "d4"]
 * @param comments - Optional array of comments for each move.
 */

export function generateMovesWithFEN(
	sanMoves: string[],
	comments?: (string | undefined)[],
): ChessMove[] {
	const chess = new Chess();
	const result: ChessMove[] = [];

	sanMoves.forEach((san, index) => {
		const move = chess.move(san);
		if (!move) {
			throw new Error(`Invalid move at index ${index}: ${san}`);
		}

		result.push({
			san,
			fen: chess.fen(),
			comment: comments?.[index],
		});
	});

	return result;
}
