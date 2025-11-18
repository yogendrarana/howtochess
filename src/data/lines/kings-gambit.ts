import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const kingsGambitLines: Array<OpeningLine> = [
	{
		id: "kings-gambit-main",
		name: "King's Gambit Accepted",
		moves: generateMovesWithFEN(
			["e4", "e5", "f4"],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing aggressive intentions from the start.",
				},
				{
					description:
						"Mirrors White's central control and accepts the coming gambit, preparing for open tactical battle.",
				},
				{
					description:
						"The King's Gambit - sacrifices a pawn to open the f-file and accelerate development for attacking chances.",
				},
			],
		),
	},

	{
		id: "kieseritzky-gambit",
		name: "Kieseritzky Gambit",
		moves: generateMovesWithFEN(
			["e4", "e5", "f4", "exf4", "Nf3", "g5", "h4"],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing aggressive intentions from the start.",
				},
				{
					description:
						"Mirrors White's central control and accepts the coming gambit, preparing for open tactical battle.",
				},
				{
					description:
						"The King's Gambit - sacrifices a pawn to open the f-file and accelerate development for attacking chances.",
				},
				{
					description:
						"Accepts the gambit pawn and gains material, but must now face White's rapid development and kingside pressure.",
				},
				{
					description:
						"Develops knight to attack the f4 pawn and control key squares, preparing for quick castling and piece coordination.",
				},
				{
					description:
						"Defends the f4 pawn and gains kingside space, but creates potential weaknesses around the black king.",
				},
				{
					description:
						"Kieseritzky Gambit - immediately challenges Black's pawn chain to undermine the defense of f4 and open the h-file for attack.",
				},
			],
		),
	},
	{
		id: "bishops-gambit",
		name: "Bishop's Gambit",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"f4",
				"exf4",
				"Bc4",
				"Nf6",
				"Nc3",
				"Bb4",
				"Nge2",
				"d5",
				"Bxd5",
				"Nxd5",
				"Nxd5",
				"Qg5",
				"O-O",
				"Be6",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing aggressive intentions from the start.",
				},
				{
					description:
						"Mirrors White's central control and accepts the coming gambit, preparing for open tactical battle.",
				},
				{
					description:
						"The King's Gambit - sacrifices a pawn to open the f-file and accelerate development for attacking chances.",
				},
				{
					description:
						"Accepts the gambit pawn and gains material, but must now face White's rapid development and kingside pressure.",
				},
				{
					description:
						"Bishop's Gambit - develops the bishop to c4 to target f7 and maintain pressure without blocking the knight's development.",
				},
				{
					description:
						"Develops knight to attack e4 and challenge White's center immediately.",
				},
				{
					description:
						"Develops knight to defend e4 and prepare for quick castling, maintaining piece coordination.",
				},
				{
					description:
						"Pins the knight on c3 and develops actively, creating threats against White's center.",
				},
				{
					description:
						"Develops the knight to avoid the pin and maintain control over key central squares.",
				},
				{
					description:
						"Strikes in the center to challenge White's bishop and gain space, but opens lines for White's pieces.",
				},
				{
					description:
						"Captures the pawn to maintain material balance and keep the position dynamic.",
				},
				{
					description:
						"Captures the bishop to regain material and simplify the position.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining threats against Black's position.",
				},
				{
					description:
						"Develops the queen aggressively to attack g2 and create kingside threats.",
				},
				{
					description:
						"Safeguards the king and brings the rook into play, completing development while accepting doubled pawns.",
				},
				{
					description:
						"Develops the bishop to challenge White's centralized knight and complete Black's development.",
				},
			],
		),
	},
	{
		id: "fischer",
		name: "Fischer Defense",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"f4",
				"exf4",
				"Nf3",
				"d6",
				"Bc4",
				"h6",
				"d4",
				"g5",
				"h4",
				"Bg7",
				"hxg5",
				"hxg5",
				"Rxh8",
				"Bxh8",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing aggressive intentions from the start.",
				},
				{
					description:
						"Mirrors White's central control and accepts the coming gambit, preparing for open tactical battle.",
				},
				{
					description:
						"The King's Gambit - sacrifices a pawn to open the f-file and accelerate development for attacking chances.",
				},
				{
					description:
						"Accepts the gambit pawn and gains material, but must now face White's rapid development and kingside pressure.",
				},
				{
					description:
						"Develops knight to attack the f4 pawn and control key squares, preparing for quick castling.",
				},
				{
					description:
						"Fischer Defense - solid move that supports the center and prepares to develop the bishop while avoiding sharp lines.",
				},
				{
					description:
						"Develops bishop to target f7 and maintain pressure, a key attacking piece in the King's Gambit.",
				},
				{
					description:
						"Prevents Ng5 and prepares kingside expansion, but creates potential weaknesses.",
				},
				{
					description:
						"Strikes in the center to gain space and open lines, challenging Black's pawn structure.",
				},
				{
					description:
						"Advances to defend the f4 pawn and gain kingside space, but further weakens the position.",
				},
				{
					description:
						"Immediately challenges Black's pawn chain to undermine the defense and open the h-file.",
				},
				{
					description:
						"Develops bishop to active diagonal and prepares kingside castling, completing Black's development.",
				},
				{
					description:
						"Captures to open the h-file and expose Black's king, creating attacking opportunities.",
				},
				{
					description:
						"Forced recapture that maintains material but leaves the king exposed on the h-file.",
				},
				{
					description:
						"Exchanges rooks to eliminate Black's defender and increase pressure along the open file.",
				},
				{
					description:
						"Recaptures with the bishop, removing it from the active diagonal and completing the exchange.",
				},
			],
		),
	},

	{
		id: "kings-gambit-declined",
		name: "King's Gambit Declined (Main Line)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"f4",
				"Bc5",
				"Nf3",
				"d6",
				"c3",
				"Nf6",
				"d4",
				"exd4",
				"cxd4",
				"Bb6",
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
						"The King's Gambit - offers a pawn sacrifice to open the f-file and accelerate development for attacking chances.",
				},
				{
					description:
						"Declines the gambit and develops bishop actively to c5, eyeing the vulnerable f2 square and maintaining solid position.",
				},
				{
					description:
						"Develops knight to attack e5 and control key central squares, preparing for quick castling and piece coordination.",
				},
				{
					description:
						"Solidifies the center and supports the e5 pawn, preparing to develop the c8 bishop while maintaining structure.",
				},
				{
					description:
						"Prepares to support d2-d4 advance and reinforce the center, creating a strong pawn structure for White.",
				},
				{
					description:
						"Develops knight to attack e4 and challenge White's center immediately, completing kingside development.",
				},
				{
					description:
						"Strikes in the center to challenge Black's pawn structure and open lines for White's pieces.",
				},
				{
					description:
						"Captures to relieve central tension and open the e-file, accepting symmetrical pawn structure.",
				},
				{
					description:
						"Recaptures and maintains strong pawn center, achieving space advantage and open c-file for rooks.",
				},
				{
					description:
						"Bishop retreats to safety while maintaining pressure along the long diagonal, avoiding the advancing pawns.",
				},
			],
		),
	},

	{
		id: "falkbeer",
		name: "Falkbeer Countergambit",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"f4",
				"d5",
				"exd5",
				"e4",
				"d3",
				"Nf6",
				"dxe4",
				"Nxe4",
				"Nf3",
				"Bc5",
				"Qe2",
				"Bf5",
				"Nc3",
				"Qe7",
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
						"The King's Gambit - offers a pawn sacrifice to open the f-file and accelerate development for attacking chances.",
				},
				{
					description:
						"Falkbeer Countergambit - immediately counters in the center rather than accepting the gambit, challenging White's setup with a pawn sacrifice of their own.",
				},
				{
					description:
						"Captures the pawn and gains material, but allows Black to advance with initiative in the center.",
				},
				{
					description:
						"Advances the pawn to gain central space and disrupt White's development, creating immediate threats and opening lines.",
				},
				{
					description:
						"Challenges the advanced e4 pawn immediately, aiming to open the position and relieve the pressure.",
				},
				{
					description:
						"Develops knight to attack the d5 pawn and increase pressure, completing kingside development.",
				},
				{
					description:
						"Captures the pawn to eliminate Black's advanced center and open the position for piece development.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining active piece play in the center.",
				},
				{
					description:
						"Develops knight to control key central squares and prepare kingside castling, completing development.",
				},
				{
					description:
						"Develops bishop to active diagonal, pinning the d4 square and creating threats against White's kingside.",
				},
				{
					description:
						"Develops queen to defend the knight and connect the rooks, preparing for queenside castling.",
				},
				{
					description:
						"Develops bishop to pin the queen and knight, increasing pressure and completing Black's development.",
				},
				{
					description:
						"Develops knight to challenge Black's centralized knight and reinforce control over the center.",
				},
				{
					description:
						"Develops queen to connect the rooks and support the centralized knight, completing Black's development with harmonious piece coordination.",
				},
			],
		),
	},
];
