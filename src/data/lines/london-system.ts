import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const londonSystemLines: Array<OpeningLine> = [
	{
		id: "main-line-london",
		name: "Main Line London",
		moves: generateMovesWithFEN(
			[
				"d4",
				"d5",
				"Bf4",
				"Nf6",
				"e3",
				"c5",
				"c3",
				"Nc6",
				"Nd2",
				"e6",
				"Ngf3",
				"Bd6",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for both the queen and dark-squared bishop.",
				},
				{
					description:
						"Mirrors White's central control and establishes a solid classical pawn structure in the center.",
				},
				{
					description:
						"London System signature move - develops the bishop outside the pawn chain to exert pressure along the long diagonal.",
				},
				{
					description:
						"Develops knight to control the center and prepare kingside castling, completing basic development.",
				},
				{
					description:
						"Supports the d4 pawn and opens the diagonal for the dark-squared bishop, creating a solid pawn structure.",
				},
				{
					description:
						"Challenges White's center immediately and gains queenside space, creating counterplay opportunities.",
				},
				{
					description:
						"Reinforces the d4 pawn and prepares to develop the knight to d2, maintaining the solid London structure.",
				},
				{
					description:
						"Develops knight to support the c5 pawn and control the d4 square, increasing central pressure.",
				},
				{
					description:
						"Develops knight while keeping the c-pawn supported, typical London System development that avoids blocking the bishop.",
				},
				{
					description:
						"Solidifies the center and prepares to develop the dark-squared bishop, completing Black's pawn structure.",
				},
				{
					description:
						"Completes knight development and controls key central squares, preparing for kingside castling.",
				},
				{
					description:
						"Develops bishop to challenge White's bishop on f4 and complete Black's development with active piece play.",
				},
			],
		),
	},
	{
		id: "london-vs-kings-indian",
		name: "London System vs King's Indian",
		moves: generateMovesWithFEN(
			["d4", "Nf6", "Bf4", "g6", "Nf3", "Bg7", "e3", "O-O", "c3", "d6"],
			[
				{
					description:
						"Establishes central control with the queen's pawn, preparing for a solid positional game with the London System.",
				},
				{
					description:
						"King's Indian Defense - develops knight to control the center and prepare for kingside fianchetto.",
				},
				{
					description:
						"London System signature move - develops bishop outside the pawn chain to pressure the long diagonal.",
				},
				{
					description:
						"Initiates the King's Indian setup with kingside fianchetto, preparing to develop the bishop to g7.",
				},
				{
					description:
						"Develops knight to control central squares and support the d4 pawn, typical London development.",
				},
				{
					description:
						"Completes the fianchetto development, placing the bishop on the active long diagonal.",
				},
				{
					description:
						"Supports the d4 pawn and opens the diagonal for the dark-squared bishop, creating solid structure.",
				},
				{
					description:
						"Secures the king and connects the rooks, completing Black's basic kingside development.",
				},
				{
					description:
						"Reinforces the center and prepares for eventual d4-d5 advance or knight development to d2.",
				},
				{
					description:
						"Supports the e5 square and prepares for central expansion with ...e5, typical King's Indian plan.",
				},
			],
		),
	},
	{
		id: "london-vs-queens-gambit",
		name: "London System vs Queen's Gambit",
		moves: generateMovesWithFEN(
			[
				"d4",
				"d5",
				"Bf4",
				"c5",
				"e3",
				"Nc6",
				"c3",
				"Nf6",
				"Nd2",
				"e6",
				"Ngf3",
				"Bd6",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, preparing for a solid positional game with the London System.",
				},
				{
					description:
						"Establishes classical central presence and prepares for Queen's Gambit structure with c7-c5 break.",
				},
				{
					description:
						"London System signature move - develops bishop outside the pawn chain to pressure the long diagonal and control key squares.",
				},
				{
					description:
						"Immediately challenges White's center and gains queenside space, typical Queen's Gambit approach.",
				},
				{
					description:
						"Supports the d4 pawn and opens the diagonal for the dark-squared bishop, creating a solid defensive structure.",
				},
				{
					description:
						"Develops knight to support the c5 pawn and control the d4 square, increasing central pressure.",
				},
				{
					description:
						"Reinforces the d4 pawn and prepares to develop the knight to d2, maintaining the solid London structure.",
				},
				{
					description:
						"Develops knight to control the center and complete kingside development, preparing for castling.",
				},
				{
					description:
						"Develops knight while keeping the c-pawn supported, typical London System development that avoids blocking the bishop.",
				},
				{
					description:
						"Solidifies the center and prepares to develop the dark-squared bishop, completing Black's pawn structure.",
				},
				{
					description:
						"Completes knight development and controls key central squares, preparing for kingside castling.",
				},
				{
					description:
						"Develops bishop to challenge White's bishop on f4 and complete Black's development with active piece play.",
				},
			],
		),
	},
];
