import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { OpeningsSection } from "@/components/layout/openings-section";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen h-screen flex flex-col">
			<Header />
			<Hero />
			<OpeningsSection />
			<Footer />
		</div>
	);
}
