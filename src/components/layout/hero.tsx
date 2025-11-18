import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthContainer from "@/components/max-width-container";

export const Hero = () => {
	return (
		<section className="flex items-center justify-center border-b">
			<MaxWidthContainer className="md:border-l md:border-r">
				<div className="h-[45vh] max-w-2xl mx-auto text-center space-y-5 flex flex-col justify-center items-center">
					<p className="text-lg md:text-2xl font-bold tracking-tight">
						Learn chess through patterns,
						<br />
						not pressure
					</p>

					<p className="text-muted-foreground">
						Explore openings, master tactics, and build your chess
						intuition in a practice playground—no timers, no
						opponents, just pure learning.
					</p>

					<div className="flex items-center justify-center gap-4 pt-4">
						<Link
							to="/playground"
							className={cn(
								buttonVariants({
									size: "lg",
									className: "gap-2 rounded",
								}),
							)}
						>
							Playground
							<ArrowRight className="h-4 w-4" />
						</Link>
						<a
							href="#opening-section"
							className={cn(
								buttonVariants({
									size: "lg",
									variant: "outline",
									className: "gap-2 rounded",
								}),
							)}
						>
							Explore Openings
						</a>
					</div>
				</div>
			</MaxWidthContainer>
		</section>
	);
};
