import {
	RotateCcw,
	Undo2,
	ChevronLeft,
	ChevronRight,
	Repeat2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useChessStore } from "@/store/chess-store";

export function GameControls({ className }: { className?: string }) {
	const {
		currentMoveIndex,
		moveHistory,
		isBoardFlipped,
		resetGame,
		goBackward,
		goForward,
		removeLastMove,
		setIsBoardFlipped,

		// guide related
		guidedIndex,
		guidedMoves,
		guidedMode,
		guidedBackward,
		guidedForward,
		goToGuidedMove,
	} = useChessStore();

	const canUndo = currentMoveIndex > 0;
	const canGoBackward = guidedMode ? guidedIndex > 0 : currentMoveIndex > 0;
	const canGoForward = guidedMode
		? guidedIndex < guidedMoves.length - 1
		: currentMoveIndex < moveHistory.length - 1;

	return (
		<div className={cn("space-y-2", className)}>
			<div className="flex items-center justify-between">
				<div className="space-x-2">
					<Button
						variant="outline"
						onClick={() => {
							guidedMode ? goToGuidedMove(0) : resetGame();
						}}
						disabled={!canGoBackward}
						size="sm"
						className="rounded"
					>
						<RotateCcw />
						Restart
					</Button>

					<Button
						variant="outline"
						onClick={removeLastMove}
						disabled={!canUndo}
						size="sm"
						className="rounded"
					>
						<Undo2 /> Undo
					</Button>
				</div>

				<div className="space-x-2">
					<Button
						variant="outline"
						size="icon"
						onClick={guidedMode ? guidedBackward : goBackward}
						disabled={!canGoBackward}
						className="size-8 rounded"
					>
						<ChevronLeft
							className={cn("", {
								"opacity-50": !canGoBackward,
							})}
						/>
					</Button>

					<Button
						variant="outline"
						size="icon"
						onClick={guidedMode ? guidedForward : goForward}
						disabled={!canGoForward}
						className="size-8 rounded"
					>
						<ChevronRight
							className={cn("", {
								"opacity-50": !canGoForward,
							})}
						/>
					</Button>
				</div>
			</div>

			{!guidedMode && (
				<Button
					variant="outline"
					onClick={() => setIsBoardFlipped(!isBoardFlipped)}
					size="sm"
					className="w-full rounded"
				>
					<Repeat2 className="mr-1 h-4 w-4" />
					{isBoardFlipped ? "Play as White" : "Play as Black"}
				</Button>
			)}
		</div>
	);
}
