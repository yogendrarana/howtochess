import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const sicilianDefenseLines: Array<OpeningLine> = [
	{
		id: "sicilian-open",
		name: "Open Sicilian",
		moves: generateMovesWithFEN(
			["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6"],
			[
				{
					description:
						"Opens the center and activates the king's bishop, establishing classical control of the game.",
				},
				{
					description:
						"Sicilian Defense - asymmetrical response that immediately challenges the center from the flank.",
				},
				{
					description:
						"Develops knight to control key central squares and prepare for the Open Sicilian with d2-d4.",
				},
				{
					description:
						"Supports the c5 pawn and prepares flexible development, typical of many Sicilian systems.",
				},
				{
					description:
						"Open Sicilian - strikes in the center to open lines and challenge Black's pawn structure.",
				},
				{
					description:
						"Captures the pawn and relieves central tension, accepting an open position with asymmetrical pawn structure.",
				},
				{
					description:
						"Recaptures with the knight, centralizing the piece and maintaining control over key squares.",
				},
				{
					description:
						"Develops knight to attack the e4 pawn and challenge the center, completing kingside development.",
				},
				{
					description:
						"Develops knight to support the center and prepare for castling, increasing piece activity.",
				},
				{
					description:
						"Prevents the knight from jumping to b5 and prepares queenside expansion with b7-b5, a key idea in many Sicilian systems.",
				},
			],
		),
	},
	{
		id: "sicilian-dragon",
		name: "Dragon Variation",
		moves: generateMovesWithFEN(
			[
				"e4",
				"c5",
				"Nf3",
				"d6",
				"d4",
				"cxd4",
				"Nxd4",
				"Nf6",
				"Nc3",
				"g6",
				"Be3",
				"Bg7",
				"f3",
			],
			[
				{
					description:
						"Initiates the game with the king's pawn, establishing immediate central presence and opening lines for development.",
				},
				{
					description:
						"Sicilian Defense - begins with an asymmetrical pawn structure that creates immediate imbalance and queenside counterplay.",
				},
				{
					description:
						"Develops the knight to control key central squares and prepare for the upcoming central confrontation.",
				},
				{
					description:
						"Solidifies the pawn structure and prepares for flexible development, characteristic of the Classical Sicilian setup.",
				},
				{
					description:
						"Executes the central break that defines the Open Sicilian, challenging Black's pawn structure and opening the position.",
				},
				{
					description:
						"Captures to relieve central pressure and transition into the characteristic Open Sicilian pawn structure.",
				},
				{
					description:
						"Recaptures with the knight, establishing a powerful central outpost and eyeing key squares for future operations.",
				},
				{
					description:
						"Develops the knight to pressure the e4 pawn and complete the basic kingside development scheme.",
				},
				{
					description:
						"Completes knight development while reinforcing control over the center and preparing for castling.",
				},
				{
					description:
						"Dragon Variation - initiates the fianchetto setup that gives this variation its name, preparing to develop the bishop to g7.",
				},
				{
					description:
						"Develops the bishop to control the important d4 square and prepare for the Yugoslav Attack with Qd2 and Bh6.",
				},
				{
					description:
						"Completes the Dragon setup with the bishop on the long diagonal, creating powerful pressure along the a1-h8 diagonal.",
				},
				{
					description:
						"Yugoslav Attack - strengthens the center and prevents ...Ng4 ideas while preparing for aggressive kingside expansion.",
				},
			],
		),
	},

	{
		id: "sicilian-closed",
		name: "Closed Sicilian",
		moves: generateMovesWithFEN(
			["e4", "c5", "Nc3", "Nc6", "g3", "g6", "Bg2", "Bg7", "d3", "d6"],
			[
				{
					description:
						"Initiates the game with the king's pawn, establishing central presence while keeping options flexible for various systems.",
				},
				{
					description:
						"Sicilian Defense - responds with the characteristic flank pawn move that creates immediate asymmetry and queenside ambitions.",
				},
				{
					description:
						"Closed Sicilian - develops the knight while postponing d2-d4, opting for a more strategic and less confrontational approach.",
				},
				{
					description:
						"Develops the knight to control central squares and prepare for potential e5 or d4 advances, maintaining flexibility.",
				},
				{
					description:
						"Prepares the kingside fianchetto, a hallmark of the Closed System that aims for long-term positional pressure rather than immediate confrontation.",
				},
				{
					description:
						"Mirrors White's setup with a kingside fianchetto, creating symmetrical development while maintaining the Sicilian's inherent imbalance.",
				},
				{
					description:
						"Completes the fianchetto development, placing the bishop on the long diagonal where it will exert pressure throughout the game.",
				},
				{
					description:
						"Completes the fianchetto setup, activating the bishop on the powerful a1-h8 diagonal that characterizes many Sicilian systems.",
				},
				{
					description:
						"Reinforces the center without opening the position, maintaining the closed nature of the game and preparing for gradual expansion.",
				},
				{
					description:
						"Solidifies the pawn structure and supports the e5 square, completing the basic setup for the Closed Sicilian middlegame.",
				},
			],
		),
	},

	{
		id: "sicilian-alapin",
		name: "Alapin Variation (c3)",
		moves: generateMovesWithFEN(
			["e4", "c5", "c3", "d5", "exd5", "Qxd5", "d4", "Nf6"],
			[
				{
					description:
						"Initiates the game with the king's pawn, establishing central presence and opening lines for development.",
				},
				{
					description:
						"Sicilian Defense - responds with the characteristic flank pawn that creates immediate imbalance and queenside ambitions.",
				},
				{
					description:
						"Alapin Variation - prepares to support d2-d4 with a pawn, avoiding the complex main lines of the Open Sicilian.",
				},
				{
					description:
						"Immediately challenges White's center, testing the Alapin setup and fighting for central control.",
				},
				{
					description:
						"Captures the pawn to open the center and force Black's queen to declare its position early.",
				},
				{
					description:
						"Recaptures with the queen, centralizing the piece but potentially exposing it to future attacks.",
				},
				{
					description:
						"Establishes a strong pawn center and gains space, creating the foundation for White's positional advantage.",
				},
				{
					description:
						"Develops the knight to control the center and complete kingside development, preparing for castling.",
				},
			],
		),
	},

	{
		id: "sicilian-scheveningen",
		name: "Scheveningen Variation",
		moves: generateMovesWithFEN(
			[
				"e4",
				"c5",
				"Nf3",
				"d6",
				"d4",
				"cxd4",
				"Nxd4",
				"Nf6",
				"Nc3",
				"e6",
				"Be2",
				"Be7",
				"O-O",
				"O-O",
			],
			[
				{
					description:
						"Commences with the king's pawn, seizing central territory and initiating an aggressive opening approach.",
				},
				{
					description:
						"Sicilian Defense - counters with the c5 thrust, immediately creating structural asymmetry and queenside ambitions.",
				},
				{
					description:
						"Deploys the knight to command central outposts and prepare for the impending central confrontation.",
				},
				{
					description:
						"Reinforces the c5 pawn and establishes a flexible defensive structure, typical of Classical Sicilian systems.",
				},
				{
					description:
						"Unleashes the central pawn break that characterizes the Open Sicilian, forcing immediate structural decisions.",
				},
				{
					description:
						"Accepts the central exchange, transitioning to the characteristic Open Sicilian pawn formation.",
				},
				{
					description:
						"Recaptures with the knight, securing a dominant central presence and controlling key tactical squares.",
				},
				{
					description:
						"Develops the knight to contest the e4 square and complete the initial kingside development.",
				},
				{
					description:
						"Completes the knight development while reinforcing central control and preparing for castling.",
				},
				{
					description:
						"Scheveningen structure - establishes the solid e6 pawn chain that defines this variation, creating a resilient defensive setup.",
				},
				{
					description:
						"Develops the bishop modestly, preparing kingside castling while maintaining flexibility for future operations.",
				},
				{
					description:
						"Completes the development of minor pieces with this solid bishop move, reinforcing the kingside defense.",
				},
				{
					description:
						"Secures the king's safety and connects the rooks, completing the basic development phase.",
				},
				{
					description:
						"Brings the king to safety and completes the initial development, setting the stage for the middlegame battle.",
				},
			],
		),
	},
	{
		id: "sicilian-accelerated-dragon",
		name: "Accelerated Dragon",
		moves: generateMovesWithFEN(
			[
				"e4",
				"c5",
				"Nf3",
				"Nc6",
				"d4",
				"cxd4",
				"Nxd4",
				"g6",
				"Nc3",
				"Bg7",
				"Be3",
				"Nf6",
			],
			[
				{
					description:
						"Begins with the classic king's pawn, staking claim to the center and preparing for dynamic piece play.",
				},
				{
					description:
						"Sicilian Defense - responds with the ambitious c5, immediately creating an asymmetrical struggle for control.",
				},
				{
					description:
						"Brings the knight into play, eyeing key central squares and setting the stage for the upcoming battle.",
				},
				{
					description:
						"Accelerated Dragon - develops the knight early to facilitate rapid fianchetto without committing the d-pawn.",
				},
				{
					description:
						"Stakes further claim to the center with this aggressive pawn break, forcing Black to define their structure.",
				},
				{
					description:
						"Captures to open the position and transition into the characteristic Sicilian pawn formation.",
				},
				{
					description:
						"Recaptures with the knight, establishing a powerful central outpost and controlling critical diagonals.",
				},
				{
					description:
						"Accelerated Dragon signature - immediately prepares the fianchetto, bypassing the traditional d6 move.",
				},
				{
					description:
						"Completes the knight trio development while reinforcing control over the central dark squares.",
				},
				{
					description:
						"Completes the Dragon bishop development, activating the powerful piece on the long diagonal.",
				},
				{
					description:
						"Develops the bishop to control key central squares and prepare for potential kingside operations.",
				},
				{
					description:
						"Finally develops the knight to challenge the center and complete the basic Accelerated Dragon setup.",
				},
			],
		),
	},
];
