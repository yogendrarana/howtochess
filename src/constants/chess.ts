export const RANKS = [8, 7, 6, 5, 4, 3, 2, 1] as const;
export const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

export const PIECE_SYMBOLS: Record<string, string> = {
	p: "♙",
	n: "♘",
	b: "♗",
	r: "♖",
	q: "♕",
	k: "♔",
	P: "♟",
	N: "♞",
	B: "♝",
	R: "♜",
	Q: "♛",
	K: "♚",
};

export const UNICODE_PIECES: Record<string, string> = {
	wp: "♙",
	wn: "♘",
	wb: "♗",
	wr: "♖",
	wq: "♕",
	wk: "♔",
	bp: "♟",
	bn: "♞",
	bb: "♝",
	br: "♜",
	bq: "♛",
	bk: "♚",
};

export type PlayerColor = "both" | "white" | "black";
export type PieceColor = "w" | "b";
export type PieceType = "p" | "n" | "b" | "r" | "q" | "k";

export interface PieceData {
	color: PieceColor;
	type: PieceType;
}

export interface MoveHistory {
	fen: string;
	move: string;
	san: string;
	captured?: string;
}

export interface CapturedPieces {
	w: string[];
	b: string[];
}

export interface SquarePosition {
	file: string;
	rank: number;
}

export function squareId(file: string, rank: number): string {
	return `${file}${rank}`;
}

export function getSquarePosition(id: string): SquarePosition {
	return {
		file: id[0],
		rank: parseInt(id[1], 10),
	};
}
