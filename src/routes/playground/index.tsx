import { createFileRoute } from "@tanstack/react-router";

import { Playground } from "@/components/chess/playground";
export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen">
			<Playground />
		</div>
	);
}
