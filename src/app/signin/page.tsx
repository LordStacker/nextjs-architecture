"use client";

import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { Center, Loader, Text, Stack } from "@mantine/core";

export default function SignInPage() {
  useEffect(() => {
    signIn("azure-ad", { callbackUrl: "/" });
  }, []);

  return (
    <Center h="100vh">
      <Stack align="center" gap="md">
        <Loader color="grape" size="lg" />
        <Text size="lg" fw={500}>
          Redirecting to Microsoft login...
        </Text>
      </Stack>
    </Center>
  );
}
