import { RotateCcw, Undo2, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useChessStore } from "@/store/chess-store";

export function GameControls({ className }: { className?: string }) {
	const {
		currentMoveIndex,
		moveHistory,
		resetGame,
		goBackward,
		goForward,
		removeLastMove,
	} = useChessStore();

	const canGoBackward = currentMoveIndex > 0;
	const canGoForward = currentMoveIndex < moveHistory.length - 1;
	const canUndo = currentMoveIndex > 0;

	return (
		<div className={cn("flex items-center justify-between", className)}>
			<div className="space-x-2">
				<Button
					variant="outline"
					onClick={resetGame}
					disabled={!canGoBackward}
				>
					<RotateCcw />
					Restart
				</Button>

				<Button
					variant="outline"
					onClick={removeLastMove}
					disabled={!canUndo}
				>
					<Undo2 /> Undo
				</Button>
			</div>

			<div className="space-x-2">
				<Button
					variant="outline"
					size="icon"
					onClick={goBackward}
					disabled={!canGoBackward}
				>
					<ChevronLeft
						className={cn("h-5 w-5", {
							"opacity-50": !canGoBackward,
						})}
					/>
				</Button>

				<Button
					variant="outline"
					size="icon"
					onClick={goForward}
					disabled={!canGoForward}
				>
					<ChevronRight
						className={cn("h-5 w-5", {
							"opacity-50": !canGoForward,
						})}
					/>
				</Button>
			</div>
		</div>
	);
}
