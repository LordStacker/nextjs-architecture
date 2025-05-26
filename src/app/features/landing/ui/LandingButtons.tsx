"use client";

import { useRouter } from "next/navigation";
import { Button, Group } from "@mantine/core";
import { IconLock, IconEye, IconSettings } from "@tabler/icons-react";

export function LandingButtons() {
  const router = useRouter();

  return (
    <Group justify="center" mt="lg">
      <Button
        leftSection={<IconLock size={16} />}
        onClick={() => router.push("/hello-world/secret")}
      >
        Go with Auth
      </Button>

      <Button
        variant="light"
        color="gray"
        leftSection={<IconEye size={16} />}
        onClick={() => router.push("/hello-world")}
      >
        Try without Auth
      </Button>

      <Button
        variant="outline"
        color="grape"
        leftSection={<IconSettings size={16} />}
        onClick={() => router.push("/advanced/gpt/settings")}
      >
        Advanced Mode
      </Button>
    </Group>
  );
}
