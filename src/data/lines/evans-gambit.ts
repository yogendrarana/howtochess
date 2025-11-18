import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const evansGambitLines: Array<OpeningLine> = [
	{
		id: "evans-gambit-accepted-main",
		name: "Evans Gambit Accepted (Main Line)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"b4",
				"Bxb4",
				"c3",
				"Ba5",
				"d4",
				"exd4",
				"O-O",
			],
			[
				{
					description:
						"Stakes a claim in the center and opens lines for minor pieces, setting up an aggressive Italian formation.",
				},
				{
					description:
						"Mirrors the center and develops the knight to defend e5 while preparing ...Bc5.",
				},
				{
					description:
						"The knight develops to a natural square, attacks e5, and supports future Bc4 deployment.",
				},
				{
					description:
						"The knight defends e5 and prepares flexible central or queenside play.",
				},
				{
					description:
						"White's bishop develops actively, controls the f7 square, and becomes a key attacking piece.",
				},
				{
					description:
						"Develops the bishop to an active diagonal, eyes f2, and supports the e5 pawn.",
				},
				{
					description:
						"Evans Gambit! White plays b4, initiating the Evans Gambit, sacrificing a pawn to accelerate development and open the b-file.",
				},
				{
					description:
						"Black accepts the gambit, gaining material but allowing White to seize the initiative and open lines.",
				},
				{
					description:
						"Attacks the bishop and building a strong pawn center, forcing Black to retreat or exchange.",
				},
				{
					description:
						"Retreats the bishop to maintain its activity while preventing immediate tactical threats on c3.",
				},
				{
					description:
						"d4 strikes in the center, opening lines for pieces and putting immediate pressure on Black's position.",
				},
				{
					description:
						"Black captures on d4, keeping the material advantage but slightly weakening the center and exposing the king.",
				},
				{
					description:
						"White castles to activate the rook, secure the king, and prepare for central and queenside operations.",
				},
			],
		),
	},

	{
		id: "evans-gambit-stone-ware",
		name: "Evans Gambit (Stone-Ware Variation)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"b4",
				"Bxb4",
				"c3",
				"Bd6",
				"d4",
				"Nf6",
				"O-O",
				"O-O",
				"Qb3",
			],
			[
				{
					description:
						"Establishes central dominance and activates minor pieces, paving the way for aggressive Italian-style development and sustained pressure.",
				},
				{
					description:
						"Counters symmetrically in the center, freeing the queen and dark-square bishop while maintaining structural balance.",
				},
				{
					description:
						"Develops the knight to challenge e5, supports the bishop sortie, and builds early threats against the vulnerable f7-square.",
				},
				{
					description:
						"Reinforces e5 and prepares potential central expansions, ensuring solid and flexible piece coordination.",
				},
				{
					description:
						"Deploys the bishop to pin the knight and control the a2–g8 diagonal, setting up immediate tactical opportunities.",
				},
				{
					description:
						"Activates the bishop along the a7–g1 diagonal, developing with tempo and directly contesting White’s central plans.",
				},
				{
					description:
						"Ignites the Evans Gambit — a pawn sacrifice that blasts open the b-file and accelerates queenside mobilization.",
				},
				{
					description:
						"Accepts the gambit pawn, gaining material but allowing White to dictate the pace with superior development.",
				},
				{
					description:
						"Attacks the bishop and fortifies the pawn center, compelling Black to retreat or face further concessions.",
				},
				{
					description:
						"Stone Ware variation!. It retreats bishop to d6 and reinforces e5 but blocks the d-pawn, leading to a solid yet slightly passive setup.",
				},
				{
					description:
						"Strikes at the heart of Black's center, opening lines for the c1-bishop and queen, fully justifying the gambit pawn with intense pressure.",
				},
				{
					description:
						"Develops the knight to challenge e4 and prepares kingside castling, but allows White to maintain the central tension and initiative.",
				},
				{
					description:
						"Secures the king and connects the rooks, bringing the h1-rook into play for the impending central or kingside assault.",
				},
				{
					description:
						"Removes the king from the center to safety, but now the black king becomes a target for White's fully mobilized attacking pieces.",
				},
				{
					description:
						"The classic Evans Gambit queen sortie! Creates a powerful battery on the b3-f7 diagonal, simultaneously threatening f7 and eyeing the b7-pawn, while freeing the d1-square for a potential rook lift.",
				},
			],
		),
	},

	{
		id: "evans-gambit-anderssen",
		name: "Evans Gambit (Anderssen Variation)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"b4",
				"Bxb4",
				"c3",
				"Be7",
				"d4",
				"Na5",
				"Be2",
				"exd4",
				"Qxd4",
			],
			[
				{
					description:
						"Establishes central dominance and activates minor pieces, paving the way for aggressive Italian-style development and sustained pressure.",
				},
				{
					description:
						"Counters symmetrically in the center, freeing the queen and dark-square bishop while maintaining structural balance.",
				},
				{
					description:
						"Develops the knight to challenge e5, supports the bishop sortie, and builds early threats against the vulnerable f7-square.",
				},
				{
					description:
						"Reinforces e5 and prepares potential central expansions, ensuring solid and flexible piece coordination.",
				},
				{
					description:
						"Deploys the bishop to pin the knight and control the a2–g8 diagonal, setting up immediate tactical opportunities.",
				},
				{
					description:
						"Activates the bishop along the a7–g1 diagonal, developing with tempo and directly contesting White's central plans.",
				},
				{
					description:
						"Ignites the Evans Gambit — a pawn sacrifice that blasts open the b-file and accelerates queenside mobilization.",
				},
				{
					description:
						"Accepts the gambit pawn, gaining material but allowing White to dictate the pace with superior development.",
				},
				{
					description:
						"Attacks the bishop and fortifies the pawn center, compelling Black to retreat or face further concessions.",
				},
				{
					description:
						"Anderssen Variation! A conservative retreat that aims to neutralize White's initiative by giving back the pawn thematically and completing development.",
				},
				{
					description:
						"Storms the center with another pawn, opening lines for all pieces and creating massive pressure that justifies the gambit sacrifice.",
				},
				{
					description:
						"Attacks the white bishop to relieve pressure, but this loses time and allows White to maintain the initiative with precise play.",
				},
				{
					description:
						"A flexible retreat that keeps the bishop active on the f1-a6 diagonal while maintaining options for kingside castling and piece coordination.",
				},
				{
					description:
						"Releases the central tension and opens the position, but gives White a strong central pawn majority and active piece play.",
				},
				{
					description:
						"The queen recaptures with powerful effect, dominating the center and completing development with a strong attacking position that fully compensates for the pawn sacrifice.",
				},
			],
		),
	},

	{
		id: "evans-gambit-goring-attack",
		name: "Evans Gambit (Goring Attack)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"b4",
				"Bxb4",
				"c3",
				"Ba5",
				"d4",
				"exd4",
				"O-O",
				"dxc3",
				"Qb3",
				"Qf6",
				"e5",
			],
			[
				{
					description:
						"Establishes central dominance and activates minor pieces, paving the way for aggressive Italian-style development and sustained pressure.",
				},
				{
					description:
						"Counters symmetrically in the center, freeing the queen and dark-square bishop while maintaining structural balance.",
				},
				{
					description:
						"Develops the knight to challenge e5, supports the bishop sortie, and builds early threats against the vulnerable f7-square.",
				},
				{
					description:
						"Reinforces e5 and prepares potential central expansions, ensuring solid and flexible piece coordination.",
				},
				{
					description:
						"Deploys the bishop to pin the knight and control the a2–g8 diagonal, setting up immediate tactical opportunities.",
				},
				{
					description:
						"Activates the bishop along the a7–g1 diagonal, developing with tempo and directly contesting White's central plans.",
				},
				{
					description:
						"Ignites the Evans Gambit — a pawn sacrifice that blasts open the b-file and accelerates queenside mobilization.",
				},
				{
					description:
						"Accepts the gambit pawn, gaining material but allowing White to dictate the pace with superior development.",
				},
				{
					description:
						"Attacks the bishop and fortifies the pawn center, compelling Black to retreat or face further concessions.",
				},
				{
					description:
						"Retreats to a5 to maintain pressure on the c3-pawn and keep the bishop active on the a5-e1 diagonal.",
				},
				{
					description:
						"Storms the center with another pawn sacrifice, opening lines for all pieces and creating massive pressure.",
				},
				{
					description:
						"Captures the central pawn but opens more lines for White's attacking pieces, accepting the gambit challenge.",
				},
				{
					description:
						"Secures the king and brings the rook into play, sacrificing material for rapid development and attacking chances.",
				},
				{
					description:
						"Greedily captures another pawn but falls into White's tactical trap, allowing a devastating attack to unfold.",
				},
				{
					description:
						"The classic Evans Gambit queen sortie! Creates a powerful battery on the b3-f7 diagonal, threatening immediate mate on f7.",
				},
				{
					description:
						"Defends the f7-square and pins the c3-pawn, but walks into White's prepared tactical explosion in the center.",
				},
				{
					description:
						"Goring Attack! A brilliant pawn sacrifice that drives the black queen from its defense and opens the e-file for a crushing attack. White's initiative becomes overwhelming.",
				},
			],
		),
	},

	{
		id: "evans-gambit-declined-classical",
		name: "Evans Gambit Declined (Classical Main Line)",
		moves: generateMovesWithFEN(
			[
				"e4",
				"e5",
				"Nf3",
				"Nc6",
				"Bc4",
				"Bc5",
				"b4",
				"Bb6",
				"a4",
				"a5",
				"b5",
				"Nd4",
				"Nxd4",
				"Bxd4",
				"c3",
				"Bb6",
			],
			[
				{
					description:
						"Establishes central dominance and activates minor pieces, paving the way for aggressive Italian-style development and sustained pressure.",
				},
				{
					description:
						"Counters symmetrically in the center, freeing the queen and dark-square bishop while maintaining structural balance.",
				},
				{
					description:
						"Develops the knight to challenge e5, supports the bishop sortie, and builds early threats against the vulnerable f7-square.",
				},
				{
					description:
						"Reinforces e5 and prepares potential central expansions, ensuring solid and flexible piece coordination.",
				},
				{
					description:
						"Deploys the bishop to pin the knight and control the a2–g8 diagonal, setting up immediate tactical opportunities.",
				},
				{
					description:
						"Activates the bishop along the a7–g1 diagonal, developing with tempo and directly contesting White's central plans.",
				},
				{
					description:
						"Offers the Evans Gambit pawn, aiming to disrupt Black's bishop and gain space on the queenside.",
				},
				{
					description:
						"Declines the gambit! The main declined variation - Black retreats the bishop to b6, avoiding complications and maintaining a solid position.",
				},
				{
					description:
						"Advances the a-pawn to gain space and challenge Black's bishop, continuing the queenside initiative.",
				},
				{
					description:
						"Counters White's expansion by fixing the pawn structure and preventing further advance of the a-pawn.",
				},
				{
					description:
						"Pushes the knight back while gaining substantial space on the queenside, a key strategic achievement of the Evans Gambit.",
				},
				{
					description:
						"A strong centralizing response! The knight occupies the powerful d4 outpost, challenging White's control of the center.",
				},
				{
					description:
						"Simplifies the position by capturing the centralized knight, but gives Black the bishop pair in return.",
				},
				{
					description:
						"Recaptures with the bishop, maintaining control of the central dark squares and preserving the bishop pair.",
				},
				{
					description:
						"Gains space and attacks the bishop, forcing it to retreat and completing White's development scheme.",
				},
				{
					description:
						"The bishop retreats to safety, leaving White with a spatial advantage but Black with the valuable bishop pair in an open position.",
				},
			],
		),
	},
];
