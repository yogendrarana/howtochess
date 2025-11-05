import { useChessStore } from "@/store/chess-store";
import React from "react";

export function MoveHistory() {
	const { moveHistory, currentMoveIndex, goToMove } = useChessStore();

	return (
		<div className="bg-white border-2 rounded-lg p-4 shadow-sm flex-1">
			<div className="text-lg font-semibold mb-3 text-center">
				Move History
			</div>
			<div className="max-h-96 overflow-y-auto">
				<table className="w-full">
					<thead>
						<tr className="border-b-2">
							<th className="text-left py-2 px-3">#</th>
							<th className="text-left py-2 px-3">White</th>
							<th className="text-left py-2 px-3">Black</th>
						</tr>
					</thead>
					<tbody>
						{Array.from({
							length: Math.ceil((moveHistory.length - 1) / 2),
						}).map((_, index) => {
							const whiteMove = moveHistory[index * 2 + 1];
							const blackMove = moveHistory[index * 2 + 2];

							return (
								<tr
									key={index}
									className={`border-b hover:bg-gray-50 cursor-pointer ${
										currentMoveIndex >= index * 2 + 1 &&
										currentMoveIndex <=
											(blackMove
												? index * 2 + 2
												: index * 2 + 1)
											? "bg-blue-50"
											: ""
									}`}
									onClick={() =>
										goToMove(
											blackMove
												? index * 2 + 2
												: index * 2 + 1,
										)
									}
								>
									<td className="py-2 px-3 font-mono font-semibold">
										{index + 1}.
									</td>
									<td className="py-2 px-3">
										{whiteMove && (
											<span
												className={
													whiteMove.captured
														? "text-red-600 font-semibold"
														: ""
												}
											>
												{whiteMove.san}
												{whiteMove.captured && " †"}
											</span>
										)}
									</td>
									<td className="py-2 px-3">
										{blackMove && (
											<span
												className={
													blackMove.captured
														? "text-red-600 font-semibold"
														: ""
												}
											>
												{blackMove.san}
												{blackMove.captured && " †"}
											</span>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				{moveHistory.length === 1 && (
					<div className="text-center text-gray-500 py-4">
						No moves yet
					</div>
				)}
			</div>
		</div>
	);
}
