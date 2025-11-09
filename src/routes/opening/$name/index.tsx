import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { chessOpeningMap } from "@/data/openings";
import { useChessStore } from "@/store/chess-store";
import GameInfo from "@/components/chess/game-info";
import { ChessBoard } from "@/components/chess/chess-board";
import { PlayerInfo } from "@/components/chess/player-info";
import MaxWidthContainer from "@/components/max-width-container";
import {
	BlackCaptured,
	WhiteCaptured,
} from "@/components/chess/captured-pieces";

export const Route = createFileRoute("/opening/$name/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();
	const opening = chessOpeningMap[name];
	const { setGuidedMoves, setGuidedMode, resetGame } = useChessStore();

	useEffect(() => {
		if (!opening) return;

		// pick the first variation or main line
		const defaultLine =
			opening.lines?.find((l) => l.id === "main") ?? opening.lines?.[0];

		if (defaultLine) {
			setGuidedMode(true);
			resetGame();
			setGuidedMoves(defaultLine.moves, opening.name);
		}

		return () => {
			setGuidedMode(false);
		};
	}, [opening, setGuidedMode, setGuidedMoves, resetGame]);

	if (!opening) {
		return <div className="p-4">Opening not found.</div>;
	}

	return (
		<div className="h-[calc(100vh-64px)]">
			<MaxWidthContainer className="h-full border-0 md:border-l md:border-r">
				<div className="h-full flex gap-4">
					<div className="h-full flex flex-col justify-between space-y-1">
						<PlayerInfo name="Black Player" color="black">
							<BlackCaptured />
						</PlayerInfo>
						<ChessBoard />
						<PlayerInfo name="White Player" color="white">
							<WhiteCaptured />
						</PlayerInfo>
					</div>

					<div className="h-full flex-1 min-w-0">
						<GameInfo />
					</div>
				</div>
			</MaxWidthContainer>
		</div>
	);
}
