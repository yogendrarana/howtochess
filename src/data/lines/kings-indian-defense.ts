import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const kingsIndianDefenseLines: Array<OpeningLine> = [
	{
		id: "kings-indian-classical",
		name: "King's Indian Defense (Classical Variation)",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"g6",
				"Nc3",
				"Bg7",
				"e4",
				"d6",
				"Nf3",
				"O-O",
				"Be2",
				"e5",
				"O-O",
				"Nc6",
			],
			[
				{
					description:
						"Queen's Pawn Opening - White establishes central control with the d4 pawn.",
				},
				{
					description:
						"King's Indian Defense - Black develops knight to control the center and prepare for kingside fianchetto.",
				},
				{
					description:
						"White gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Black initiates the King's Indian setup with kingside fianchetto, preparing to develop the bishop to g7.",
				},
				{
					description:
						"White develops knight to support the center and control key squares.",
				},
				{
					description:
						"Black completes the fianchetto development, placing bishop on the long diagonal to pressure the center.",
				},
				{
					description:
						"White establishes a strong pawn center with pawns on d4 and e4, gaining significant space.",
				},
				{
					description:
						"Black supports the e5 square and completes the pawn structure, preparing for central counterplay.",
				},
				{
					description:
						"White develops knight to control central squares and prepare kingside castling.",
				},
				{
					description:
						"Black secures the king and connects the rooks, completing basic kingside development.",
				},
				{
					description:
						"White develops bishop to support the center and prepare kingside castling.",
				},
				{
					description:
						"Black challenges White's center immediately with e5, the typical King's Indian counterattack.",
				},
				{
					description:
						"White castles kingside, safeguarding the king and connecting the rooks.",
				},
				{
					description:
						"Black develops knight to support the e5 pawn and increase pressure on the center, completing development in the Classical King's Indian system.",
				},
			],
		),
	},

	{
		id: "kings-indian-samisch",
		name: "King's Indian Defense (Sämisch Variation)",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"g6",
				"Nc3",
				"Bg7",
				"e4",
				"d6",
				"f3",
				"O-O",
				"Be3",
				"e5",
				"d5",
			],
			[
				{
					description:
						"Queen's Pawn Opening - White establishes central control with the d4 pawn.",
				},
				{
					description:
						"King's Indian Defense - Black develops knight to control the center and prepare for kingside fianchetto.",
				},
				{
					description:
						"White gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Black initiates the King's Indian setup with kingside fianchetto, preparing to develop the bishop to g7.",
				},
				{
					description:
						"White develops knight to support the center and control key squares.",
				},
				{
					description:
						"Black completes the fianchetto development, placing bishop on the long diagonal to pressure the center.",
				},
				{
					description:
						"White establishes a strong pawn center with pawns on d4 and e4, gaining significant space.",
				},
				{
					description:
						"Black supports the e5 square and completes the pawn structure, preparing for central counterplay.",
				},
				{
					description:
						"Sämisch Variation - White strengthens the center and prevents ...Ng4 attacks, preparing for Be3 and Qd2.",
				},
				{
					description:
						"Black secures the king and connects the rooks, completing basic kingside development.",
				},
				{
					description:
						"White develops bishop to support the center and prepare the queen-side castling plan.",
				},
				{
					description:
						"Black challenges White's center immediately with e5, the typical King's Indian counterattack.",
				},
				{
					description:
						"White advances the pawn to gain space and block the center, creating a closed position that favors White's attacking chances.",
				},
			],
		),
	},

	{
		id: "kings-indian-fianchetto",
		name: "King's Indian Defense (Fianchetto Variation)",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"g6",
				"Nf3",
				"Bg7",
				"g3",
				"O-O",
				"Bg2",
				"d6",
				"O-O",
				"Nbd7",
			],
			[
				{
					description:
						"Queen's Pawn Opening - White establishes central control with the d4 pawn.",
				},
				{
					description:
						"King's Indian Defense - Black develops knight to control the center and prepare for kingside fianchetto.",
				},
				{
					description:
						"White gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Black initiates the King's Indian setup with kingside fianchetto, preparing to develop the bishop to g7.",
				},
				{
					description:
						"White develops knight to control central squares and prepare for kingside castling.",
				},
				{
					description:
						"Black completes the fianchetto development, placing bishop on the long diagonal to pressure the center.",
				},
				{
					description:
						"Fianchetto Variation - White prepares to develop the bishop to g2, avoiding the main theoretical lines.",
				},
				{
					description:
						"Black secures the king and connects the rooks, completing basic kingside development.",
				},
				{
					description:
						"White completes the kingside fianchetto, placing bishop on the long diagonal to counter Black's setup.",
				},
				{
					description:
						"Black supports the e5 square and completes the pawn structure, preparing for central counterplay.",
				},
				{
					description:
						"White castles kingside, safeguarding the king and connecting the rooks.",
				},
				{
					description:
						"Black develops knight to support the e5 break and prepare for queenside expansion, typical in the Fianchetto Variation.",
				},
			],
		),
	},

	{
		id: "kings-indian-four-pawns",
		name: "King's Indian Defense - Four Pawns Attack",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"g6",
				"Nc3",
				"Bg7",
				"e4",
				"d6",
				"f4",
				"O-O",
				"Nf3",
				"c5",
			],
			[
				{
					description:
						"Queen's Pawn Opening - White establishes central control with the d4 pawn.",
				},
				{
					description:
						"King's Indian Defense - Black develops knight to control the center and prepare for kingside fianchetto.",
				},
				{
					description:
						"White gains queenside space and supports the d4 pawn, creating the classic pawn center.",
				},
				{
					description:
						"Black initiates the King's Indian setup with kingside fianchetto, preparing to develop the bishop to g7.",
				},
				{
					description:
						"White develops knight to support the center and control key squares.",
				},
				{
					description:
						"Black completes the fianchetto development, placing bishop on the long diagonal to pressure the center.",
				},
				{
					description:
						"White establishes a strong pawn center with pawns on d4 and e4, gaining significant space.",
				},
				{
					description:
						"Black supports the e5 square and completes the pawn structure, preparing for central counterplay.",
				},
				{
					description:
						"Four Pawns Attack - White aggressively expands with f4, creating a massive pawn center and attacking formation.",
				},
				{
					description:
						"Black secures the king and connects the rooks, completing basic kingside development.",
				},
				{
					description:
						"White develops knight to control central squares and support the advanced pawn structure.",
				},
				{
					description:
						"Black counterattacks immediately with c5, challenging White's center and creating tension on the queenside.",
				},
			],
		),
	},
];
