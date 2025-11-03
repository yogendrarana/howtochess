import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";

export const Header = () => {
	const { theme, setTheme } = useTheme();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
			<div className="container mx-auto px-4 h-14 flex items-center justify-between">
				<Link to="/" className="text-lg font-semibold tracking-tight">
					howtochess
				</Link>

				<div className="flex items-center gap-2">
					<Button variant="ghost" size="sm">
						Donate
					</Button>
					<Button variant="outline" size="sm">
						Join
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="h-9 w-9"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</div>
			</div>
		</header>
	);
};
