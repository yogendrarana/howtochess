import { createFileRoute } from "@tanstack/react-router";

import { ChessBoard } from "@/components/chess/chess-board";

export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<ChessBoard />
		</div>
	);
}
