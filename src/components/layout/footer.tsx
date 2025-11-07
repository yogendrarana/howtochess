import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { siteData } from "@/data/site";
import MaxWidthContainer from "@/components/max-width-container";

export function Footer() {
	return (
		<footer>
			<MaxWidthContainer className="py-0 sm:border-l sm:border-r">
				<div
					className={cn(
						"h-16 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:items-center",
					)}
				>
					<p>
						© {new Date().getFullYear()} {siteData.name}. All rights
						reserved.
					</p>

					<div className="flex flex-col sm:items-end gap-1">
						<p>
							Created by{" "}
							<Link
								to={siteData.author.links.website}
								className="underline hover:text-foreground"
							>
								Yogendra Rana
							</Link>
						</p>
					</div>
				</div>
			</MaxWidthContainer>
		</footer>
	);
}
