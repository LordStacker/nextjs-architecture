"use client";

import { AppShell as MantineAppShell, Container } from "@mantine/core";
import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <MantineAppShell
      header={{ height: 60 }}
      padding="md"
    >
      <MantineAppShell.Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 1rem",
          backgroundColor: "#f9f9f9",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: 500 }}>🚀 Hello World App</h1>
      </MantineAppShell.Header>

      <MantineAppShell.Main>
        <Container size="md">{children}</Container>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
