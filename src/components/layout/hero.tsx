/** biome-ignore-all assist/source/organizeImports: <ignore> */
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import MaxWidthContainer from "@/components/max-width-container";

export const Hero = () => {
	return (
		<section className="flex items-center justify-center border-b">
			<MaxWidthContainer className="md:border-l md:border-r">
				<div className="py-20 max-w-2xl mx-auto text-center space-y-5">
					<p className="text-lg md:text-2xl font-bold tracking-tight">
						Learn chess through patterns,
						<br />
						not pressure
					</p>

					<p className="text-muted-foreground">
						Explore openings, master tactics, and build your chess intuition in
						a practice playground—no timers, no opponents, just pure learning.
					</p>

					<div className="flex items-center justify-center gap-4 pt-4">
						<Button size="lg" className="gap-2 rounded">
							Playground
							<ArrowRight className="h-4 w-4" />
						</Button>
						<Button size="lg" variant="outline" className="rounded">
							Explore Openings
						</Button>
					</div>
				</div>
			</MaxWidthContainer>
		</section>
	);
};
