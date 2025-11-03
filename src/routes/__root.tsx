import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";

import type { QueryClient } from "@tanstack/react-query";

import appCss from "@/styles/app.css?url";


import { Provider } from "@/components/provider";
import { Toaster } from "@/components/ui/sonner";

interface MyRouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    head: () => ({
        meta: [
            {
                charSet: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                title: "Intro - Blueprint"
            }
        ],
        links: [
            {
                rel: "stylesheet",
                href: appCss
            }
        ]
    }),

    shellComponent: RootDocument
});

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <Provider>
                    {children}
                    <Toaster />
                    <TanStackDevtools
                        config={{ position: "bottom-right" }}
                        plugins={[
                            {
                                name: "Tanstack Router",
                                render: <TanStackRouterDevtoolsPanel />
                            },
                        ]}
                    />
                </Provider>
                <Scripts />
            </body>
        </html>
    );
}
