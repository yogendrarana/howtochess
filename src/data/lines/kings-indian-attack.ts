import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const kingsIndianAttackLines: Array<OpeningLine> = [
	{
		id: "vs-french",
		name: "vs French Defense",
		moves: generateMovesWithFEN(
			[
				"Nf3",
				"d5",
				"g3",
				"Nf6",
				"Bg2",
				"c5",
				"O-O",
				"Nc6",
				"d3",
				"e6",
				"Nbd2",
				"Be7",
				"e4",
				"O-O",
				"Re1",
				"b6",
				"e5",
				"Nd7",
				"Qe2",
				"Bb7",
				"Nf1",
				"Rc8",
				"h4",
			],
			[
				{
					description:
						"King's Indian Attack begins with flexible knight development, controlling the center and preparing for fianchetto.",
				},
				{
					description:
						"Establishes central presence with the d5 pawn, challenging White's flexible setup and controlling key squares.",
				},
				{
					description:
						"Initiates the King's Indian Attack formation with kingside fianchetto, preparing to develop the bishop to g2.",
				},
				{
					description:
						"Develops knight to control the center and maintain flexibility, typical response against White's system approach.",
				},
				{
					description:
						"Completes the fianchetto development, placing the bishop on the long diagonal where it exerts pressure on the center and queenside.",
				},
				{
					description:
						"Challenges White's setup by gaining space on the queenside and preparing to contest the center.",
				},
				{
					description:
						"Safeguards the king and connects the rooks early, a key feature of the King's Indian Attack system.",
				},
				{
					description:
						"Develops the knight to support the c5 pawn and control the d4 square, completing Black's knight development.",
				},
				{
					description:
						"Reinforces the center and prepares for e2-e4 break, typical pawn structure for the King's Indian Attack.",
				},
				{
					description:
						"Solidifies the center and prepares to develop the dark-squared bishop, creating a flexible pawn structure.",
				},
				{
					description:
						"Develops the knight to support the e4 advance and maintain control over the center, typical KIA development.",
				},
				{
					description:
						"Completes kingside development with the bishop, preparing to castle and maintain a solid position.",
				},
				{
					description:
						"The key central break in the King's Indian Attack, gaining space and opening lines for the pieces.",
				},
				{
					description:
						"Secures the king and connects the rooks, completing Black's basic development and preparing for middlegame.",
				},
				{
					description:
						"Centralizes the rook and supports the e5 pawn, preparing for potential kingside expansion and piece coordination.",
				},
				{
					description:
						"Prepares the fianchetto development and gains queenside space, challenging White's bishop on the long diagonal.",
				},
				{
					description:
						"Advances the pawn to gain space and displace Black's knight, a typical plan in the King's Indian Attack.",
				},
				{
					description:
						"Knight retreats to maintain control over e5 and prepare counterplay in the center.",
				},
				{
					description:
						"Develops the queen to support the e5 pawn and connect the rooks, preparing for kingside operations.",
				},
				{
					description:
						"Completes the fianchetto development, challenging White's bishop and controlling the long diagonal.",
				},
				{
					description:
						"Knight repositions to support kingside attack and potentially jump to g5 or h4, typical KIA maneuver.",
				},
				{
					description:
						"Activates the rook on the semi-open file, preparing for queenside counterplay and central operations.",
				},
				{
					description:
						"Initiates the kingside pawn storm, a characteristic attacking plan in the King's Indian Attack that threatens to open lines against Black's king.",
				},
			],
		),
	},

	// vs caro kann
	{
		id: "vs-caro-kann",
		name: "vs Caro-Kann Setup",
		moves: generateMovesWithFEN(
			[
				"e4",
				"c6",
				"d3",
				"d5",
				"Nd2",
				"e5",
				"Ngf3",
				"Bd6",
				"g3",
				"Nf6",
				"Bg2",
				"O-O",
				"O-O",
			],
			[
				{
					description:
						"Establishes central control and opens lines for development, creating immediate pressure in the center.",
				},
				{
					description:
						"Caro-Kann Defense - prepares d5 advance while maintaining solid structure and flexible development options.",
				},
				{
					description:
						"Reinforces e4 and initiates King's Indian Attack formation, opting for closed center strategic buildup.",
				},
				{
					description:
						"Claims central space and challenges White's e4 pawn, establishing typical Caro-Kann pawn structure.",
				},
				{
					description:
						"Develops knight while keeping c-pawn mobile, preparing for eventual c2-c4 break and kingside expansion.",
				},
				{
					description:
						"Advances in center to gain space and block White's d4 break, transforming to closed position for maneuvering.",
				},
				{
					description:
						"Completes knight development, controls central squares and pressures Black's e5 pawn.",
				},
				{
					description:
						"Develops bishop to defend e5 and eye h2 square, creating kingside threats while completing development.",
				},
				{
					description:
						"Initiates kingside fianchetto, preparing to develop bishop to long diagonal for queenside pressure.",
				},
				{
					description:
						"Develops knight to control center and complete minor piece development in harmonious fashion.",
				},
				{
					description:
						"Completes fianchetto development, placing bishop on long diagonal to pressure Black's queenside.",
				},
				{
					description:
						"Secures king and connects rooks, bringing Black's position to safety for middlegame maneuvering.",
				},
				{
					description:
						"Safeguards king and completes development, achieving harmonious position ready for strategic battle in closed center.",
				},
			],
		),
	},

	// against black e5
	{
		id: "sharp",
		name: "Sharp Variation with e5",
		moves: generateMovesWithFEN(
			[
				"Nf3",
				"d5",
				"g3",
				"Nf6",
				"Bg2",
				"c5",
				"O-O",
				"Nc6",
				"d3",
				"e6",
				"e4",
				"dxe4",
				"dxe4",
				"e5",
				"Nc3",
				"Be7",
			],
			[
				{
					description:
						"King's Indian Attack begins with flexible knight development, controlling the center and preparing kingside fianchetto.",
				},
				{
					description:
						"Establishes central presence with d5 pawn, challenging White's flexible setup and controlling key squares.",
				},
				{
					description:
						"Initiates the kingside fianchetto, preparing to develop the bishop to g2 for long diagonal pressure.",
				},
				{
					description:
						"Develops knight to control the center and maintain flexibility, typical response against White's system.",
				},
				{
					description:
						"Completes the fianchetto development, placing bishop on long diagonal to exert pressure on center and queenside.",
				},
				{
					description:
						"Challenges White's setup by gaining queenside space and preparing to contest the center.",
				},
				{
					description:
						"Safeguards the king and connects the rooks early, completing basic kingside development.",
				},
				{
					description:
						"Develops knight to support central operations and control key squares, completing Black's knight development.",
				},
				{
					description:
						"Reinforces the center and prepares for e2-e4 break, typical pawn structure for King's Indian Attack.",
				},
				{
					description:
						"Solidifies the center and prepares dark-squared bishop development, maintaining flexible structure.",
				},
				{
					description:
						"The key central break, challenging Black's d5 pawn and opening lines for piece activity.",
				},
				{
					description:
						"Captures to relieve central tension, accepting symmetrical pawn structure but opening the d-file.",
				},
				{
					description:
						"Recaptures and maintains central pawn, achieving symmetrical structure with open d-file for rooks.",
				},
				{
					description:
						"Sharp response - advances e-pawn to gain central space and block White's potential d4 break.",
				},
				{
					description:
						"Develops knight to active square, controlling d5 and b5 while preparing to connect rooks.",
				},
				{
					description:
						"Completes development with solid bishop move, preparing kingside castling and maintaining central control.",
				},
			],
		),
	},

	// closed system
	{
		id: "closed",
		name: "Closed System",
		moves: generateMovesWithFEN(
			[
				"Nf3",
				"Nf6",
				"g3",
				"d5",
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
				"h3",
				"Bh5",
			],
			[
				{
					description:
						"King's Indian Attack begins with flexible knight development, controlling central squares and preparing kingside fianchetto.",
				},
				{
					description:
						"Develops knight to control center and maintain symmetry, preparing for classical d5 advance.",
				},
				{
					description:
						"Initiates kingside fianchetto setup, preparing to develop bishop to g2 for long diagonal pressure.",
				},
				{
					description:
						"Establishes central presence with d5 pawn, claiming space and preparing for solid pawn structure.",
				},
				{
					description:
						"Completes fianchetto development, placing bishop on long diagonal to exert pressure on center and queenside.",
				},
				{
					description:
						"Supports d5 pawn and prepares queenside expansion, creating solid defensive structure.",
				},
				{
					description:
						"Safeguards king and connects rooks early, completing basic kingside development in KIA system.",
				},
				{
					description:
						"Develops bishop to pin the f3 knight, challenging White's piece coordination and creating tension.",
				},
				{
					description:
						"Reinforces the center and prepares for e2-e4 break, typical pawn structure for strategic buildup.",
				},
				{
					description:
						"Develops knight to support central operations and prepare for eventual e5 or c5 advances.",
				},
				{
					description:
						"Completes knight development while maintaining flexibility, preparing to support central expansion.",
				},
				{
					description:
						"Advances in center to gain space and establish strong pawn chain, limiting White's options.",
				},
				{
					description:
						"Executes the central break, challenging Black's pawn structure and opening lines for piece activity.",
				},
				{
					description:
						"Completes development with solid bishop move, preparing kingside castling and maintaining central control.",
				},
				{
					description:
						"Challenges the bishop immediately, forcing it to decide between retreating or exchanging on f3.",
				},
				{
					description:
						"Bishop retreats to maintain the pin, avoiding exchange but committing to active piece placement.",
				},
			],
		),
	},
];
