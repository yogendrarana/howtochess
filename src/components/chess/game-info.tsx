import { cn } from "@/lib/utils";
import { MoveHistory } from "./move-history";
import { GameControls } from "./game-controls";
import { GuideInfo } from "./guide-info";
import { useChessStore } from "@/store/chess-store";

export function GameInfo({ className }: { className?: string }) {
	const { guidedMode } = useChessStore();

	return (
		<div className={cn("h-full flex flex-col gap-2", className)}>
			<GameControls />
			<div className="flex-1 flex flex-col min-h-0">
				{guidedMode ? (
					<GuideInfo className="flex-1" />
				) : (
					<MoveHistory className="flex-1" />
				)}
			</div>
		</div>
	);
}
