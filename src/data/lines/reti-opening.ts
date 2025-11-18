import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const retiOpeningLines: Array<OpeningLine> = [
	{
		id: "reti-main",
		name: "Réti Opening - Main Line",
		moves: generateMovesWithFEN(
			[
				"Nf3",
				"d5",
				"c4",
				"c6",
				"b3",
				"Nf6",
				"g3",
				"Bg4",
				"Bg2",
				"Nbd7",
				"O-O",
				"e6",
				"Bb2",
				"Bd6",
				"d3",
				"O-O",
			],
			[
				{
					description:
						"Réti Opening - develops knight to control central squares while keeping pawn structure flexible and delaying d2-d4 commitment.",
				},
				{
					description:
						"Establishes central presence with d5 pawn, claiming space and preparing for classical development.",
				},
				{
					description:
						"Flank attack against Black's center, typical Réti strategy to challenge d5 from the side rather than directly.",
				},
				{
					description:
						"Supports the d5 pawn and prepares queenside expansion, maintaining solid central structure.",
				},
				{
					description:
						"Prepares the queenside fianchetto, developing the bishop to b2 to pressure the long diagonal and Black's center.",
				},
				{
					description:
						"Develops knight to control the center and complete kingside development, preparing for castling.",
				},
				{
					description:
						"Initiates kingside fianchetto, preparing to develop the bishop to g2 for additional pressure on the center.",
				},
				{
					description:
						"Develops bishop to pin the knight and challenge White's piece coordination, creating immediate tension.",
				},
				{
					description:
						"Completes the kingside fianchetto, placing bishop on long diagonal to exert pressure on Black's queenside.",
				},
				{
					description:
						"Develops knight to support central operations and prepare for eventual e5 or c5 advances.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing basic kingside development in Réti system.",
				},
				{
					description:
						"Solidifies the center and prepares to develop the dark-squared bishop, completing Black's pawn structure.",
				},
				{
					description:
						"Completes the double fianchetto development, placing both bishops on long diagonals for maximum pressure.",
				},
				{
					description:
						"Develops bishop to active diagonal, challenging White's control and preparing for central operations.",
				},
				{
					description:
						"Reinforces the center and prepares for eventual e2-e4 break, maintaining flexible pawn structure.",
				},
				{
					description:
						"Secures the king and connects the rooks, completing Black's development and preparing for middlegame.",
				},
			],
		),
	},

	{
		id: "kings-indian-attack",
		name: "Reti to KIA",
		moves: generateMovesWithFEN(
			[
				"Nf3",
				"d5",
				"g3",
				"Nf6",
				"Bg2",
				"c6",
				"O-O",
				"Bg4",
				"d3",
				"Nbd7",
				"Nbd2",
				"e5",
				"e4",
				"Be7",
			],
			[
				{
					description:
						"Reti Opening - flexible development controlling central squares while delaying pawn commitments and keeping options open.",
				},
				{
					description:
						"Establishes central presence with d5 pawn, claiming space and preparing for classical development against White's flexible setup.",
				},
				{
					description:
						"Initiates the transition to King's Indian Attack with kingside fianchetto, preparing to develop the bishop to g2.",
				},
				{
					description:
						"Develops knight to control the center and maintain flexibility, preparing for kingside castling.",
				},
				{
					description:
						"Completes the kingside fianchetto, placing bishop on long diagonal to exert pressure on the center and queenside.",
				},
				{
					description:
						"Supports the d5 pawn and prepares queenside expansion, creating a solid defensive structure.",
				},
				{
					description:
						"Safeguards the king and connects the rooks early, completing basic kingside development in the KIA system.",
				},
				{
					description:
						"Develops bishop to pin the knight and challenge White's piece coordination, creating immediate tension.",
				},
				{
					description:
						"Reinforces the center and prepares for e2-e4 break, typical pawn structure for King's Indian Attack transition.",
				},
				{
					description:
						"Develops knight to support central operations and prepare for eventual e5 or c5 advances.",
				},
				{
					description:
						"Completes knight development while maintaining flexibility, preparing to support central expansion and kingside operations.",
				},
				{
					description:
						"Advances in center to gain space and establish strong pawn chain, limiting White's options and claiming territory.",
				},
				{
					description:
						"The key central break that completes the transition to King's Indian Attack, challenging Black's center and opening lines.",
				},
				{
					description:
						"Solid development that prepares kingside castling and maintains the integrity of the pawn structure.",
				},
			],
		),
	},

	{
		id: "capablanca",
		name: "Reti (Capablanca Variation)",
		moves: generateMovesWithFEN(
			[
				"Nf3",
				"Nf6",
				"c4",
				"e6",
				"g3",
				"d5",
				"b3",
				"Be7",
				"Bg2",
				"O-O",
				"O-O",
				"c5",
				"Bb2",
				"Nc6",
			],
			[
				{
					description:
						"Réti Opening - flexible development controlling central squares while keeping pawn structure adaptable.",
				},
				{
					description:
						"Develops knight to control the center and maintain symmetry, preparing for classical development.",
				},
				{
					description:
						"Flank attack against Black's potential center, typical Réti strategy to pressure from the side.",
				},
				{
					description:
						"Solidifies the center and prepares to develop the bishop, maintaining flexible pawn structure.",
				},
				{
					description:
						"Initiates kingside fianchetto, preparing to develop the bishop to g2 for long diagonal pressure.",
				},
				{
					description:
						"Establishes central presence and challenges White's c4 pawn, creating classical pawn tension.",
				},
				{
					description:
						"Prepares the queenside fianchetto, developing the bishop to b2 to pressure Black's center diagonally.",
				},
				{
					description:
						"Solid development that prepares kingside castling and maintains flexible piece coordination.",
				},
				{
					description:
						"Completes the kingside fianchetto, placing bishop on long diagonal to exert pressure on the center.",
				},
				{
					description:
						"Secures the king and connects the rooks, completing Black's basic kingside development.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing White's development with harmonious piece placement.",
				},
				{
					description:
						"Challenges White's center and gains queenside space, creating counterplay and controlling d4.",
				},
				{
					description:
						"Completes the double fianchetto development, placing both bishops on long diagonals for maximum pressure.",
				},
				{
					description:
						"Develops knight to support the c5 pawn and control key central squares, increasing pressure.",
				},
			],
		),
	},

	{
		id: "reti-vs-queens-pawn",
		name: "Reti vs Queen's Pawn",
		moves: generateMovesWithFEN(
			[
				"Nf3",
				"d5",
				"c4",
				"e6",
				"g3",
				"Nf6",
				"Bg2",
				"Be7",
				"O-O",
				"O-O",
				"d4",
				"c6",
			],
			[
				{
					description:
						"Réti Opening - develops knight to control central squares while keeping pawn structure flexible and delaying d2-d4 commitment.",
				},
				{
					description:
						"Establishes central presence with d5 pawn, claiming space and preparing for classical development against White's flexible setup.",
				},
				{
					description:
						"Flank attack against Black's center, typical Réti strategy to pressure d5 from the side and create immediate tension.",
				},
				{
					description:
						"Solidifies the center and prepares to develop the bishop, maintaining flexible pawn structure and supporting d5.",
				},
				{
					description:
						"Initiates kingside fianchetto, preparing to develop the bishop to g2 for long diagonal pressure on the center.",
				},
				{
					description:
						"Develops knight to control the center and complete kingside development, preparing for castling.",
				},
				{
					description:
						"Completes the kingside fianchetto, placing bishop on long diagonal to exert pressure on Black's queenside and center.",
				},
				{
					description:
						"Solid development that prepares kingside castling and maintains flexible piece coordination.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing White's basic development in the Réti system.",
				},
				{
					description:
						"Secures the king and connects the rooks, completing Black's development and preparing for middlegame.",
				},
				{
					description:
						"The delayed central break, transforming the position and claiming space in the center after completing development.",
				},
				{
					description:
						"Supports the d5 pawn and prepares queenside expansion, creating a solid defensive structure against White's center.",
				},
			],
		),
	},

	{
		id: "reti-gambit",
		name: "Reti Accepted",
		moves: generateMovesWithFEN(
			[
				"Nf3",
				"d5",
				"c4",
				"dxc4",
				"Na3",
				"c5",
				"Nxc4",
				"Nc6",
				"g3",
				"Nf6",
				"Bg2",
				"g6",
			],
			[
				{
					description:
						"Réti Opening - develops knight to control central squares while keeping pawn structure flexible and delaying d2-d4 commitment.",
				},
				{
					description:
						"Establishes central presence with d5 pawn, claiming space and preparing for classical development against White's flexible setup.",
				},
				{
					description:
						"Offers the Réti Gambit, sacrificing a pawn to accelerate development and create immediate imbalances in the position.",
				},
				{
					description:
						"Accepts the gambit pawn, gaining material but allowing White to develop with tempo and initiative.",
				},
				{
					description:
						"Unconventional knight development that prepares to recapture the pawn while avoiding blocking the c-pawn, a typical Réti Gambit idea.",
				},
				{
					description:
						"Challenges the center and gains queenside space, attempting to solidify Black's position and limit White's compensation.",
				},
				{
					description:
						"Recaptures the pawn and centralizes the knight, achieving active piece placement and completing development.",
				},
				{
					description:
						"Develops knight to support the center and control key squares, increasing Black's central presence.",
				},
				{
					description:
						"Initiates kingside fianchetto, preparing to develop the bishop to g2 for long diagonal pressure.",
				},
				{
					description:
						"Develops knight to control the center and complete kingside development, preparing for castling.",
				},
				{
					description:
						"Completes the kingside fianchetto, placing bishop on long diagonal to exert pressure on Black's queenside.",
				},
				{
					description:
						"Prepares the fianchetto development, planning to place the bishop on g7 to challenge White's control of the center.",
				},
			],
		),
	},
];
