import { createFileRoute, Outlet } from "@tanstack/react-router";

import MaxWidthContainer from "@/components/max-width-container";

export const Route = createFileRoute("/playground")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<MaxWidthContainer>
			<Outlet />
		</MaxWidthContainer>
	);
}
