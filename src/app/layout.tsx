import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { AppShell } from "@/shared/ui/layout/AppShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World App",
  description: "Demo app with auth and Mantine using FSD", 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell>{children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
