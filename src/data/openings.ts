import type { ChessOpening } from "@/types/chess";
import { ruyLopezLines } from "./lines/ruy-lopez";
import { scotchGameLines } from "./lines/scotch-game";
import { evansGambitLines } from "./lines/evans-gambit";
import { italianGameLines } from "./lines/italian-game";
import { kingsGambitLines } from "./lines/kings-gambit";
import { retiOpeningLines } from "./lines/reti-opening";
import { londonSystemLines } from "./lines/london-system";
import { queensGambitLines } from "./lines/queens-gambit";
import { catalanOpeningLines } from "./lines/catalan-opening";
import { caroKannDefenseLines } from "./lines/caro-kann-defense";
import { kingsIndianAttackLines } from "./lines/kings-indian-attack";

/**
 * @todo
 * Black: petrov defense, scandinavian defense, pirc defense, benoni defense, grunfield defense, nimzowitsch defense
 * philidor gefense
 * White: english opening, vienna game, four knight game, bird's opening, colle system
 */

// opening map
export const chessOpeningMap: Record<string, ChessOpening> = {
	// --- White Openings ---
	"catalan-opening": {
		id: "catalan-opening",
		name: "Catalan Opening",
		eco: "E00",
		color: "white",
		description:
			"A sophisticated opening starting with 1.d4. White combines Queen's Gambit ideas with a kingside fianchetto, creating long-term pressure on the center and Black's queenside.",
		lines: catalanOpeningLines,
	},
	"evans-gambit": {
		id: "evans-gambit",
		name: "Evans Gambit",
		eco: "C51",
		color: "white",
		description:
			"A sharp and aggressive gambit in the Italian Game. White sacrifices a pawn for rapid development, central control, and attacking chances against Black's king. Famous for its romantic attacking style.",
		lines: evansGambitLines,
	},
	"kings-indian-attack": {
		id: "kings-indian-attack",
		name: "King's Indian Attack",
		eco: "A07",
		color: "white",
		description:
			"A flexible system for White that can be played against various Black setups. Features kingside fianchetto, solid pawn structure, and gradual kingside expansion. Popular for its reliability and positional nature.",
		lines: kingsIndianAttackLines,
	},
	"italian-game": {
		id: "italian-game",
		name: "Italian Game (Giuoco Piano)",
		eco: "C50",
		color: "white",
		description:
			"The Italian Game begins with 1.e4 e5 2.Nf3 Nc6 3.Bc4, aiming for quick development and control of the center, often leading to open, tactical play.",
		lines: italianGameLines,
	},
	"scotch-game": {
		id: "scotch-game",
		name: "Scotch Game",
		eco: "C44",
		color: "white",
		description:
			"A direct and aggressive opening against 1...e5. White immediately challenges the center with 3.d4, opening lines for rapid development and active piece play. Known for leading to open, tactical positions.",
		lines: scotchGameLines,
	},
	"kings-gambit": {
		id: "kings-gambit",
		name: "King's Gambit",
		eco: "C33",
		color: "white",
		description:
			"One of the most aggressive and romantic openings in chess. White sacrifices a kingside pawn to open lines for a rapid attack against Black's king. Known for leading to wild, tactical battles and spectacular attacks.",
		lines: kingsGambitLines,
	},
	"reti-opening": {
		id: "reti-opening",
		name: "Reti Opening",
		eco: "A04",
		color: "white",
		description:
			"A hypermodern opening starting with 1.Nf3. White controls the center from a distance with pieces and flank pawns, often transposing into English, King's Indian Attack, or other systems. Known for flexibility and strategic complexity.",
		lines: retiOpeningLines,
	},
	"london-system": {
		id: "london-system",
		name: "London System",
		eco: "A45",
		color: "white",
		description:
			"A solid and flexible setup for White involving d4, Nf3, and Bf4, the London System emphasizes structure and piece coordination over sharp theory.",
		lines: londonSystemLines,
	},
	"queens-gambit": {
		id: "queens-gambit",
		name: "Queen's Gambit",
		eco: "D06",
		color: "white",
		description:
			"A classical opening starting with 1.d4. White offers a pawn to gain central control and rapid development. Leads to rich strategic positions with both sides having clear plans.",
		lines: queensGambitLines,
	},
	"ruy-lopez": {
		id: "ruy-lopez",
		name: "Ruy Lopez (Spanish Opening)",
		eco: "C60",
		color: "white",
		description:
			"A classical opening against 1...e5. White develops pieces actively while putting immediate pressure on Black's center. Known for deep strategic complexity and enduring popularity.",
		lines: ruyLopezLines,
	},

	// --- Black Openings ---
	"caro-kann-defense": {
		id: "caro-kann-defense",
		name: "Caro-Kann Defense",
		eco: "B12",
		color: "black",
		description:
			"A solid and classical response to 1.e4, emphasizing pawn structure and flexibility. It aims for a strong center and long-term stability rather than immediate counterattack.",
		lines: caroKannDefenseLines,
	},
	"french-defense": {
		id: "french-defense",
		name: "French Defense",
		eco: "C00",
		color: "black",
		description:
			"A solid defense to 1.e4 focusing on pawn structure and counterplay. Black accepts space disadvantage for long-term structural advantages and center control.",
		lines: [],
	},
	"kings-indian-defense": {
		id: "kings-indian-defense",
		name: "King's Indian Defense",
		eco: "E60",
		color: "black",
		description:
			"A hypermodern defense against 1.d4. Black allows White a large center then counterattacks with piece play and pawn breaks. Known for dynamic, complex positions.",
		lines: [],
	},
	"nimzo-indian-defense": {
		id: "nimzo-indian-defense",
		name: "Nimzo-Indian Defense",
		eco: "E20",
		color: "black",
		description:
			"A sophisticated defense to 1.d4. Black pins the knight on c3 to control the center indirectly. Leads to rich strategic battles with imbalances for both sides.",
		lines: [],
	},
	"sicilian-defense": {
		id: "sicilian-defense",
		name: "Sicilian Defense",
		eco: "B20",
		color: "black",
		description:
			"The most aggressive response to 1.e4. Black creates immediate asymmetry and fights for the center while aiming for counterplay on the queenside.",
		lines: [],
	},
};
