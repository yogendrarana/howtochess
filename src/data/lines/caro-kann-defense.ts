import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const caroKannDefenseLines: Array<OpeningLine> = [
	{
		id: "classical",
		name: "Classical Variation",
		moves: generateMovesWithFEN(
			["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Bf5"],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"Caro-Kann Defense - prepares d5 advance while maintaining flexibility for the light-squared bishop.",
				},
				{
					description:
						"Builds a strong pawn center and opens lines for the queen and dark-squared bishop.",
				},
				{
					description:
						"Challenges White's center immediately, the characteristic Caro-Kann pawn break.",
				},
				{
					description:
						"Classical Variation - develops knight to support the center and prepare for quick castling.",
				},
				{
					description:
						"Captures the pawn and relieves central tension, opening the position for piece development.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining control over key squares.",
				},
				{
					description:
						"Develops the bishop outside the pawn chain, a key idea in the Classical Caro-Kann that avoids blocking the e-pawn.",
				},
			],
		),
	},

	{
		id: "caro-kann-advance",
		name: "Caro Kann (Advance Variation)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"c6",
				"d4",
				"d5",
				"e5",
				"Bf5",
				"Nc3",
				"e6",
				"Nf3",
				"Nd7",
				"Be2",
				"Ne7",
				"O-O",
				"a6",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"Caro-Kann Defense - prepares d5 advance while maintaining flexibility for piece development.",
				},
				{
					description:
						"Builds a strong pawn center and opens lines for the queen and dark-squared bishop.",
				},
				{
					description:
						"Challenges White's center immediately, the characteristic Caro-Kann pawn break.",
				},
				{
					description:
						"Advance Variation - gains space and limits Black's development by blocking the e6 pawn break.",
				},
				{
					description:
						"Develops the bishop outside the pawn chain, a key idea in the Caro-Kann that maintains piece activity.",
				},
				{
					description:
						"Develops knight to support the center and prepare for further development, eyeing potential d4-d5 breaks.",
				},
				{
					description:
						"Solidifies the center and prepares to develop the dark-squared bishop, creating a flexible pawn structure.",
				},
				{
					description:
						"Develops knight to control central squares and prepare kingside castling, completing White's knight development.",
				},
				{
					description:
						"Develops knight to support the center and prepare for ...c5 break, typical Caro-Kann development.",
				},
				{
					description:
						"Develops bishop to support the center and prepare kingside castling, completing White's basic development.",
				},
				{
					description:
						"Knight repositions to support the ...c5 break and maintain flexibility, avoiding blocking the bishop.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing White's development and preparing for middlegame.",
				},
				{
					description:
						"Prevents White's knight from jumping to b5 and prepares queenside expansion with ...b5.",
				},
			],
		),
	},

	{
		id: "caro-kann-exchange-variation",
		name: "Caro Kann (Exchange Variation)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"c6",
				"d4",
				"d5",
				"exd5",
				"cxd5",
				"Bd3",
				"Nc6",
				"c3",
				"Nf6",
				"Bf4",
				"Bg4",
				"Qb3",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"Caro-Kann Defense - prepares d5 advance while maintaining flexibility for piece development.",
				},
				{
					description:
						"Builds a strong pawn center and opens lines for the queen and dark-squared bishop.",
				},
				{
					description:
						"Challenges White's center immediately, the characteristic Caro-Kann pawn break.",
				},
				{
					description:
						"Exchange Variation - simplifies the center and creates symmetrical pawn structure.",
				},
				{
					description:
						"Recaptures and maintains central pawn, accepting symmetrical position with open c-file.",
				},
				{
					description:
						"Develops bishop to control the center and prepare kingside castling, placing it on an active diagonal.",
				},
				{
					description:
						"Develops knight to control key central squares and prepare for further development.",
				},
				{
					description:
						"Supports the d4 pawn and prepares to develop the b1 knight, reinforcing the center.",
				},
				{
					description:
						"Develops knight to control the center and complete kingside development, preparing for castling.",
				},
				{
					description:
						"Develops bishop outside the pawn chain, controlling the long diagonal and increasing pressure.",
				},
				{
					description:
						"Develops bishop to pin the f3 knight and challenge White's piece coordination.",
				},
				{
					description:
						"Develops queen to attack the b7 pawn and d5 pawn simultaneously, creating immediate threats.",
				},
			],
		),
	},
];
