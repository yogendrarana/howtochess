import React from "react";
import { ThemeProvider } from "./providers/theme-provider";
import { AppConvexProvider } from "./providers/convex-provider";
import { getContext, TanstackQueryProvider } from "./providers/tanstack-query-provider";

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
