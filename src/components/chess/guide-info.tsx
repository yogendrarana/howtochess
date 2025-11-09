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

export function GuideInfo() {
	const { name } = useParams({ from: "/opening/$name/" });
	const opening = chessOpeningMap[name];
	const { guidedMoves, guidedIndex, setGuidedMoves } = useChessStore();

	if (!opening) return <div className="p-4">Opening not found.</div>;

	const defaultLineId = opening.lines?.[0]?.id ?? "";

	// Latest move first
	const pastMoves = guidedMoves.slice(0, guidedIndex + 1).reverse();

	return (
		<div className="p-2 flex flex-col gap-3 flex-1 border rounded">
			{/* Variation Selector */}
			<Select
				defaultValue={defaultLineId}
				onValueChange={(variationId) => {
					const line = opening.lines.find(
						(l) => l.id === variationId,
					);
					if (line) setGuidedMoves(line.moves, opening.name);
				}}
			>
				<SelectTrigger className="w-full rounded">
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

			{/* Comment History */}
			<Card className="p-2 rounded flex-1 flex flex-col overflow-hidden">
				<ScrollArea className="flex-1 pr-2">
					<div className="flex flex-col gap-2">
						<AnimatePresence initial={false}>
							{pastMoves.length > 0 ? (
								pastMoves.map((move, i) => {
									const moveNumber = guidedIndex - i + 1;
									return (
										<motion.div
											key={move.fen}
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.25 }}
											className="p-2 border rounded bg-muted text-sm"
										>
											<p className="font-medium">
												Move {moveNumber}: {move.san}
											</p>
											<p className="text-muted-foreground">
												{move.comment}
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
				</ScrollArea>
			</Card>
		</div>
	);
}
