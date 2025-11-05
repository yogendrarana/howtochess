import type { PlayerColor } from "@/constants/chess";
import { useChessStore } from "@/store/chess-store";

export function BoardControls() {
	const {
		isBoardFlipped,
		playerColor,
		currentMoveIndex,
		moveHistory,
		getGameStatus,
		setIsBoardFlipped,
		setPlayerColor,
		resetGame,
		goToMove,
		goBackward,
		goForward,
		removeLastMove,
		removeMultipleMoves,
	} = useChessStore();

	const canGoBackward = currentMoveIndex > 0;
	const canGoForward = currentMoveIndex < moveHistory.length - 1;
	const canRemoveMove = currentMoveIndex > 0;
	const isViewingHistory = currentMoveIndex < moveHistory.length - 1;

	const handlePlayerColorChange = (color: PlayerColor) => {
		setPlayerColor(color);
		// Auto-flip board when choosing to play as black
		if (color === "black") {
			setIsBoardFlipped(true);
		} else if (color === "white") {
			setIsBoardFlipped(false);
		}
	};

	return (
		<div className="flex flex-col items-center gap-4 p-6">
			<div className="flex items-center justify-between w-full max-w-6xl">
				<div className="text-xl font-semibold">
					{getGameStatus()}
					{isViewingHistory && (
						<span className="ml-2 text-orange-500 text-base">
							(Viewing History)
						</span>
					)}
				</div>
				<div className="flex gap-2">
					<div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
						<span className="font-semibold">Play as:</span>
						<select
							value={playerColor}
							onChange={(e) =>
								handlePlayerColorChange(
									e.target.value as PlayerColor,
								)
							}
							className="px-3 py-1 border rounded-md"
						>
							<option value="both">Both Colors</option>
							<option value="white">White Only</option>
							<option value="black">Black Only</option>
						</select>
					</div>
					<button
						onClick={() => setIsBoardFlipped(!isBoardFlipped)}
						className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-lg"
					>
						{isBoardFlipped ? "↑ White View" : "↓ Black View"}
					</button>
					<button
						onClick={resetGame}
						className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg"
					>
						New Game
					</button>
				</div>
			</div>

			{/* Move Navigation Controls */}
			<div className="flex flex-col gap-4 w-[640px]">
				{/* Navigation through moves */}
				<div className="flex gap-3 items-center justify-center">
					<div className="text-lg font-semibold mr-4">
						Navigate Moves:
					</div>
					<button
						onClick={() => goToMove(0)}
						disabled={!canGoBackward}
						className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-lg"
					>
						↞ Start
					</button>
					<button
						onClick={goBackward}
						disabled={!canGoBackward}
						className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-lg"
					>
						← Previous
					</button>

					<div className="mx-3 text-lg font-mono bg-gray-100 px-4 py-2 rounded-lg min-w-[100px] text-center border">
						{currentMoveIndex === 0
							? "Start"
							: `Move ${Math.ceil(currentMoveIndex / 2)}`}
					</div>

					<button
						onClick={goForward}
						disabled={!canGoForward}
						className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-lg"
					>
						Next →
					</button>
					<button
						onClick={() => goToMove(moveHistory.length - 1)}
						disabled={!canGoForward}
						className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-lg"
					>
						Current ↠
					</button>
				</div>

				{/* Remove moves (undo) */}
				<div className="flex gap-3 items-center justify-center">
					<div className="text-lg font-semibold mr-4">
						Remove Moves:
					</div>
					<button
						onClick={removeLastMove}
						disabled={!canRemoveMove}
						className="px-4 py-2 bg-red-500 text-white rounded-lg disabled:bg-red-300 disabled:cursor-not-allowed hover:bg-red-600 transition-colors text-lg"
					>
						Undo Last Move
					</button>
					<button
						onClick={() => removeMultipleMoves(2)}
						disabled={currentMoveIndex < 2}
						className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:bg-red-300 disabled:cursor-not-allowed hover:bg-red-700 transition-colors text-lg"
					>
						Undo 2 Moves
					</button>
					<button
						onClick={() => removeMultipleMoves(5)}
						disabled={currentMoveIndex < 5}
						className="px-4 py-2 bg-red-700 text-white rounded-lg disabled:bg-red-300 disabled:cursor-not-allowed hover:bg-red-800 transition-colors text-lg"
					>
						Undo 5 Moves
					</button>
				</div>
			</div>
		</div>
	);
}
