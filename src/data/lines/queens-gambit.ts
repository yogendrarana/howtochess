import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const queensGambitLines: Array<OpeningLine> = [
	{
		id: "queens-gambit-accepted",
		name: "Queen's Gambit Accepted",
		moves: generateMovesWithFEN(
			["d4", "d5", "c4", "dxc4", "e4", "Nc6", "Be3", "Nf6", "Nc3", "e5"],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for both bishops and preparing for classical development.",
				},
				{
					description:
						"Mirrors White's central control and establishes a solid pawn structure, preparing for symmetrical development.",
				},
				{
					description:
						"Queen's Gambit - offers the c-pawn to gain central space and disrupt Black's pawn structure, creating immediate tension.",
				},
				{
					description:
						"Accepts the gambit pawn to gain material, but allows White to dominate the center with rapid piece development.",
				},
				{
					description:
						"Central pawn break that claims maximum space and opens lines for both bishops, justifying the gambit sacrifice.",
				},
				{
					description:
						"Develops knight to challenge White's center and control the d4 square, preparing for active counterplay.",
				},
				{
					description:
						"Develops bishop to control the central dark squares and support the d4 pawn, completing piece development.",
				},
				{
					description:
						"Develops knight to attack the e4 pawn and challenge White's central control, completing kingside development.",
				},
				{
					description:
						"Develops knight to defend the e4 pawn and reinforce central control, preparing for kingside castling.",
				},
				{
					description:
						"Strikes in the center to challenge White's pawn chain and create counterplay, opening lines for Black's pieces.",
				},
			],
		),
	},

	{
		id: "queens-gambit-vs-slav",
		name: "Queens Gambit vs Slav Defense",
		moves: generateMovesWithFEN(
			["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "dxc4", "a4", "Bf5"],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for both bishops and preparing for classical development.",
				},
				{
					description:
						"Claims central space and establishes a solid pawn structure, preparing for the Slav Defense with c7-c6 support.",
				},
				{
					description:
						"Queen's Gambit - offers the c-pawn to gain central space and challenge Black's pawn structure, creating immediate tension.",
				},
				{
					description:
						"Slav Defense - supports the d5 pawn with c6, maintaining central control while preparing to develop the bishop outside the pawn chain.",
				},
				{
					description:
						"Develops knight to control key central squares and support the center, preparing for kingside castling.",
				},
				{
					description:
						"Develops knight to control the center and complete kingside development, preparing for active piece play.",
				},
				{
					description:
						"Develops knight to reinforce the center and prepare to recapture the gambit pawn, completing White's knight development.",
				},
				{
					description:
						"Accepts the gambit pawn to gain material, but allows White to develop with tempo and initiative in the center.",
				},
				{
					description:
						"Prevents Black's b5 expansion and prepares to recover the pawn with Bxc4, a key move in the Slav Defense main line.",
				},
				{
					description:
						"Develops bishop outside the pawn chain to active diagonal, a characteristic Slav Defense move that avoids being blocked in.",
				},
			],
		),
	},

	{
		id: "queens-gambit-vs-semi-slav",
		name: "Queen's Gambit vs Semi-Slav Defense",
		moves: generateMovesWithFEN(
			[
				"d4",
				"d5",
				"c4",
				"e6",
				"Nc3",
				"c6",
				"Nf3",
				"Nf6",
				"e3",
				"Nbd7",
				"Bd3",
				"dxc4",
				"Bxc4",
				"b5",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for both bishops and preparing for classical development.",
				},
				{
					description:
						"Claims central space and establishes a solid pawn structure, preparing for the Semi-Slav Defense setup.",
				},
				{
					description:
						"Queen's Gambit - offers the c-pawn to gain central space and challenge Black's pawn structure, creating immediate tension.",
				},
				{
					description:
						"Prepares the Semi-Slav structure by supporting the d5 pawn with e6, creating a solid defensive foundation.",
				},
				{
					description:
						"Develops knight to reinforce the center and prepare to recapture the gambit pawn, completing White's queenside development.",
				},
				{
					description:
						"Semi-Slav Defense - adds c6 support to strengthen the central pawn chain and prepare for queenside expansion.",
				},
				{
					description:
						"Develops knight to control key central squares and support the center, preparing for kingside castling.",
				},
				{
					description:
						"Develops knight to control the center and complete kingside development, preparing for active piece play.",
				},
				{
					description:
						"Supports the d4 pawn and opens the diagonal for the dark-squared bishop, creating a solid pawn structure.",
				},
				{
					description:
						"Develops knight to support the center and prepare for queenside counterplay, typical Semi-Slav development.",
				},
				{
					description:
						"Develops bishop to control the center and prepare for kingside castling, completing White's development.",
				},
				{
					description:
						"Captures the gambit pawn to gain material, accepting an isolated queen's pawn but opening the position.",
				},
				{
					description:
						"Recaptures the pawn and develops the bishop to an active square, maintaining piece activity and central control.",
				},
				{
					description:
						"Gains queenside space and challenges the bishop, preparing to develop the bishop to b7 and create counterplay.",
				},
			],
		),
	},

	{
		id: "albin-countergambit",
		name: "Albin Countergambit",
		moves: generateMovesWithFEN(
			[
				"d4",
				"d5",
				"c4",
				"e5",
				"dxe5",
				"d4",
				"Nf3",
				"Nc6",
				"Nbd2",
				"Nge7",
				"Nb3",
				"Nf5",
				"e4",
				"dxe3",
				"Qxd8+",
				"Nxd8",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for both bishops and preparing for classical development.",
				},
				{
					description:
						"Claims central space and establishes a solid pawn structure, preparing for symmetrical development.",
				},
				{
					description:
						"Queen's Gambit - offers the c-pawn to gain central space and challenge Black's pawn structure.",
				},
				{
					description:
						"Albin Countergambit - sacrifices a pawn to disrupt White's center and create immediate complications.",
				},
				{
					description:
						"Captures the pawn and gains material, but allows Black to advance with initiative in the center.",
				},
				{
					description:
						"Advances the pawn to create a protected passed pawn and disrupt White's development.",
				},
				{
					description:
						"Develops knight to control key central squares and prepare for kingside castling.",
				},
				{
					description:
						"Develops knight to support the d4 pawn and increase pressure on White's position.",
				},
				{
					description:
						"Develops knight to challenge the d4 pawn and prepare for queenside operations.",
				},
				{
					description:
						"Develops knight to reinforce the center and complete Black's knight development.",
				},
				{
					description:
						"Repositions knight to attack the d4 pawn and increase pressure on Black's center.",
				},
				{
					description:
						"Centralizes the knight to attack e5 and increase piece activity in the center.",
				},
				{
					description:
						"Strikes in the center to challenge Black's advanced pawn and open lines for development.",
				},
				{
					description:
						"Captures to create a passed pawn and maintain material balance, accepting doubled pawns.",
				},
				{
					description:
						"Exchanges queens to simplify the position and reduce Black's attacking chances.",
				},
				{
					description:
						"Recaptures with the knight, maintaining material equality and completing the exchange.",
				},
			],
		),
	},

	{
		id: "queens-gambit-vs-chigorin-defense",
		name: "vs Chigorin Defense",
		moves: generateMovesWithFEN(
			[
				"d4",
				"d5",
				"c4",
				"Nc6",
				"Nf3",
				"Bg4",
				"cxd5",
				"Bxf3",
				"gxf3",
				"Qxd5",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for both bishops and preparing for classical development.",
				},
				{
					description:
						"Claims central space and establishes a solid pawn structure, preparing for symmetrical development.",
				},
				{
					description:
						"Queen's Gambit - offers the c-pawn to gain central space and challenge Black's pawn structure.",
				},
				{
					description:
						"Chigorin Defense - develops knight to c6 instead of the more common e6 or c6, creating immediate pressure on the center.",
				},
				{
					description:
						"Develops knight to control key central squares and prepare for kingside castling.",
				},
				{
					description:
						"Pins the knight on f3 and develops the bishop actively, challenging White's piece coordination.",
				},
				{
					description:
						"Captures the pawn to open the c-file and challenge Black's central structure.",
				},
				{
					description:
						"Captures the knight to damage White's pawn structure, sacrificing the bishop pair for positional compensation.",
				},
				{
					description:
						"Recaptures and accepts doubled pawns, but gains the bishop pair and opens the g-file for rook activity.",
				},
				{
					description:
						"Recaptures the pawn with the queen, centralizing the piece but potentially exposing it to future attacks.",
				},
			],
		),
	},

	{
		id: "declined",
		name: "Queen's Gambit Declined",
		moves: generateMovesWithFEN(
			[
				"d4",
				"d5",
				"c4",
				"e6",
				"Nc3",
				"Nf6",
				"Bg5",
				"Be7",
				"e3",
				"O-O",
				"Nf3",
				"h6",
				"Bh4",
				"b6",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for both bishops and preparing for classical development.",
				},
				{
					description:
						"Claims central space and establishes a solid pawn structure, preparing for the Queen's Gambit Declined with e6.",
				},
				{
					description:
						"Queen's Gambit - offers the c-pawn to gain central space and challenge Black's pawn structure.",
				},
				{
					description:
						"Queen's Gambit Declined - reinforces the d5 pawn with e6, maintaining central control and preparing bishop development.",
				},
				{
					description:
						"Develops knight to reinforce the center and prepare for active piece play, supporting both d4 and e4 squares.",
				},
				{
					description:
						"Develops knight to control the center and complete kingside development, preparing for castling.",
				},
				{
					description:
						"Pins the knight on f6 and develops the bishop actively, creating immediate pressure on Black's position.",
				},
				{
					description:
						"Breaks the pin and develops the bishop to a solid square, preparing for kingside castling.",
				},
				{
					description:
						"Supports the d4 pawn and opens the diagonal for the dark-squared bishop, creating a solid pawn structure.",
				},
				{
					description:
						"Secures the king and connects the rooks, completing Black's basic kingside development.",
				},
				{
					description:
						"Develops knight to control key central squares and complete White's knight development.",
				},
				{
					description:
						"Challenges the bishop to force it to retreat, gaining time and creating potential weaknesses in White's position.",
				},
				{
					description:
						"Bishop retreats to maintain the pin on the knight, avoiding exchange and keeping pressure on Black's position.",
				},
				{
					description:
						"Prepares the fianchetto development and gains queenside space, planning to challenge White's center with the bishop.",
				},
			],
		),
	},

	{
		id: "queens-gambit-vs-tarrasch-defense",
		name: "vs Tarrasch Defense",
		moves: generateMovesWithFEN(
			[
				"d4",
				"d5",
				"c4",
				"e6",
				"Nc3",
				"c5",
				"cxd5",
				"exd5",
				"Nf3",
				"Nc6",
				"g3",
			],
			[
				{
					description:
						"Establishes central control with the queen's pawn, opening lines for both bishops and preparing for classical development.",
				},
				{
					description:
						"Claims central space and establishes a solid pawn structure, preparing for symmetrical development.",
				},
				{
					description:
						"Queen's Gambit - offers the c-pawn to gain central space and challenge Black's pawn structure.",
				},
				{
					description:
						"Reinforces the d5 pawn and prepares to develop the dark-squared bishop, maintaining central control.",
				},
				{
					description:
						"Develops knight to reinforce the center and prepare for active piece play, supporting both d4 and e4 squares.",
				},
				{
					description:
						"Tarrasch Defense - immediately challenges White's center with c5, accepting an isolated queen's pawn in exchange for active piece play.",
				},
				{
					description:
						"Captures to force the exchange and create an isolated d5 pawn for Black, a key strategic decision in the Tarrasch.",
				},
				{
					description:
						"Recaptures and accepts the isolated queen's pawn, gaining open lines and piece activity as compensation.",
				},
				{
					description:
						"Develops knight to control key central squares and put pressure on the isolated d5 pawn.",
				},
				{
					description:
						"Develops knight to support the c5 pawn and control the d4 square, increasing central pressure.",
				},
				{
					description:
						"Prepares the kingside fianchetto to develop the bishop to g2, where it will pressure the isolated d5 pawn and control the long diagonal.",
				},
			],
		),
	},
];
