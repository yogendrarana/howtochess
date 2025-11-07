import { createFileRoute } from "@tanstack/react-router";

import { Playground } from "@/components/chess/playground";
import { Header } from "@/components/layout/header";
export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen">
			<Header />
			<Playground />
		</div>
	);
}
