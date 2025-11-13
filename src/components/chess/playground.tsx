import { cn } from "@/lib/utils";

import GameInfo from "./game-info";
import { ChessBoard } from "./chess-board";
import { PlayerInfo } from "./player-info";
import { BlackCaptured, WhiteCaptured } from "./captured-pieces";

export function Playground({ className }: { className?: string }) {
	return (
		<div
			className={cn("h-full flex flex-col gap-4 md:flex-row", className)}
		>
			<div className="flex-1 flex flex-col gap-2">
				<ChessBoard />
				<div className="flex flex-col md:flex-row gap-2">
					<PlayerInfo
						name="Black Player"
						color="black"
						className="w-full md:w-1/2"
					>
						<BlackCaptured />
					</PlayerInfo>
					<PlayerInfo
						name="White Player"
						color="white"
						className="w-full md:w-1/2"
					>
						<WhiteCaptured />
					</PlayerInfo>
				</div>
			</div>

			<GameInfo className="w-full md:w-1/3" />
		</div>
	);
}
