import MaxWidthContainer from "../max-width-container";
import { ChessBoard } from "@/components/chess/chess-board";
import { BlackCaptured, WhiteCaptured } from "./captured-pieces";
import { PlayerInfo } from "./player-info";

import GameInfo from "./game-info";

export function Playground() {
	return (
		<div className="h-[calc(100vh-64px)]">
			<MaxWidthContainer className="h-full border-0 md:border-l md:border-r">
				<div className="h-full flex gap-8">
					<div className="h-full flex flex-col justify-between space-y-1 shrink-0">
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
