import { cn } from "@/lib/utils";

import { useChessStore } from "@/store/chess-store";
import { GameInfo } from "@/components/chess/game-info";
import { PlayerInfo } from "@/components/chess/player-info";
import { ChessBoard } from "@/components/chess/chess-board";
import {
	BlackCaptured,
	WhiteCaptured,
} from "@/components/chess/captured-pieces";

export function Playground({ className }: { className?: string }) {
	const { guidedMode } = useChessStore();
	return (
		<div
			className={cn("h-full flex flex-col gap-4 md:flex-row", className)}
		>
			<div className="flex-1 flex flex-col gap-2">
				<ChessBoard />
				{!guidedMode && (
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
				)}
			</div>

			<GameInfo className="w-full md:w-1/3" />
		</div>
	);
}
