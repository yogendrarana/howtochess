import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { siteData } from "@/data/site";
import MaxWidthContainer from "@/components/max-width-container";
import { Logo } from "../logo";

export function Footer() {
	return (
		<footer>
			<MaxWidthContainer className="py-6 sm:border-l sm:border-r">
				<div
					className={cn(
						"flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-between",
					)}
				>
					{/* Logo + copyright */}
					<div className="flex flex-col items-center sm:items-start gap-2">
						<Logo showName className="flex" />
						<span className="text-center sm:text-left">
							© {new Date().getFullYear()} How to Chess. All
							rights reserved.
						</span>
					</div>

					{/* Author info */}
					<div className="flex flex-col items-center sm:items-end gap-1 text-sm">
						<span>Created by </span>
						<Link
							target="_blank"
							to={siteData.author.links.website}
							className="underline hover:text-foreground transition-colors"
						>
							Yogendra Rana
						</Link>
					</div>
				</div>
			</MaxWidthContainer>
		</footer>
	);
}
