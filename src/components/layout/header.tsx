import { Link } from "@tanstack/react-router";
import { Home, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import { StickyHeaderContainer } from "@/components/sticky-header-container";
import { cn } from "@/lib/utils";

export const Header = () => {
	const { theme, setTheme } = useTheme();

	return (
		<StickyHeaderContainer>
			<div className="h-full flex items-center justify-between">
				<Link to="/" className="text-lg font-semibold tracking-tight">
					how.to.chess
				</Link>

				<div className="flex items-center gap-1">
					<Button variant="outline" className="rounded">
						Join
					</Button>
					<Link
						to="/"
						className={cn(buttonVariants({
							variant: "outline",
							size: "icon",
							className: "rounded"
						}))}
					>
						<Home className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					</Link>
					<Button
						variant="outline"
						size="icon"
						className="rounded"
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
					>
						<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</div>
			</div>
		</StickyHeaderContainer>
	);
};
