import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const frenchDefenseLines: Array<OpeningLine> = [
	{
		id: "french-classical",
		name: "French Defense - Classical Variation",
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
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"French Defense - prepares d5 advance while maintaining a solid pawn structure.",
				},
				{
					description:
						"Builds a strong pawn center and opens lines for the queen and dark-squared bishop.",
				},
				{
					description:
						"Challenges White's center immediately, the characteristic French Defense pawn break.",
				},
				{
					description:
						"Develops knight to support the center and prepare for quick castling.",
				},
				{
					description:
						"Develops knight to attack e4 and challenge White's center, completing kingside development.",
				},
				{
					description:
						"Classical Variation - pins the knight to create pressure and threaten structural damage.",
				},
				{
					description:
						"Captures the pawn to relieve central tension and open the position for piece development.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining active piece play.",
				},
				{
					description:
						"Develops bishop to break the pin and prepare kingside castling, maintaining piece coordination.",
				},
				{
					description:
						"Exchanges to damage Black's pawn structure, creating doubled f-pawns as a long-term weakness.",
				},
				{
					description:
						"Recaptures with the bishop, accepting doubled pawns but gaining the bishop pair as compensation.",
				},
			],
		),
	},

	{
		id: "french-advance",
		name: "French Defense - Advance Variation",
		moves: generateMovesWithFEN(
			["e4", "e6", "d4", "d5", "e5", "c5", "c3", "Nc6", "Nf3"],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"French Defense - prepares d5 advance while maintaining a solid pawn structure.",
				},
				{
					description:
						"Builds a strong pawn center and opens lines for the queen and dark-squared bishop.",
				},
				{
					description:
						"Challenges White's center immediately, the characteristic French Defense pawn break.",
				},
				{
					description:
						"Advance Variation - gains space and restricts Black's piece mobility by blocking the e6 pawn.",
				},
				{
					description:
						"Attacks the base of White's pawn chain, the typical counterplay in the French Advance.",
				},
				{
					description:
						"Reinforces the d4 pawn and maintains the central structure, preparing for piece development.",
				},
				{
					description:
						"Develops knight to increase pressure on d4 and support the c5 pawn break.",
				},
				{
					description:
						"Develops knight to control central squares and prepare kingside castling, completing development.",
				},
			],
		),
	},
	{
		id: "french-exchange",
		name: "French Defense - Exchange Variation",
		moves: generateMovesWithFEN(
			["e4", "e6", "d4", "d5", "exd5", "exd5", "Bd3"],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"French Defense - prepares d5 advance while maintaining a solid pawn structure.",
				},
				{
					description:
						"Builds a strong pawn center and opens lines for the queen and dark-squared bishop.",
				},
				{
					description:
						"Challenges White's center immediately, the characteristic French Defense pawn break.",
				},
				{
					description:
						"Exchange Variation - simplifies the center and creates symmetrical pawn structure.",
				},
				{
					description:
						"Recaptures and maintains central pawn, accepting symmetrical position with open e-file.",
				},
				{
					description:
						"Develops bishop to control the center and prepare kingside castling, placing it on an active diagonal.",
				},
			],
		),
	},
	{
		id: "french-tarrasch",
		name: "French Defense - Tarrasch Variation",
		moves: generateMovesWithFEN(
			["e4", "e6", "d4", "d5", "Nd2", "c5", "exd5", "exd5"],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"French Defense - prepares d5 advance while maintaining a solid pawn structure.",
				},
				{
					description:
						"Builds a strong pawn center and opens lines for the queen and dark-squared bishop.",
				},
				{
					description:
						"Challenges White's center immediately, the characteristic French Defense pawn break.",
				},
				{
					description:
						"Tarrasch Variation - develops knight to d2 to avoid the pin from ...Bb4 and maintain flexibility.",
				},
				{
					description:
						"Attacks the base of White's pawn chain, creating immediate tension in the center.",
				},
				{
					description:
						"Captures the pawn to relieve central tension and open the e-file for piece activity.",
				},
				{
					description:
						"Recaptures and maintains central pawn, accepting symmetrical structure with open e-file.",
				},
			],
		),
	},

	{
		id: "french-winawer",
		name: "French Defense - Winawer Variation",
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
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"French Defense - prepares d5 advance while maintaining a solid pawn structure.",
				},
				{
					description:
						"Builds a strong pawn center and opens lines for the queen and dark-squared bishop.",
				},
				{
					description:
						"Challenges White's center immediately, the characteristic French Defense pawn break.",
				},
				{
					description:
						"Develops knight to support the center and prepare for quick castling.",
				},
				{
					description:
						"Winawer Variation - pins the knight to damage White's pawn structure and create imbalances.",
				},
				{
					description:
						"Advances the pawn to gain space and attack the bishop, while blocking the center.",
				},
				{
					description:
						"Attacks the base of White's pawn chain, the typical counterplay in the Winawer Variation.",
				},
				{
					description:
						"Forces the bishop to decide between retreating or capturing, clarifying the position.",
				},
				{
					description:
						"Captures the knight to double White's pawns, sacrificing the bishop pair for structural damage.",
				},
				{
					description:
						"Recaptures and accepts doubled pawns, but gains the bishop pair and maintains central control.",
				},
			],
		),
	},
];
