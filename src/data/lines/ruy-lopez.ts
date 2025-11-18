import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const ruyLopezLines: Array<OpeningLine> = [
	{
		id: "closed",
		name: "Closed Ruy Lopez (Main Line)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bb5",
				"a6",
				"Ba4",
				"Nf6",
				"O-O",
				"Be7",
				"Re1",
				"b5",
				"Bb3",
				"d6",
				"c3",
				"O-O",
				"h3",
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
						"Ruy Lopez - pins the knight and threatens to double pawns, while preparing to support the d2-d4 break.",
				},
				{
					description:
						"Morphy Defense - immediately challenges the bishop to force a decision, gaining time and space on the queenside.",
				},
				{
					description:
						"Bishop retreats to maintain the pin on the knight and keep pressure on the center, a key idea in the Ruy Lopez.",
				},
				{
					description:
						"Develops knight to attack the e4 pawn and challenge White's center, preparing for kingside castling.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing the basic kingside development.",
				},
				{
					description:
						"Solid development that prepares kingside castling and maintains the integrity of the pawn structure.",
				},
				{
					description:
						"Centralizes the rook and supports the e4 pawn, preparing for the d2-d4 break and increasing pressure.",
				},
				{
					description:
						"Gains queenside space and attacks the bishop, forcing it to retreat and further expanding on the flank.",
				},
				{
					description:
						"Bishop retreats to a safe and active square, maintaining pressure along the a2-g8 diagonal.",
				},
				{
					description:
						"Solidifies the center and prepares to develop the c8 bishop, completing the pawn structure.",
				},
				{
					description:
						"Reinforces the center and prepares the d2-d4 break, a key strategic goal in the Ruy Lopez.",
				},
				{
					description:
						"Secures the king and connects the rooks, bringing Black's position to safety for the middlegame.",
				},
				{
					description:
						"Prevents the pin from ...Bg4 and avoids potential tactical threats, a common prophylactic move in the Ruy Lopez.",
				},
			],
		),
	},

	{
		id: "exchange",
		name: "Exchange Variation",
		moves: generateMovesWithFEN(
			["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Bxc6", "dxc6"],
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
						"Ruy Lopez - pins the knight and threatens to double pawns, while preparing to support the d2-d4 break.",
				},
				{
					description:
						"Morphy Defense - immediately challenges the bishop to force a decision, gaining time and space on the queenside.",
				},
				{
					description:
						"Exchange Variation - captures the knight to double Black's pawns and damage their pawn structure, a strategic decision.",
				},
				{
					description:
						"Forced recapture that opens the d-file and accepts doubled pawns, but gains the bishop pair as compensation.",
				},
			],
		),
	},

	{
		id: "berlin",
		name: "Berlin Defense",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bb5",
				"Nf6",
				"O-O",
				"Nxe4",
				"d4",
				"Nd6",
				"Bxc6",
				"dxc6",
				"dxe5",
				"Nf5",
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
						"Ruy Lopez - pins the knight and threatens to double pawns, while preparing to support the d2-d4 break.",
				},
				{
					description:
						"Berlin Defense - develops knight to challenge White's center immediately rather than playing ...a6.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing the basic kingside development.",
				},
				{
					description:
						"Captures the e4 pawn and challenges White's center, accepting the complications of the Berlin Wall.",
				},
				{
					description:
						"Strikes in the center to challenge Black's knight and regain the pawn, opening lines for development.",
				},
				{
					description:
						"Knight retreats to defend the e5 pawn and maintain material balance, a key defensive idea in the Berlin.",
				},
				{
					description:
						"Captures the knight to damage Black's pawn structure, accepting the exchange of bishops for structural advantage.",
				},
				{
					description:
						"Forced recapture that doubles the pawns but opens the d-file and maintains the bishop pair.",
				},
				{
					description:
						"Captures the e5 pawn and regains material, achieving equality in the position.",
				},
				{
					description:
						"Knight repositions to an active square, eyeing the g3 and d4 squares while completing Black's development.",
				},
			],
		),
	},

	{
		id: "open",
		name: "Open Ruy Lopez",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bb5",
				"a6",
				"Ba4",
				"Nf6",
				"O-O",
				"Nxe4",
				"d4",
				"b5",
				"Bb3",
				"d5",
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
						"Ruy Lopez - pins the knight and threatens to double pawns, while preparing to support the d2-d4 break.",
				},
				{
					description:
						"Morphy Defense - immediately challenges the bishop to force a decision, gaining time and space on the queenside.",
				},
				{
					description:
						"Bishop retreats to maintain the pin on the knight and keep pressure on the center, a key idea in the Ruy Lopez.",
				},
				{
					description:
						"Develops knight to attack the e4 pawn and challenge White's center, preparing for kingside castling.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing the basic kingside development.",
				},
				{
					description:
						"Open Variation - captures the e4 pawn and challenges White's center, accepting the complications of the open game.",
				},
				{
					description:
						"Strikes in the center to challenge Black's knight and regain the pawn, opening lines for development.",
				},
				{
					description:
						"Gains queenside space and attacks the bishop, forcing it to retreat and further expanding on the flank.",
				},
				{
					description:
						"Bishop retreats to a safe and active square, maintaining pressure along the a2-g8 diagonal.",
				},
				{
					description:
						"Reinforces the center and claims space, supporting the knight on e4 and preparing for further development.",
				},
			],
		),
	},

	{
		id: "schliemann",
		name: "Schliemann Defense",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bb5",
				"f5",
				"Nc3",
				"fxe4",
				"Nxe4",
				"d5",
				"Nxe5",
				"dxe4",
				"Qh5+",
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
						"Ruy Lopez - pins the knight and threatens to double pawns, while preparing to support the d2-d4 break.",
				},
				{
					description:
						"Schliemann Defense - aggressive counterattack in the center, challenging White's setup immediately with a pawn sacrifice.",
				},
				{
					description:
						"Develops knight to defend the e4 pawn and maintain central control, preparing for tactical complications.",
				},
				{
					description:
						"Captures the pawn and opens the f-file, accepting the sacrifice and creating immediate tension.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining pressure on Black's position.",
				},
				{
					description:
						"Attacks the knight and gains central space, challenging White's piece coordination and creating threats.",
				},
				{
					description:
						"Captures the e5 pawn and creates tactical opportunities, accepting the complications in this sharp line.",
				},
				{
					description:
						"Captures the knight and regains material, but exposes the king to immediate attack.",
				},
				{
					description:
						"Check that targets the vulnerable f7 square and creates immediate threats against Black's exposed king.",
				},
			],
		),
	},

	{
		id: "steinitz",
		name: "Steinitz Defense",
		moves: generateMovesWithFEN(
			["e4", "e5", "Nf3", "Nc6", "Bb5", "d6", "d4", "Bd7", "Nc3", "Nf6"],
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
						"Ruy Lopez - pins the knight and threatens to double pawns, while preparing to support the d2-d4 break.",
				},
				{
					description:
						"Steinitz Defense - solidly defends the e5 pawn and prepares a flexible development scheme.",
				},
				{
					description:
						"Strikes in the center to challenge Black's pawn structure and open lines for development.",
				},
				{
					description:
						"Develops bishop to challenge White's bishop and break the pin on the knight, completing queenside development.",
				},
				{
					description:
						"Develops knight to support the center and prepare for castling, increasing control over key squares.",
				},
				{
					description:
						"Develops knight to challenge White's center and complete kingside development, preparing for castling.",
				},
			],
		),
	},
];
