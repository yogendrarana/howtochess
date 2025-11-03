// biome-ignore assist/source/organizeImports: <"ignore">
import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { siteData } from "@/data/site";
import MaxWidthContainer from "@/components/max-width-container";

export function Footer() {
	return (
		<footer>
			<MaxWidthContainer className="sm:border-l sm:border-r">
				<div
					className={cn(
						"py-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-sm text-muted-foreground",
					)}
				>
					<div className="space-y-1">
						<span className="text-base font-semibold text-foreground">
							{siteData.name}
						</span>
						<p>
							© {new Date().getFullYear()} {siteData.name}. All rights reserved.
						</p>
					</div>

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
