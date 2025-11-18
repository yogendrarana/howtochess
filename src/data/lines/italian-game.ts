import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const italianGameLines: Array<OpeningLine> = [
	{
		id: "giuoco-piano",
		name: "Giuoco Piano (Main Line)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"c3",
				"Nf6",
				"d4",
				"exd4",
				"cxd4",
				"Bb4+",
				"Bd2",
				"Bxd2+",
				"Nbxd2",
				"d5",
			],
			[
				{
					description:
						"Establishes a classical center and opens lines for both the queen and king's bishop, setting the stage for open game warfare.",
				},
				{
					description:
						"Mirrors White's central strategy, contesting the d4 and f4 squares while freeing Black's own pieces for development.",
				},
				{
					description:
						"Develops the knight to its most active square, immediately pressuring e5 and preparing for kingside castling.",
				},
				{
					description:
						"Develops the knight while reinforcing the e5 pawn, completing the classical symmetry of the open game.",
				},
				{
					description:
						"The Italian Game! The bishop targets the vulnerable f7-square and exerts pressure along the a2-g8 diagonal, creating immediate tactical possibilities.",
				},
				{
					description:
						"The Giuoco Piano begins! Black develops the bishop to c5, creating a balanced position where both sides have symmetrical development and central control.",
				},
				{
					description:
						"Prepares the central pawn break d2-d4, reinforcing the d4 square and setting the stage for the main line confrontation in the center.",
				},
				{
					description:
						"Attacks the e4 pawn immediately! The knight develops with tempo, challenging White's center and preparing kingside castling.",
				},
				{
					description:
						"The central breakthrough! White strikes in the center, opening lines for the pieces and challenging Black's position head-on.",
				},
				{
					description:
						"Captures the d4 pawn, accepting the central challenge and opening the position for both sides.",
				},
				{
					description:
						"Recaptures with the c-pawn, maintaining a strong pawn center and opening the c-file for the queen or rook.",
				},
				{
					description:
						"A key check! Black develops with tempo, pinning the knight and forcing White to address the threat before continuing development.",
				},
				{
					description:
						"The standard response - developing the bishop to break the pin while maintaining piece coordination and development tempo.",
				},
				{
					description:
						"Forces the bishop trade, simplifying the position and relieving the pressure on Black's game while opening the knight's development path.",
				},
				{
					description:
						"Develops the knight naturally, reinforcing control of the center and completing the development of the queenside pieces.",
				},
				{
					description:
						"The central counter-strike! Black challenges White's pawn center and fights for space, creating immediate tension in the position and equalizing the game.",
				},
			],
		),
	},

	{
		id: "giuoco-piano-moller-attack",
		name: "Giuoco Piano (Møller Attack)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"c3",
				"Nf6",
				"d4",
				"exd4",
				"cxd4",
				"Bb4+",
				"Nc3",
				"Nxe4",
				"O-O",
				"Bxc3",
				"d5",
			],
			[
				{
					description:
						"Establishes a classical center and opens lines for both the queen and king's bishop, setting the stage for open game warfare.",
				},
				{
					description:
						"Mirrors White's central strategy, contesting the d4 and f4 squares while freeing Black's own pieces for development.",
				},
				{
					description:
						"Develops the knight to its most active square, immediately pressuring e5 and preparing for kingside castling.",
				},
				{
					description:
						"Develops the knight while reinforcing the e5 pawn, completing the classical symmetry of the open game.",
				},
				{
					description:
						"The Italian Game! The bishop targets the vulnerable f7-square and exerts pressure along the a2-g8 diagonal.",
				},
				{
					description:
						"The Giuoco Piano begins! Black develops the bishop to c5, creating a balanced position with symmetrical development.",
				},
				{
					description:
						"Prepares the central pawn break d2-d4, reinforcing the d4 square and setting the stage for the main line confrontation.",
				},
				{
					description:
						"Attacks the e4 pawn immediately! The knight develops with tempo, challenging White's center.",
				},
				{
					description:
						"The central breakthrough! White strikes in the center, opening lines and challenging Black's position head-on.",
				},
				{
					description:
						"Captures the d4 pawn, accepting the central challenge and opening the position for both sides.",
				},
				{
					description:
						"Recaptures with the c-pawn, maintaining a strong pawn center and opening the c-file.",
				},
				{
					description:
						"A key check! Black develops with tempo, pinning the knight and forcing White to address the threat.",
				},
				{
					description:
						"The Møller Attack begins! White develops the knight, sacrificing the e4 pawn for rapid development and attacking chances.",
				},
				{
					description:
						"Black captures the e4 pawn, accepting the sacrifice but walking into White's prepared attacking scheme.",
				},
				{
					description:
						"A crucial move! White sacrifices another pawn, casting into safety while preparing a devastating attack on the uncastled black king.",
				},
				{
					description:
						"Black captures the knight, eliminating a key defender but further accelerating White's development and opening lines for attack.",
				},
				{
					description:
						"The key move of the Møller Attack! White pushes the d-pawn, gaining space, cutting off Black's pieces, and launching a powerful initiative that justifies the material sacrifice.",
				},
			],
		),
	},

	{
		id: "giuoco-piano-greco-variation-main",
		name: "Giuoco Piano (Greco Variation)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"c3",
				"Nf6",
				"d4",
				"exd4",
				"cxd4",
				"Bb4+",
				"Nc3",
				"Nxe4",
				"O-O",
				"Nxc3",
				"bxc3",
				"Bxc3",
				"Qb3",
			],
			[
				{
					description:
						"Establishes a classical center and opens lines for both the queen and king's bishop, setting the stage for open game warfare.",
				},
				{
					description:
						"Mirrors White's central strategy, contesting the d4 and f4 squares while freeing Black's own pieces for development.",
				},
				{
					description:
						"Develops the knight to its most active square, immediately pressuring e5 and preparing for kingside castling.",
				},
				{
					description:
						"Develops the knight while reinforcing the e5 pawn, completing the classical symmetry of the open game.",
				},
				{
					description:
						"The Italian Game! The bishop targets the vulnerable f7-square and exerts pressure along the a2-g8 diagonal.",
				},
				{
					description:
						"The Giuoco Piano begins! Black develops the bishop to c5, creating a balanced position with symmetrical development.",
				},
				{
					description:
						"Prepares the central pawn break d2-d4, reinforcing the d4 square and setting the stage for the main line confrontation.",
				},
				{
					description:
						"Attacks the e4 pawn immediately! The knight develops with tempo, challenging White's center.",
				},
				{
					description:
						"The central breakthrough! White strikes in the center, opening lines and challenging Black's position head-on.",
				},
				{
					description:
						"Captures the d4 pawn, accepting the central challenge and opening the position for both sides.",
				},
				{
					description:
						"Recaptures with the c-pawn, maintaining a strong pawn center and opening the c-file.",
				},
				{
					description:
						"A key check! Black develops with tempo, pinning the knight and forcing White to address the threat.",
				},
				{
					description:
						"The Greco Variation! White develops the knight, offering the e4 pawn sacrifice to accelerate development.",
				},
				{
					description:
						"Black accepts the sacrifice, capturing the e4 pawn and entering the sharp tactical line.",
				},
				{
					description:
						"The defining move of the Greco Variation! White castles into safety, sacrificing a pawn for rapid development and a strong initiative.",
				},
				{
					description:
						"Black captures the knight, eliminating a key defender but further opening lines for White's attack.",
				},
				{
					description:
						"White recaptures with the b-pawn, opening the b-file for the rook and queen, gaining valuable attacking lines.",
				},
				{
					description:
						"Black greedily captures the c3 pawn, but now the black bishop is exposed and Black's development lags dangerously.",
				},
				{
					description:
						"The critical tactical blow! White's queen attacks both the bishop on c3 and the vulnerable f7 pawn, creating multiple threats and launching a devastating attack that justifies all the sacrifices.",
				},
			],
		),
	},

	{
		id: "giuoco-pianissimo",
		name: "Giuoco Pianissimo",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"d3",
				"Nf6",
				"c3",
				"d6",
				"O-O",
				"O-O",
				"Bb3",
				"a6",
			],
			[
				{
					description:
						"Establishes a classical center and opens lines for both the queen and king's bishop, setting the stage for positional maneuvering.",
				},
				{
					description:
						"Mirrors White's central strategy, contesting the d4 and f4 squares while maintaining classical symmetry.",
				},
				{
					description:
						"Develops the knight to its most active square, pressuring e5 and preparing for kingside castling.",
				},
				{
					description:
						"Develops the knight while reinforcing the e5 pawn, completing the harmonious development of minor pieces.",
				},
				{
					description:
						"The Italian Game! The bishop targets the vulnerable f7-square and exerts pressure along the a2-g8 diagonal.",
				},
				{
					description:
						"Completes the symmetrical development, placing the bishop on c5 where it influences the center and kingside.",
				},
				{
					description:
						"Giuoco Pianissimo! This is the move that defines Giucoco Pianissimo. It is also called the slow or quite variation in Giuoco Piano.  White chooses a quiet, solid approach rather than the aggressive d4, building a flexible pawn structure.",
				},
				{
					description:
						"Develops the knight to attack e4, continuing the symmetrical development and preparing kingside castling.",
				},
				{
					description:
						"Reinforces the d4 square and provides additional support for the center, typical of the slow, buildup approach.",
				},
				{
					description:
						"Solidifies the e5 pawn and prevents White's d3-d4 advance, creating a closed center typical of the Pianissimo.",
				},
				{
					description:
						"Secures the king and brings the rook into play, completing the first phase of development in this quiet system.",
				},
				{
					description:
						"Mirrors White's castling, ensuring king safety and connecting the rooks for the coming middlegame.",
				},
				{
					description:
						"Retreats the bishop to safety, removing it from potential attack by ...Na5 and maintaining pressure on the a2-g8 diagonal.",
				},
				{
					description:
						"Prevents White's knight from jumping to b5 and prepares queenside expansion with ...b5, a typical plan in closed positions.",
				},
			],
		),
	},

	{
		id: "two-knights-main",
		name: "Two Knights Defense",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Nf6",
				"Ng5",
				"d5",
				"exd5",
				"Na5",
				"Bb5+",
				"c6",
				"dxc6",
				"bxc6",
				"Qf3",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, creating immediate pressure on the f7 square.",
				},
				{
					description:
						"Mirrors White's central control and develops the king's pawn for classical piece development.",
				},
				{
					description:
						"Develops knight to control key central squares while putting pressure on Black's e5 pawn.",
				},
				{
					description:
						"Develops knight to defend e5 and control d4, completing natural development in the open game.",
				},
				{
					description:
						"Italian Bishop develops to c4, controlling the vulnerable f7 square and the a2-g8 diagonal.",
				},
				{
					description:
						"Two Knights Defense - immediately challenges White's e4 pawn with active counterplay in the center.",
				},
				{
					description:
						"Aggressive knight move threatening the f7 weakness, forcing Black to make structural concessions.",
				},
				{
					description:
						"The only move to counter the f7 threat, sacrificing a pawn to gain time and development.",
				},
				{
					description:
						"Captures the offered pawn and maintains the threat against f7, gaining material with initiative.",
				},
				{
					description:
						"Attacks the bishop while preparing to capture the d5 pawn with tempo, aiming to regain material.",
				},
				{
					description:
						"Check disrupts Black's plans, forcing further concessions in Black's pawn structure.",
				},
				{
					description:
						"Forced response blocks the check but compromises the queenside pawn structure.",
				},
				{
					description:
						"Captures and opens the position, creating doubled pawns for Black while maintaining initiative.",
				},
				{
					description:
						"Recaptures and accepts doubled pawns for the bishop pair, creating a material versus activity imbalance.",
				},
				{
					description:
						"Develops queen aggressively to attack both f7 and the undefended a8 rook simultaneously.",
				},
			],
		),
	},

	{
		id: "hungarian-defense",
		name: "Hungarian Defense",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Be7",
				"d4",
				"exd4",
				"Nxd4",
				"Nf6",
				"Nc3",
				"O-O",
				"O-O",
				"d6",
				"h3",
				"Nd7",
				"Be3",
				"Nc5",
				"Qf3",
			],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the center.",
				},
				{
					description:
						"Mirrors White's central control and prepares for symmetrical development in the open game.",
				},
				{
					description:
						"Develops knight to control key central squares and pressure Black's e5 pawn.",
				},
				{
					description:
						"Hungarian Defense - develops knight to defend e5 while avoiding the more theoretical Italian lines.",
				},
				{
					description:
						"Italian Bishop develops to c4, controlling the f7 square and the important a2-g8 diagonal.",
				},
				{
					description:
						"The Hungarian Defense is on the board. This develops the bishop to e7 for solid but it is a passive defense.",
				},
				{
					description:
						"Strikes in the center immediately, challenging Black's pawn structure and opening lines for development.",
				},
				{
					description:
						"Captures and relieves the central tension, accepting an open position with equal material.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining control over key squares.",
				},
				{
					description:
						"Develops the knight to challenge White's center and prepare kingside castling.",
				},
				{
					description:
						"Completes knight development and reinforces control over the central d4 and e5 squares.",
				},
				{
					description:
						"Secures the king and connects the rooks, completing Black's kingside development.",
				},
				{
					description:
						"Safeguards the king and brings the rook into play, completing White's basic development.",
				},
				{
					description:
						"Reinforces the e5 square and prepares to develop the c8 bishop, creating a solid pawn structure.",
				},
				{
					description:
						"Prevents Black's bishop from pinning the knight with ...Bg4, a useful prophylactic move.",
				},
				{
					description:
						"Redeploys the knight to support the c5 square and prepare queenside counterplay.",
				},
				{
					description:
						"Develops the bishop to an active diagonal, controlling the center and preparing queen development.",
				},
				{
					description:
						"Centralizes the knight to an active outpost, challenging White's control of the center.",
				},
				{
					description:
						"Develops the queen to an aggressive square, connecting the rooks and increasing pressure on the kingside.",
				},
			],
		),
	},
];
