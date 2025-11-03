import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { Openings } from "@/components/layout/openings";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen">
			<Header />
			<Hero />
			<Openings />
			<Footer />
		</div>
	);
}
