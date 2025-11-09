import { createFileRoute } from "@tanstack/react-router";

import {
	BlackCaptured,
	WhiteCaptured,
} from "@/components/chess/captured-pieces";
import GameInfo from "@/components/chess/game-info";
import { Header } from "@/components/layout/header";
import { ChessBoard } from "@/components/chess/chess-board";
import { PlayerInfo } from "@/components/chess/player-info";
import MaxWidthContainer from "@/components/max-width-container";

export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen">
			<Header />
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
		</div>
	);
}
