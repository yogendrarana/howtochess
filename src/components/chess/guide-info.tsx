import { useChessStore } from "@/store/chess-store";
import { chessOpeningMap } from "@/data/openings";
import { useParams } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function GuideInfo({ className }: { className: string }) {
	const { name } = useParams({ from: "/opening/$name/" });
	const opening = chessOpeningMap[name];
	const { guidedMoves, guidedIndex, setGuidedMoves, setGuidedLineName } =
		useChessStore();

	if (!opening) return <div className="p-4">Opening not found.</div>;

	const defaultLineId = opening.lines?.[0]?.id ?? "";
	const pastMoves = guidedMoves.slice(0, guidedIndex + 1).reverse();

	return (
		<div
			className={cn(
				"flex flex-col min-h-0 border rounded p-2 gap-3",
				className,
			)}
		>
			{/* Variation Selector */}
			<Select
				defaultValue={defaultLineId}
				onValueChange={(variationId) => {
					const line = opening.lines.find(
						(l) => l.id === variationId,
					);
					if (line) {
						setGuidedMoves(line.moves);
						setGuidedLineName(line.name);
					}
				}}
			>
				<SelectTrigger className="w-full rounded shadow-none">
					<SelectValue placeholder="Select variation" />
				</SelectTrigger>

				<SelectContent className="rounded">
					{opening.lines.map((line) => (
						<SelectItem key={line.id} value={line.id}>
							{line.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			{/* Scrollable Comment History */}
			<ScrollArea className="flex-1 min-h-0">
				<Card className="p-2 rounded shadow-none">
					<div className="flex flex-col gap-2">
						<AnimatePresence initial={false}>
							{pastMoves.length > 0 ? (
								pastMoves.map((move, i) => {
									const moveNumber = guidedIndex - i;
									return (
										<motion.div
											key={move.fen}
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.25 }}
											className="p-2 border rounded bg-muted text-sm"
										>
											<p className="font-semibold">
												Move {moveNumber}: {move.san} -{" "}
												<span className="font-normal">
													{move.comment}
												</span>
											</p>
										</motion.div>
									);
								})
							) : (
								<p className="text-sm text-muted-foreground">
									Select a variation to begin learning.
								</p>
							)}
						</AnimatePresence>
					</div>
				</Card>
			</ScrollArea>
		</div>
	);
}
