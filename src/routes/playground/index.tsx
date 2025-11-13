import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/layout/header";
import { Playground } from "@/components/chess/playground";
import MaxWidthContainer from "@/components/max-width-container";

export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header />
			<div className="h-[calc(100vh-64px)]">
				<MaxWidthContainer className="h-full border-0 md:border-l md:border-r">
					<Playground />
				</MaxWidthContainer>
			</div>
		</>
	);
}
