import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const scotchGameLines: Array<OpeningLine> = [
	{
		id: "main",
		name: "Main Line Scotch",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"d4",
				"exd4",
				"Nxd4",
				"Bc5",
				"Be3",
				"Qf6",
				"c3",
				"Nge7",
				"Bb5",
				"O-O",
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
						"Mirrors White's central control and prepares for symmetrical development in the open game.",
				},
				{
					description:
						"Develops knight to attack the e5 pawn and control key central squares, preparing for quick castling.",
				},
				{
					description:
						"Develops knight to defend the e5 pawn and control the d4 square, completing natural development.",
				},
				{
					description:
						"Scotch Game - immediate central break to open the position and challenge Black's pawn structure.",
				},
				{
					description:
						"Captures the pawn and relieves central tension, accepting an open position with equal material.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining control over key squares.",
				},
				{
					description:
						"Develops bishop actively to challenge White's knight and control the important a7-g1 diagonal.",
				},
				{
					description:
						"Develops bishop to challenge Black's bishop and defend the knight, maintaining central control.",
				},
				{
					description:
						"Develops queen to attack the d4 knight and increase pressure on the center, creating immediate threats.",
				},
				{
					description:
						"Supports the d4 knight and prepares to develop the b1 knight, reinforcing the center.",
				},
				{
					description:
						"Develops knight to support the center and complete kingside development, preparing for castling.",
				},
				{
					description:
						"Develops bishop to pin the knight and create threats against Black's position, increasing pressure.",
				},
				{
					description:
						"Secures the king and connects the rooks, bringing Black's position to safety for the middlegame.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing White's development and preparing for central operations.",
				},
				{
					description:
						"Challenges the bishop and gains queenside space, forcing White to decide on the bishop's placement.",
				},
			],
		),
	},

	{
		id: "schmidt",
		name: "Schmidt Variation",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"d4",
				"exd4",
				"Nxd4",
				"Nf6",
				"Nxc6",
				"bxc6",
				"e5",
				"Qe7",
				"Qe2",
				"Nd5",
				"c4",
				"Ba6",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"Mirrors White's central control and prepares for symmetrical development in the open game.",
				},
				{
					description:
						"Develops knight to attack the e5 pawn and control key central squares, preparing for quick castling.",
				},
				{
					description:
						"Develops knight to defend the e5 pawn and control the d4 square, completing natural development.",
				},
				{
					description:
						"Scotch Game - immediate central break to open the position and challenge Black's pawn structure.",
				},
				{
					description:
						"Captures the pawn and relieves central tension, accepting an open position with equal material.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining control over key squares.",
				},
				{
					description:
						"Schmidt Variation - develops knight to attack e4 and challenge White's center immediately.",
				},
				{
					description:
						"Captures the knight to damage Black's pawn structure, creating doubled pawns on the c-file.",
				},
				{
					description:
						"Recaptures and accepts doubled pawns, but gains the bishop pair and opens the b-file for counterplay.",
				},
				{
					description:
						"Advances the pawn to gain space and drive back Black's knight, creating immediate threats.",
				},
				{
					description:
						"Develops queen to defend the knight and maintain central control, preparing for kingside castling.",
				},
				{
					description:
						"Develops queen to support the e5 pawn and connect the rooks, preparing for castling.",
				},
				{
					description:
						"Knight retreats to a central outpost, maintaining activity and avoiding being trapped.",
				},
				{
					description:
						"Attacks the knight and gains queenside space, challenging Black's piece coordination.",
				},
				{
					description:
						"Develops bishop actively to pressure the queenside and challenge White's pawn structure.",
				},
			],
		),
	},

	{
		id: "goring-gambit",
		name: "Göring Gambit",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"d4",
				"exd4",
				"c3",
				"dxc3",
				"Bc4",
				"cxb2",
				"Bxb2",
				"Bb4+",
				"Nc3",
				"Nf6",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"Mirrors White's central control and prepares for symmetrical development in the open game.",
				},
				{
					description:
						"Develops knight to attack the e5 pawn and control key central squares, preparing for quick castling.",
				},
				{
					description:
						"Develops knight to defend the e5 pawn and control the d4 square, completing natural development.",
				},
				{
					description:
						"Scotch Game - immediate central break to open the position and challenge Black's pawn structure.",
				},
				{
					description:
						"Captures the pawn and relieves central tension, accepting an open position with equal material.",
				},
				{
					description:
						"Göring Gambit - sacrifices another pawn to accelerate development and open lines for rapid attack.",
				},
				{
					description:
						"Accepts the gambit pawn and gains material, but allows White to develop with strong initiative.",
				},
				{
					description:
						"Develops bishop to target the vulnerable f7 square and create immediate threats against Black's king.",
				},
				{
					description:
						"Captures the pawn and gains more material, but further accelerates White's development and attack.",
				},
				{
					description:
						"Recaptures with the bishop, activating it on the long diagonal with strong attacking potential.",
				},
				{
					description:
						"Check that disrupts White's development and forces a response, gaining time for Black's defense.",
				},
				{
					description:
						"Blocks the check and develops the knight, completing White's development with harmonious piece placement.",
				},
				{
					description:
						"Develops knight to challenge White's center and complete Black's development, preparing for castling.",
				},
			],
		),
	},

	{
		id: "blumenfeld",
		name: "Blumenfeld Attack",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"d4",
				"exd4",
				"Nxd4",
				"Bc5",
				"Nb3",
				"Bb6",
				"a4",
				"a6",
				"a5",
				"Ba7",
				"Bc4",
				"Nf6",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"Mirrors White's central control and prepares for symmetrical development in the open game.",
				},
				{
					description:
						"Develops knight to attack the e5 pawn and control key central squares, preparing for quick castling.",
				},
				{
					description:
						"Develops knight to defend the e5 pawn and control the d4 square, completing natural development.",
				},
				{
					description:
						"Scotch Game - immediate central break to open the position and challenge Black's pawn structure.",
				},
				{
					description:
						"Captures the pawn and relieves central tension, accepting an open position with equal material.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining control over key squares.",
				},
				{
					description:
						"Develops bishop actively to challenge White's knight and control the important a7-g1 diagonal.",
				},
				{
					description:
						"Knight retreats to challenge Black's bishop and avoid potential tactics, gaining time.",
				},
				{
					description:
						"Bishop retreats to maintain the pin threat and avoid exchange, keeping the bishop active.",
				},
				{
					description:
						"Blumenfeld Attack - pawn advance to gain queenside space and threaten to trap the bishop with a5.",
				},
				{
					description:
						"Prevents White's knight from jumping to b5 and prepares to defend the bishop's retreat square.",
				},
				{
					description:
						"Advances to gain space and force the bishop to retreat, limiting Black's piece mobility.",
				},
				{
					description:
						"Bishop retreats to the only safe square, but becomes passive on the edge of the board.",
				},
				{
					description:
						"Develops bishop to target the vulnerable f7 square and complete White's development.",
				},
				{
					description:
						"Develops knight to challenge White's center and complete Black's development, preparing for castling.",
				},
			],
		),
	},
];
