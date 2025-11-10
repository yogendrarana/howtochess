import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const frenchDefenseLines: Array<OpeningLine> = [
	{
		id: "main",
		name: "Main Line (Classical Variation)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e6",
				"d4",
				"d5",
				"Nc3",
				"Nf6",
				"Bg5",
				"dxe4",
				"Nxe4",
				"Be7",
				"Bxf6",
				"Bxf6",
			],
			[
				"White occupies the center with the king's pawn.",
				"Black establishes the French Defense structure, preparing d5.",
				"White reinforces the center with another pawn.",
				"Black immediately challenges White's center.",
				"White develops the knight and defends the e4 pawn.",
				"Black develops the knight, attacking e4 and increasing pressure.",
				"The Classical Variation. White pins the knight to create threats.",
				"Black captures the pawn to relieve the central tension.",
				"White recaptures with the knight, maintaining piece activity.",
				"Black develops the bishop and breaks the pin on the knight.",
				"White exchanges to double Black's pawns and weaken their structure.",
				"Black recaptures, accepting doubled pawns but gaining the bishop pair.",
			],
		),
	},

	{
		id: "advance",
		name: "Advance Variation",
		moves: generateMovesWithFEN(
			["e4", "e6", "d4", "d5", "e5", "c5", "c3", "Nc6", "Nf3"],
			[
				"White starts with the King's Pawn Opening.",
				"Black responds with the French Defense.",
				"White builds a strong pawn center.",
				"Black challenges the center immediately.",
				"White advances, gaining space and restricting Black's pieces.",
				"Black strikes at the base of White's pawn chain.",
				"White reinforces the d4 pawn and maintains the center.",
				"Black develops the knight, increasing pressure on d4.",
				"White develops the knight, completing kingside development and protecting d4.",
			],
		),
	},

	{
		id: "exchange",
		name: "Exchange Variation",
		moves: generateMovesWithFEN(
			["e4", "e6", "d4", "d5", "exd5", "exd5", "Bd3"],
			[
				"White opens with the king's pawn.",
				"Black establishes the French Defense.",
				"White builds a classical pawn center.",
				"Black challenges the center.",
				"White simplifies the position and opens the e-file.",
				"Black recaptures, maintaining symmetry in the center.",
				"White develops the bishop to an active diagonal, preparing kingside castling and eyeing Black's position.",
			],
		),
	},

	{
		id: "tarrasch",
		name: "Tarrasch Variation",
		moves: generateMovesWithFEN(
			["e4", "e6", "d4", "d5", "Nd2", "c5", "exd5", "exd5"],
			[
				"White begins with the king's pawn.",
				"Black plays the French Defense.",
				"White occupies the center with pawns.",
				"Black immediately challenges White's center.",
				"The Tarrasch Variation. White develops the knight to d2 to avoid pin possibilities.",
				"Black attacks the d4 pawn, challenging White's center.",
				"White exchanges in the center to relieve pressure.",
				"Black recaptures, opening lines for development.",
			],
		),
	},

	{
		id: "winawer",
		name: "Winawer Variation",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e6",
				"d4",
				"d5",
				"Nc3",
				"Bb4",
				"e5",
				"c5",
				"a3",
				"Bxc3+",
				"bxc3",
			],
			[
				"White opens with the king's pawn.",
				"Black plays the French Defense.",
				"White builds a strong pawn center.",
				"Black challenges the center.",
				"White develops the knight and defends e4.",
				"The Winawer Variation. Black pins the knight, targeting White's pawn structure.",
				"White advances, gaining space and attacking the bishop.",
				"Black counterattacks the base of White's pawn chain.",
				"White forces clarification of the pin situation.",
				"Black captures, doubling White's pawns but giving up the bishop pair.",
				"White recaptures, accepting doubled pawns but gaining central control.",
			],
		),
	},
];
