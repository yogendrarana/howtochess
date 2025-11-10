export interface ChessMove {
	san: string;
	fen: string;
	comment?: string;
	captured?: boolean;
}

export interface OpeningLine {
	id: "main" | "advance" | "exchange" | string;
	name: string;
	moves: ChessMove[];
}

export interface ChessOpening {
	id: string;
	name: string;
	eco: string;
	color: "white" | "black";
	description?: string;
	lines: Array<OpeningLine>;
}
