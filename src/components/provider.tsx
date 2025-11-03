import type React from "react";
import { AppConvexProvider } from "./providers/convex-provider";
import {
	getContext,
	TanstackQueryProvider,
} from "./providers/tanstack-query-provider";
import { ThemeProvider } from "./providers/theme-provider";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<AppConvexProvider>
				<TanstackQueryProvider queryClient={getContext().queryClient}>
					{children}
				</TanstackQueryProvider>
			</AppConvexProvider>
		</ThemeProvider>
	);
}
