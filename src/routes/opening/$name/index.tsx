import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { chessOpeningMap } from "@/data/openings";
import { useChessStore } from "@/store/chess-store";
import { Playground } from "@/components/chess/playground";
import MaxWidthContainer from "@/components/max-width-container";

export const Route = createFileRoute("/opening/$name/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { name } = Route.useParams();
	const opening = chessOpeningMap[name];
	const {
		setGuidedMoves,
		setGuidedMode,
		resetGame,
		setGuidedLineName,
		setIsBoardFlipped,
	} = useChessStore();

	useEffect(() => {
		if (!opening) return;

		if (opening.color === "black") {
			setIsBoardFlipped(true);
		} else {
			setIsBoardFlipped(false);
		}

		// pick the first variation or main line
		const defaultLine =
			opening.lines?.find((l) => l.id === "main") ?? opening.lines?.[0];

		if (defaultLine) {
			setGuidedMode(true);
			resetGame();
			setGuidedMoves(defaultLine.moves);
			setGuidedLineName(defaultLine.name);
		}

		return () => {
			setGuidedMode(false);
		};
	}, [
		opening,
		setGuidedMode,
		setGuidedMoves,
		resetGame,
		setGuidedLineName,
		setIsBoardFlipped,
	]);

	if (!opening) {
		return <div className="p-4">Opening not found.</div>;
	}

	return (
		<div className="h-[calc(100vh-64px)]">
			<MaxWidthContainer className="h-full border-0 md:border-l md:border-r">
				<Playground />
			</MaxWidthContainer>
		</div>
	);
}
