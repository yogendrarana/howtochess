import { useChessStore } from "@/store/chess-store";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MoveHistory({ className }: { className?: string }) {
	const { moveHistory, currentMoveIndex, goToMove } = useChessStore();

	return (
		<div className={cn("border rounded flex-1 flex flex-col min-h-0", className)}>
			<ScrollArea className="flex-1 min-h-0">
				{moveHistory.length === 1 ? (
					<div className="h-full py-8 text-muted-foreground text-sm flex justify-center items-center">
						No moves yet
					</div>
				) : (
					<table className="w-full text-sm rounded-b-2xl">
						<thead className="sticky top-0 bg-muted/50 backdrop-blur-sm">
							<tr className="border-b">
								<th className="text-left py-2 px-3 font-medium text-muted-foreground">
									#
								</th>
								<th className="text-left py-2 px-3 font-medium text-muted-foreground">
									White
								</th>
								<th className="text-left py-2 px-3 font-medium text-muted-foreground">
									Black
								</th>
							</tr>
						</thead>

						<tbody>
							{Array.from({
								length: Math.ceil((moveHistory.length - 1) / 2),
							}).map((_, index) => {
								const whiteMove = moveHistory[index * 2 + 1];
								const blackMove = moveHistory[index * 2 + 2];

								const isActive =
									currentMoveIndex >= index * 2 + 1 &&
									currentMoveIndex <=
										(blackMove ? index * 2 + 2 : index * 2 + 1);

								return (
									<tr
										key={`${whiteMove?.fen ?? "start"}-${blackMove?.fen ?? ""}`}
										onClick={() =>
											goToMove(
												blackMove
													? index * 2 + 2
													: index * 2 + 1,
											)
										}
										className={cn(
											"border-b cursor-pointer transition-colors",
											isActive
												? "bg-accent text-accent-foreground"
												: "hover:bg-muted/50",
										)}
									>
										<td className="py-2 px-3 font-mono font-semibold">
											{index + 1}.
										</td>

										<td className="py-2 px-3">
											{whiteMove && (
												<span
													className={cn(
														whiteMove.captured &&
															"text-destructive font-semibold",
													)}
												>
													{whiteMove.san}
													{whiteMove.captured && " †"}
												</span>
											)}
										</td>

										<td className="py-2 px-3">
											{blackMove && (
												<span
													className={cn(
														blackMove.captured &&
															"text-destructive font-semibold",
													)}
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
				)}
			</ScrollArea>
		</div>
	);
}
