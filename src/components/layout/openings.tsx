import { ChevronRight, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const openings = [
	{
		name: "Sicilian Defense",
		moves: "1.e4 c5",
		description: "The most popular and best-scoring response to white's 1.e4",
		category: "Asymmetrical",
	},
	{
		name: "French Defense",
		moves: "1.e4 e6",
		description: "A solid defense that creates an asymmetric position",
		category: "Semi-Closed",
	},
	{
		name: "Caro-Kann Defense",
		moves: "1.e4 c6",
		description: "A reliable defense that aims for a solid position",
		category: "Semi-Closed",
	},
	{
		name: "Italian Game",
		moves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
		description: "One of the oldest recorded openings in chess",
		category: "Open Game",
	},
	{
		name: "Ruy López",
		moves: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
		description: "Named after a Spanish bishop, a classic opening",
		category: "Open Game",
	},
	{
		name: "Queen's Gambit",
		moves: "1.d4 d5 2.c4",
		description: "One of the oldest known chess openings",
		category: "Closed Game",
	},
	{
		name: "King's Indian Defense",
		moves: "1.d4 Nf6 2.c4 g6",
		description: "A hypermodern defense allowing white central control",
		category: "Closed Game",
	},
	{
		name: "Nimzo-Indian Defense",
		moves: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4",
		description: "A hypermodern chess opening named after Aron Nimzowitsch",
		category: "Closed Game",
	},
	{
		name: "London System",
		moves: "1.d4 d5 2.Bf4",
		description: "A solid setup for white with easy development",
		category: "Closed Game",
	},
];

export function Openings() {
	return (
		<section className="border-t">
			<div className="container px-4 md:px-8 py-16">
				<div className="mb-12 flex items-center justify-between">
					<div>
						<h2 className="text-3xl font-bold tracking-tight">
							Chess Openings
						</h2>
						<p className="text-muted-foreground mt-2">
							Study and practice the most important opening theories
						</p>
					</div>
					<Target className="h-8 w-8 text-muted-foreground" />
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{openings.map((opening, index) => (
						<Card
							key={index}
							className="group relative overflow-hidden transition-all hover:shadow-md border-muted-foreground/20"
						>
							<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
							<CardHeader className="relative">
								<div className="flex items-start justify-between gap-2">
									<CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
										{opening.name}
									</CardTitle>
									<span className="rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground whitespace-nowrap">
										{opening.category}
									</span>
								</div>
								<CardDescription className="font-mono text-sm">
									{opening.moves}
								</CardDescription>
							</CardHeader>
							<CardContent className="relative">
								<p className="text-sm text-muted-foreground">
									{opening.description}
								</p>
								<Button
									variant="ghost"
									size="sm"
									className="mt-4 gap-1 group/button"
								>
									Practice
									<ChevronRight className="h-3 w-3 transition-transform group-hover/button:translate-x-0.5" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
