import { Header } from "@/components/layout/header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/opening")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen">
			<Header />
			<div className="h-[calc(100vh-64px)]">
				<Outlet />
			</div>
		</div>
	);
}
