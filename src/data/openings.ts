import type { ChessOpening } from "@/types/chess";
import { caroKannLines } from "./lines/caro-kann";

// opening map
export const chessOpeningMap: Record<string, ChessOpening> = {
	// --- White Openings ---
	"french-defense": {
		id: "french-defense",
		name: "French Defense",
		eco: "C00–C19",
		color: "white",
		description:
			"The French Defense arises after 1.e4 e6, leading to solid but somewhat passive positions. It’s known for counterattacking in the center with ...d5.",
		lines: [],
	},

	"italian-game": {
		id: "italian-game",
		name: "Italian Game",
		eco: "C50–C59",
		color: "white",
		description:
			"The Italian Game begins with 1.e4 e5 2.Nf3 Nc6 3.Bc4, aiming for quick development and control of the center, often leading to open, tactical play.",
		lines: [],
	},

	"london-system": {
		id: "london-system",
		name: "London System",
		eco: "D00",
		color: "white",
		description:
			"A solid and flexible setup for White involving d4, Nf3, and Bf4, the London System emphasizes structure and piece coordination over sharp theory.",
		lines: [],
	},

	"nimzo-indian-defense": {
		id: "nimzo-indian-defense",
		name: "Nimzo-Indian Defense",
		eco: "E20–E59",
		color: "white",
		description:
			"Though a Black defense, it’s often studied from the White perspective. The Nimzo-Indian arises after 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4, focusing on control of e4 and pawn structure.",
		lines: [],
	},

	"queens-gambit": {
		id: "queens-gambit",
		name: "Queen’s Gambit",
		eco: "D06–D69",
		color: "white",
		description:
			"One of the oldest and most respected openings. White offers a wing pawn to gain central control with 1.d4 d5 2.c4.",
		lines: [],
	},

	"ruy-lopez": {
		id: "ruy-lopez",
		name: "Ruy Lopez",
		eco: "C60–C99",
		color: "white",
		description:
			"Also known as the Spanish Opening, the Ruy Lopez starts with 1.e4 e5 2.Nf3 Nc6 3.Bb5 and aims to exert long-term positional pressure.",
		lines: [],
	},

	// --- Black Openings ---
	"caro-kann-defense": {
		id: "caro-kann-defense",
		name: "Caro-Kann Defense",
		eco: "B12",
		color: "black",
		description:
			"A solid and classical response to 1.e4, emphasizing pawn structure and flexibility. It aims for a strong center and long-term stability rather than immediate counterattack.",
		lines: caroKannLines,
	},

	"kings-indian-defense": {
		id: "kings-indian-defense",
		name: "King’s Indian Defense",
		eco: "E60–E99",
		color: "black",
		description:
			"A dynamic opening for Black after 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7. It allows White the center early but prepares a counterattack with ...e5 or ...c5.",
		lines: [],
	},

	"sicilian-defense": {
		id: "sicilian-defense",
		name: "Sicilian Defense",
		eco: "B20–B99",
		color: "black",
		description:
			"The Sicilian begins with 1.e4 c5 and is one of the most aggressive defenses. It creates imbalanced pawn structures and sharp counterplay.",
		lines: [],
	},
};
