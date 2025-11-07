import type React from "react";
import { AppConvexProvider } from "./providers/convex-provider";
import {
	getContext,
	TanstackQueryProvider,
} from "./providers/tanstack-query-provider";
import { ThemeProvider } from "./providers/theme-provider";
import { TooltipProvider } from "./ui/tooltip";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<AppConvexProvider>
				<TanstackQueryProvider queryClient={getContext().queryClient}>
					<TooltipProvider>{children}</TooltipProvider>
				</TanstackQueryProvider>
			</AppConvexProvider>
		</ThemeProvider>
	);
}
