import { Link } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button";
import { StickyHeaderContainer } from "@/components/sticky-header-container";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

export const PlaygroundHeader = () => {
	return (
		<StickyHeaderContainer>
			<div className="h-full flex items-center justify-between">
				<Link to="/" className="text-lg font-semibold tracking-tight">
					how.to.chess
				</Link>

				<div className="flex items-center gap-2">
					<Link
						to="/"
						className={cn(buttonVariants({ variant: "outline" }))}
					>
						<Home />
						<span>Home</span>
					</Link>
				</div>
			</div>
		</StickyHeaderContainer>
	);
};
