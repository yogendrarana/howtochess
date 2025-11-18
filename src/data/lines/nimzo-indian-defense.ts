import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const nimzoIndianLines: Array<OpeningLine> = [
	{
		id: "nimzo-indian-classical",
		name: "Nimzo-Indian Defense (Classical Variation)",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"Nc3",
				"Bb4",
				"Qc2",
				"c5",
				"dxc5",
				"O-O",
				"a3",
				"Bxc5",
				"Nf3",
				"Nc6",
			],
			[
				{
					description:
						"Queen's Pawn Opening - White establishes central control with the d4 pawn.",
				},
				{
					description:
						"Nimzo-Indian Defense - Black develops knight to control the center and prepare for the characteristic bishop pin.",
				},
				{
					description:
						"White gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Black prepares to develop the dark-squared bishop and supports the potential d5 break.",
				},
				{
					description:
						"White develops knight to support the center, entering the main line of the Nimzo-Indian.",
				},
				{
					description:
						"Nimzo-Indian signature move - Black pins the knight, threatening to double White's pawns and create imbalances.",
				},
				{
					description:
						"Classical Variation - White develops the queen to defend the knight and avoid doubled pawns, while preparing to control the center.",
				},
				{
					description:
						"Black immediately challenges White's center, creating tension and opening lines for counterplay.",
				},
				{
					description:
						"White captures the pawn to relieve central tension and gain material, but allows Black quick development.",
				},
				{
					description:
						"Black secures the king and connects the rooks, completing basic kingside development.",
				},
				{
					description:
						"White challenges the bishop to force it to declare its intentions, gaining time and space.",
				},
				{
					description:
						"Black retreats the bishop to maintain activity while avoiding capture, keeping pressure on the center.",
				},
				{
					description:
						"White develops knight to control central squares and complete kingside development, preparing to castle.",
				},
				{
					description:
						"Black develops knight to support the center and increase pressure, completing development in the Classical Nimzo-Indian.",
				},
			],
		),
	},

	{
		id: "nimzo-indian-samisch",
		name: "Nimzo-Indian Defense - Sämisch Variation",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"Nc3",
				"Bb4",
				"a3",
				"Bxc3+",
				"bxc3",
				"c5",
				"f3",
				"d5",
				"cxd5",
				"Nxd5",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for development.",
				},
				{
					description:
						"Nimzo-Indian Defense - develops knight to control the center and prepare for the characteristic bishop pin.",
				},
				{
					description:
						"Gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Prepares to develop the dark-squared bishop and supports the potential d5 break.",
				},
				{
					description:
						"Develops knight to support the center, entering the main line of the Nimzo-Indian.",
				},
				{
					description:
						"Nimzo-Indian signature move - pins the knight, threatening to double pawns and create imbalances.",
				},
				{
					description:
						"Sämisch Variation - immediately challenges the bishop to force the exchange and gain the bishop pair.",
				},
				{
					description:
						"Captures the knight, accepting to give up the bishop pair but damaging the pawn structure.",
				},
				{
					description:
						"Recaptures and gains the bishop pair, but accepts doubled pawns that become a long-term weakness.",
				},
				{
					description:
						"Immediately challenges the center, targeting the weakened pawn structure.",
				},
				{
					description:
						"Reinforces the center and prevents knight jumps to g4, preparing to build a strong pawn formation.",
				},
				{
					description:
						"Strikes in the center to open lines and challenge the compromised pawn structure.",
				},
				{
					description:
						"Captures the pawn to relieve central tension and open the position.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and putting pressure on the doubled pawns.",
				},
			],
		),
	},

	{
		id: "nimzo-indian-rubinstein",
		name: "Nimzo-Indian Defense (Rubinstein Variation)",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"Nc3",
				"Bb4",
				"e3",
				"O-O",
				"Ne2",
				"d5",
				"a3",
				"Bd6",
				"cxd5",
				"exd5",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for development.",
				},
				{
					description:
						"Nimzo-Indian Defense - develops knight to control the center and prepare for the characteristic bishop pin.",
				},
				{
					description:
						"Gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Prepares to develop the dark-squared bishop and supports the potential d5 break.",
				},
				{
					description:
						"Develops knight to support the center, entering the main line of the Nimzo-Indian.",
				},
				{
					description:
						"Nimzo-Indian signature move - pins the knight, threatening to double pawns and create imbalances.",
				},
				{
					description:
						"Rubinstein Variation - solidly supports the center and prepares to develop the dark-squared bishop.",
				},
				{
					description:
						"Secures the king and connects the rooks, completing basic kingside development.",
				},
				{
					description:
						"Develops knight to e2 to avoid blocking the bishop and maintain flexibility against the pin.",
				},
				{
					description:
						"Challenges the center immediately, creating tension and fighting for space.",
				},
				{
					description:
						"Forces the bishop to declare its intentions, gaining time and queenside space.",
				},
				{
					description:
						"Bishop retreats to maintain activity while supporting the central pawn structure.",
				},
				{
					description:
						"Captures the pawn to relieve central tension and open the c-file for operations.",
				},
				{
					description:
						"Recaptures and maintains a central pawn, creating a symmetrical structure in the center.",
				},
			],
		),
	},

	{
		id: "nimzo-indian-leningrad",
		name: "Nimzo-Indian Defense (Leningrad Variation)",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"Nc3",
				"Bb4",
				"Bg5",
				"c5",
				"d5",
				"Bxc3+",
				"bxc3",
				"d6",
				"e3",
				"e5",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for development.",
				},
				{
					description:
						"Nimzo-Indian Defense - develops knight to control the center and prepare for the characteristic bishop pin.",
				},
				{
					description:
						"Gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Prepares to develop the dark-squared bishop and supports the potential d5 break.",
				},
				{
					description:
						"Develops knight to support the center, entering the main line of the Nimzo-Indian.",
				},
				{
					description:
						"Nimzo-Indian signature move - pins the knight, threatening to double pawns and create imbalances.",
				},
				{
					description:
						"Leningrad Variation - pins the knight and creates immediate threats against Black's kingside structure.",
				},
				{
					description:
						"Challenges the center immediately, creating counterplay and opening lines.",
				},
				{
					description:
						"Advances the pawn to gain space and block the center, creating a closed position.",
				},
				{
					description:
						"Captures the knight to damage the pawn structure, sacrificing the bishop pair for positional compensation.",
				},
				{
					description:
						"Recaptures and gains the bishop pair, but accepts doubled pawns as a long-term structural weakness.",
				},
				{
					description:
						"Supports the e5 advance and completes the pawn structure, preparing for central expansion.",
				},
				{
					description:
						"Solidly supports the center and prepares to develop the dark-squared bishop.",
				},
				{
					description:
						"Advances to close the center completely, creating a blocked position that favors strategic maneuvering.",
				},
			],
		),
	},

	{
		id: "nimzo-indian-kasparov",
		name: "Nimzo-Indian Defense - (Kasparov Variation)",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"Nc3",
				"Bb4",
				"f3",
				"d5",
				"a3",
				"Bxc3+",
				"bxc3",
				"c5",
				"cxd5",
				"Nxd5",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for development.",
				},
				{
					description:
						"Nimzo-Indian Defense - develops knight to control the center and prepare for the characteristic bishop pin.",
				},
				{
					description:
						"Gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Prepares to develop the dark-squared bishop and supports the potential d5 break.",
				},
				{
					description:
						"Develops knight to support the center, entering the main line of the Nimzo-Indian.",
				},
				{
					description:
						"Nimzo-Indian signature move - pins the knight, threatening to double pawns and create imbalances.",
				},
				{
					description:
						"Kasparov Variation - strengthens the center and prevents knight jumps to g4, preparing for e2-e4.",
				},
				{
					description:
						"Challenges the center immediately, creating tension and fighting for space.",
				},
				{
					description:
						"Forces the bishop to declare its intentions, gaining time and queenside space.",
				},
				{
					description:
						"Captures the knight to damage the pawn structure, sacrificing the bishop pair for positional compensation.",
				},
				{
					description:
						"Recaptures and gains the bishop pair, but accepts doubled pawns as a long-term structural weakness.",
				},
				{
					description:
						"Attacks the center immediately, targeting the weakened pawn structure.",
				},
				{
					description:
						"Captures the pawn to relieve central tension and open the position.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and putting pressure on the doubled pawns.",
				},
			],
		),
	},
	{
		id: "nimzo-indian-hubner",
		name: "Nimzo-Indian Defense ( Hübner Variation)",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"Nc3",
				"Bb4",
				"e3",
				"c5",
				"Ne2",
				"cxd4",
				"exd4",
				"d5",
				"c5",
				"Nc6",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for development.",
				},
				{
					description:
						"Nimzo-Indian Defense - develops knight to control the center and prepare for the characteristic bishop pin.",
				},
				{
					description:
						"Gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Prepares to develop the dark-squared bishop and supports the potential d5 break.",
				},
				{
					description:
						"Develops knight to support the center, entering the main line of the Nimzo-Indian.",
				},
				{
					description:
						"Nimzo-Indian signature move - pins the knight, threatening to double pawns and create imbalances.",
				},
				{
					description:
						"Solidly supports the center and prepares to develop the dark-squared bishop.",
				},
				{
					description:
						"Challenges the center immediately, creating counterplay and opening lines.",
				},
				{
					description:
						"Develops knight to e2 to avoid blocking the bishop and maintain flexibility against the pin.",
				},
				{
					description:
						"Captures the pawn to relieve central tension and open the position.",
				},
				{
					description:
						"Recaptures and maintains a central pawn, creating an isolated pawn structure.",
				},
				{
					description:
						"Strikes in the center to challenge the isolated pawn and fight for space.",
				},
				{
					description:
						"Advances the pawn to gain queenside space and restrict Black's piece mobility.",
				},
				{
					description:
						"Develops knight to support the center and prepare for counterplay against the advanced pawns.",
				},
			],
		),
	},
];
