import MaxWidthContainer from "../max-width-container";
import { ChessBoard } from "@/components/chess/chess-board";
import { BlackCaptured, WhiteCaptured } from "./captured-pieces";
import { PlayerInfo } from "./player-info";

import GameInfo from "./game-info";

export function Playground() {
	return (
		<MaxWidthContainer className="border-0 md:border-l md:border-r h-full">
			<div className="h-full flex gap-4">
				<div className="h-full flex flex-col justify-between space-y-1">
					<PlayerInfo
						name="White Player"
						imageUrl="/avatars/white.png"
					>
						<WhiteCaptured />
					</PlayerInfo>
					<ChessBoard />
					<PlayerInfo
						name="Black Player"
						imageUrl="/avatars/white.png"
					>
						<BlackCaptured />
					</PlayerInfo>
				</div>

				<div className="h-full flex-1 px-4">
					<GameInfo />
				</div>
			</div>
		</MaxWidthContainer>
	);
}
