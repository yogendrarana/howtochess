import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/layout/hero";
import { Footer } from "@/components/layout/footer";
import { Openings } from "@/components/layout/openings";
import { Header } from "@/components/layout/header";

export const Route = createFileRoute("/")({ component: App });

function App() {
    return <div className="min-h-screen">
        <Header />
        <Hero />
        <Openings />
        <Footer />
    </div>;
}
