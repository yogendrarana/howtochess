import type React from "react";
import {
	getContext,
	TanstackQueryProvider,
} from "./providers/tanstack-query-provider";
import { ThemeProvider } from "./providers/theme-provider";
import { TooltipProvider } from "./ui/tooltip";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<TanstackQueryProvider queryClient={getContext().queryClient}>
					<TooltipProvider>{children}</TooltipProvider>
				</TanstackQueryProvider>
		</ThemeProvider>
	);
}
