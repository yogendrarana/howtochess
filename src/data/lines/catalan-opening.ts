import type { OpeningLine } from "@/types/chess";
import { generateMovesWithFEN } from "@/utils/generate-moves-with-fen";

export const catalanOpeningLines: Array<OpeningLine> = [
	{
		id: "open",
		name: "Open Catalan",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"g3",
				"d5",
				"Bg2",
				"dxc4",
				"Nf3",
				"Be7",
				"O-O",
				"O-O",
				"Qc2",
				"a6",
				"Qxc4",
				"b5",
				"Qc2",
				"Bb7",
				"Rd1",
			],
			[
				{
					description:
						"Establishes firm control over the central dark squares and opens development lines for both the queen and dark-squared bishop.",
				},
				{
					description:
						"Develops the knight to its most active square, immediately contesting control over the e4 square and preparing potential central breaks.",
				},
				{
					description:
						"The Queen's Gambit - expands control over the center and gains space on the queenside while challenging Black's central options.",
				},
				{
					description:
						"Solid response that prepares the d5 advance while developing the dark-squared bishop. Maintains flexibility for both Bb4 and Be7 setups.",
				},
				{
					description:
						"Catalan System - opts for fianchetto development, aiming for long-term positional pressure rather than immediate confrontation.",
				},
				{
					description:
						"Challenges White's setup by attacking the c4 pawn directly.",
				},
				{
					description:
						"Completes the fianchetto development, activating the bishop along the important a8-h1 diagonal.",
				},
				{
					description:
						"Open Catalan - accepts the gambit pawn to gain material advantage but cedes center control and the powerful g2-a8 diagonal.",
				},
				{
					description:
						"Finishes kingside development and frees the queen to recapture on c4 with tempo.",
				},
				{
					description:
						"Safest bishop development, covering g5 and preparing kingside castling.",
				},
				{
					description:
						"Safeguards the king and connects the rooks, completing the basic kingside development scheme.",
				},
				{
					description:
						"Mirrors White's development; both sides ready for middlegame battle.",
				},
				{
					description:
						"Dual-purpose move: overprotects e4 and prepares pawn recapture with tempo.",
				},
				{
					description:
						"Prevents White's knight from jumping to b5 and prepares queenside expansion with b5.",
				},
				{
					description:
						"Recovers the pawn and establishes central dominance with the Catalan bishop fully active.",
				},
				{
					description:
						"Gains queenside space and challenges White's centralized queen but weakens the c5-square for potential knight outpost.",
				},
				{
					description:
						"Queen retreats to a safe square while maintaining pressure along the c-file. This is the main theoretical response",
				},
				{
					description:
						"Completes development of the queenside pieces. The bishop now exerts pressure along the long diagonal toward White's kingside",
				},
				{
					description:
						"Centralizes the rook and increases pressure on the d-file. This is a key thematic move in the Catalan",
				},
			],
		),
	},

	{
		id: "closed",
		name: "Closed Catalan",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"g3",
				"d5",
				"Bg2",
				"Be7",
				"Nf3",
				"O-O",
				"O-O",
				"Nbd7",
				"Qc2",
				"c6",
				"Rd1",
				"b6",
				"Nc3",
			],
			[
				{
					description:
						"Establishes central control with flexibility. Prepares kingside fianchetto and keeps e4 as a future option.",
				},
				{
					description:
						"Controls e4 and maintains flexibility. Avoids early commitments while developing a piece.",
				},
				{
					description:
						"Challenges the center and expands on the queenside. Sets up tension that defines the Catalan struggle.",
				},
				{
					description:
						"Reinforces ...d5 and opens lines for the queen and dark-square bishop. Enables solid pawn structures.",
				},
				{
					description:
						"The signature Catalan move. The bishop will dominate the long diagonal and support central control.",
				},
				{
					description:
						"Occupies the center and challenges c4. Forces White to decide whether to allow an exchange or maintain tension.",
				},
				{
					description:
						"Completes the fianchetto. The bishop now exerts long-term influence over the center and queenside.",
				},
				{
					description:
						"Solid and natural development. Prepares castling and keeps the bishop active on the long diagonal.",
				},
				{
					description:
						"Develops the knight to its best square. Controls e5 and supports future central play.",
				},
				{
					description:
						"Ensures king safety and connects the rooks. Black is now fully developed on the kingside.",
				},
				{
					description:
						"Secures the king and activates the rook. White’s kingside is harmoniously developed.",
				},
				{
					description:
						"Develops the knight to a flexible square. Supports ...c6 and prepares ...c5 or ...b6 systems.",
				},
				{
					description:
						"Reinforces the center and prepares b3 or a4. Keeps pieces coordinated and flexible.",
				},
				{
					description:
						"Solidifies the d5-pawn and maintains a closed center. Prevents White from opening lines easily.",
				},
				{
					description:
						"Centralizes the rook and increases pressure on the d-file. Prepares for potential d5 breaks.",
				},
				{
					description:
						"Prepares a queenside fianchetto. The bishop will control the long diagonal and support ...c5.",
				},
				{
					description:
						"Supports the c1-bishop and prepares to develop it to b2 or a3. Maintains flexibility and solidity.",
				},
				{
					description:
						"Develops the queen-knight to its best square, completing the minor-piece setup and clearing the path for the thematic e4 break.",
				},
			],
		),
	},

	{
		id: "nimzo-catalan",
		name: "Nimzo-Catalan Hybrid",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"g3",
				"Bb4+",
				"Bd2",
				"Be7",
				"Bg2",
				"c6",
				"Nf3",
				"d5",
				"O-O",
				"O-O",
				"Qc2",
				"Nbd7",
				"Nc3",
			],
			[
				{
					description:
						"Claims central space with full flexibility. Prepares kingside fianchetto and keeps e4 as a powerful option.",
				},
				{
					description:
						"Controls e4 and develops the knight. Prepares ...Bb4+ to challenge our development.",
				},
				{
					description:
						"Expands on the queenside and challenges the center. Invites Black into a hybrid Catalan/QGD position.",
				},
				{
					description:
						"Supports ...d5 and opens lines for queen and bishop. Standard solid setup.",
				},
				{
					description:
						"The Catalan signature. Our bishop will dominate the long diagonal from g2 for the entire game.",
				},
				{
					description:
						"Nimzo-style check. Tries to disrupt our flow and force a concession.",
				},
				{
					description:
						"Blocks the check cleanly and safely. Black gains nothing — the bishop must retreat.",
				},
				{
					description:
						"Logical and necessary retreat. Black preserves the bishop and prepares to castle.",
				},
				{
					description:
						"Completes the fianchetto. Our bishop now fully controls the h1–a8 diagonal and eyes d5 and b7.",
				},
				{
					description:
						"Reinforces ...d5 and builds a compact center. Temporarily slows our e4 push.",
				},
				{
					description:
						"Natural, strong, and harmonious. Controls e5 and supports both center and queenside play.",
				},
				{
					description:
						"Occupies the center and challenges c4. Solid but slightly passive structure.",
				},
				{
					description:
						"Secures the king and connects rooks. Our kingside is perfectly safe and coordinated.",
				},
				{
					description:
						"Ensures king safety and activates the rook. Black is now fully developed.",
				},
				{
					description:
						"Supports the center and prepares b3. Keeps our queen active, centralized, and ready for action.",
				},
				{
					description:
						"Flexible knight development. Supports ...c5 ideas and prepares to challenge our center.",
				},
				{
					description:
						"Completes minor piece development and prepares e4. Controls key central squares with full coordination.",
				},
			],
		),
	},

	{
		id: "modern",
		name: "Modern Catalan",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"g3",
				"c5",
				"Bg2",
				"cxd4",
				"Nf3",
				"Nc6",
				"O-O",
				"d5",
				"cxd5",
				"exd5",
				"Nd4",
				"Bc5",
				"Nxc6",
				"bxc6",
				"Qc2",
			],
			[
				{
					description:
						"Claims central space with full flexibility. Prepares kingside fianchetto while keeping e4 in reserve.",
				},
				{
					description:
						"Controls e4 and develops the knight. Prepares ...c5 to challenge our center early.",
				},
				{
					description:
						"Expands on the queenside and supports d4. Invites Black into sharp, modern lines.",
				},
				{
					description:
						"Supports ...d5 and opens paths for queen and bishop. Flexible and solid foundation.",
				},
				{
					description:
						"The Catalan hallmark. Our bishop will dominate the long diagonal from g2.",
				},
				{
					description:
						"Aggressive and modern. Challenges d4 immediately and fights for central equality.",
				},
				{
					description:
						"Completes the fianchetto. Our bishop now targets d5 and b7 with full power.",
				},
				{
					description:
						"Captures the pawn and opens the c-file. Forces us to respond actively.",
				},
				{
					description:
						"Natural and best. Recaptures with tempo on c5 and supports e5. Controls key central squares.",
				},
				{
					description:
						"Develops the knight to its most active square. Supports ...d5 and prepares ...Be7 or ...Bb4.",
				},
				{
					description:
						"Secures the king and connects rooks. Our kingside is fully safe and mobilized.",
				},
				{
					description:
						"Occupies the center and challenges our structure. Black now has a pawn majority in the center.",
				},
				{
					description:
						"Captures with tempo and opens the c-file. Isolates Black’s d5-pawn as a long-term target.",
				},
				{
					description:
						"Recaptures and maintains central presence. Black’s d5-pawn is now isolated and under fire.",
				},
				{
					description:
						"Centralizes the knight with tempo. Attacks the Nc6 and supports e5 ideas.",
				},
				{
					description:
						"Develops the bishop with tempo, attacking the centralized knight. Aims to challenge White's control.",
				},
				{
					description:
						"Forces the exchange to damage Black's pawn structure. Creates doubled c-pawns that become long-term targets.",
				},
				{
					description:
						"Recaptures and accepts doubled pawns. The structure becomes compromised but gains the bishop pair.",
				},
				{
					description:
						"Develops the queen to an active square. Eyes the weakened c6 pawn and supports central operations.",
				},
			],
		),
	},

	{
		id: "semi-slav",
		name: "vs Semi-Slav",
		moves: generateMovesWithFEN(
			[
				"d4",
				"Nf6",
				"c4",
				"e6",
				"g3",
				"d5",
				"Bg2",
				"c6",
				"Nf3",
				"Be7",
				"O-O",
				"Nbd7",
				"Qc2",
				"O-O",
				"Rd1",
				"b6",
				"b3",
			],
			[
				{
					description:
						"Claims central space with full flexibility. Prepares kingside fianchetto while keeping e4 in reserve.",
				},
				{
					description:
						"Controls e4 and develops the knight. Prevents immediate e4 and prepares ...d5.",
				},
				{
					description:
						"Expands on the queenside and challenges the center. Invites Black into a closed, strategic battle.",
				},
				{
					description:
						"Supports ...d5 and opens lines for queen and dark-square bishop. Solid and flexible.",
				},
				{
					description:
						"The Catalan signature. Our bishop will dominate the long diagonal from g2.",
				},
				{
					description:
						"Occupies the center and challenges c4. Forces us to decide whether to exchange or maintain tension.",
				},
				{
					description:
						"Completes the fianchetto. Our bishop now fully controls the h1–a8 diagonal and eyes d5.",
				},
				{
					description:
						"The Semi-Slav signature. Reinforces d5 and builds a rock-solid pawn triangle.",
				},
				{
					description:
						"Natural and harmonious. Controls e5 and supports central and queenside play.",
				},
				{
					description:
						"Solid and flexible development. Prepares castling and keeps the bishop active.",
				},
				{
					description:
						"Secures the king and connects rooks. Our kingside is fully coordinated and safe.",
				},
				{
					description:
						"Develops the knight to its best square. Supports ...c5 ideas and reinforces d5.",
				},
				{
					description:
						"Reinforces the center and prepares b3. Keeps our queen active and supports future queenside play.",
				},
				{
					description:
						"Ensures king safety and activates the rook. Black is now fully developed.",
				},
				{
					description:
						"Centralizes the rook and increases pressure on d5. Prepares for potential central breaks.",
				},
				{
					description:
						"Prepares queenside fianchetto. The bishop will contest our g2-bishop and support ...c5.",
				},
				{
					description:
						"Finishes development and prepares Bb2, completing the harmonious Catalan setup.",
				},
			],
		),
	},
];
