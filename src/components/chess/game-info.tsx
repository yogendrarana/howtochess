import { cn } from "@/lib/utils";
import { MoveHistory } from "./move-history";
import { GameControls } from "./game-controls";
import { GuideInfo } from "./guide-info";
import { useChessStore } from "@/store/chess-store";
import { Button } from "../ui/button";
import { Repeat2 } from "lucide-react";

export function GameInfo({ className }: { className?: string }) {
	const { guidedMode, setIsBoardFlipped, isBoardFlipped } = useChessStore();

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

			{!guidedMode && (
				<Button
					variant="outline"
					onClick={() => setIsBoardFlipped(!isBoardFlipped)}
					size="sm"
					className="rounded"
				>
					<Repeat2 className="mr-1 h-4 w-4" />
					{isBoardFlipped ? "Play as White" : "Play as Black"}
				</Button>
			)}
		</div>
	);
}
