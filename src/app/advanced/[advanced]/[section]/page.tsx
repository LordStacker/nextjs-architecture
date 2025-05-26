"use client"; 

import { useParams } from "next/navigation";
import { Title, Text, Card } from "@mantine/core";

export default function AdvancedDynamicSectionPage() {
  const { advanced, section } = useParams();

  return (
    <Card shadow="md" padding="xl" radius="md" withBorder mt="xl">
      <Title order={2}>
         {section?.toString().toUpperCase()} – {advanced}
      </Title>
      <Text mt="md">
        This is the <strong>{section}</strong> section of the <strong>{advanced}</strong> workflow.
      </Text>
    </Card>
  );
}
