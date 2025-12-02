import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import MaxWidthContainer from "../max-width-container";
import { UNICODE_PIECES } from "@/constants/chess";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import type { ChessOpening } from "@/types/chess";
import { chessOpeningMap } from "@/data/openings";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";

export function OpeningsSection() {
	const [color, setColor] = useState<"black" | "white">("white");
	const [openings, setOpenings] = useState<Array<ChessOpening>>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		// Simulate a small delay to prevent flickering and show the skeleton state
		const timer = setTimeout(() => {
			setOpenings(() => {
				if (color === "white") {
					return Object.values(chessOpeningMap)
						.filter((o) => o.color === "white")
						.sort((a, b) => a.name.localeCompare(b.name));
				} else {
					return Object.values(chessOpeningMap)
						.filter((o) => o.color === "black")
						.sort((a, b) => a.name.localeCompare(b.name));
				}
			});
			setIsLoading(false);
		}, 500);

		return () => clearTimeout(timer);
	}, [color]);

	return (
		<section id="opening-section" className="border-b flex-1">
			<MaxWidthContainer className="h-full border-0 md:border-l md:border-r">
				<div className="mb-2 flex items-center justify-between">
					<h2 className="text-xl font-bold">Chess openings</h2>

					<div className="p-1 flex items-center rounded bg-muted border border-dashed">
						{/** biome-ignore lint/a11y/useButtonType: <rule> */}
						<button
							onClick={() => setColor("white")}
							className={cn(
								"text-lg h-8 w-8 px-2 rounded cursor-pointer",
								color === "white"
									? "bg-background text-foreground border-border shadow-sm"
									: "text-muted-foreground hover:text-foreground border-transparent",
							)}
						>
							{UNICODE_PIECES.wk}
						</button>

						{/** biome-ignore lint/a11y/useButtonType: <rule> */}
						<button
							onClick={() => setColor("black")}
							className={cn(
								"text-lg h-8 w-8 px-2 rounded cursor-pointer ",
								color === "black"
									? "bg-background text-foreground border-border shadow-sm"
									: "text-muted-foreground hover:text-foreground border-transparent",
							)}
						>
							{UNICODE_PIECES.bk}
						</button>
					</div>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{isLoading
						? Array.from({ length: 6 }).map((_, i) => (
								<Card
									// biome-ignore lint/suspicious/noArrayIndexKey: <use>
									key={i}
									className="group relative overflow-hidden border shadow-none rounded justify-between"
								>
									<CardHeader className="relative">
										<div className="flex items-start justify-between gap-2">
											<Skeleton className="h-6 w-3/4" />
										</div>
										<CardDescription className="text-sm pt-2">
											<Skeleton className="h-4 w-full mb-1" />
											<Skeleton className="h-4 w-5/6" />
										</CardDescription>
									</CardHeader>
									<CardContent className="flex items-baseline justify-between relative">
										<Skeleton className="h-5 w-16" />
										<Skeleton className="h-8 w-20" />
									</CardContent>
								</Card>
							))
						: openings.map((opening, index) => (
								<Card
									key={`${opening.name}-${index}`}
									className="group relative overflow-hidden transition-all border shadow-none rounded justify-between"
								>
									<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

									<CardHeader className="relative">
										<div className="flex items-start justify-between gap-2">
											<CardTitle className="font-semibold group-hover:text-primary transition-colors">
												{opening.name}
											</CardTitle>
										</div>
										<CardDescription className="text-sm">
											<p className="text-sm text-muted-foreground">
												{opening.description}
											</p>
										</CardDescription>
									</CardHeader>
									<CardContent className="flex items-baseline justify-between relative">
										<Badge
											variant={
												opening?.lines?.length > 0
													? "outline"
													: "secondary"
											}
											className="text-xs"
										>
											{opening.lines.length
												? "Available"
												: "Coming Soon..."}
										</Badge>

										<Link
											disabled={!opening.lines.length}
											to="/opening/$name"
											params={{ name: opening.id }}
											className={buttonVariants({
												variant: "outline",
												size: "sm",
												className: cn(
													"ml-auto rounded transition-all text-xs",
													!opening.lines.length &&
														"cursor-not-allowed opacity-50 pointer-events-none",
												),
											})}
										>
											Practice
											<ChevronRight className="h-3 w-3 transition-transform group-hover/button:translate-x-0.5" />
										</Link>
									</CardContent>
								</Card>
							))}
				</div>
			</MaxWidthContainer>
		</section>
	);
}
