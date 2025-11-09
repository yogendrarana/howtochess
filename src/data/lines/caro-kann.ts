import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const caroKannLines: Array<OpeningLine> = [
	{
		id: "main",
		name: "Main Line (Classical Variation)",
		moves: generateMovesWithFEN(
			["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Bf5"],
			[
				"White opens by controlling the center with the king’s pawn.",
				"Black plays c6, preparing d5 while keeping the light-squared bishop flexible.",
				"White builds a strong pawn duo in the center.",
				"Black challenges the center immediately — the hallmark Caro-Kann strike.",
				"The Classical Variation. White develops a piece while reinforcing e4 and d5.",
				"Black exchanges in the center to free the position.",
				"White recaptures with the knight, gaining central control and quick development.",
				"Black develops the bishop outside the pawn chain before playing e6.",
			],
		),
	},

	{
		id: "advance",
		name: "Advance Variation",
		moves: generateMovesWithFEN(
			["e4", "c6", "d4", "d5", "e5", "Bf5", "Nc3"],
			[
				"White starts with the King’s Pawn Opening.",
				"Black signals the Caro-Kann Defense.",
				"White occupies the center with pawns.",
				"Black challenges the center immediately.",
				"White advances the pawn, gaining space and closing the position.",
				"Black develops the bishop to an active diagonal before e6.",
				"White develops naturally, eyeing the d5 square and preparing Nf3.",
			],
		),
	},

	{
		id: "exchange",
		name: "Exchange Variation",
		moves: generateMovesWithFEN(
			["e4", "c6", "d4", "d5", "exd5", "cxd5", "Bd3"],
			[
				"Standard opening move for White.",
				"Black sets up the Caro-Kann structure.",
				"White builds a pawn center.",
				"Black contests the center.",
				"White exchanges to open the position and simplify the center.",
				"Black recaptures, maintaining a symmetrical pawn structure.",
				"White develops the bishop to an active diagonal, eyeing h7 and supporting kingside play.",
			],
		),
	},
];
