import { requireAuth } from "@/lib/auth-utils";
import React from "react";

type Props = {
  params: Promise<{ executionId: string }>;
};

export default async function page({ params }: Props) {
  await requireAuth();
  const { executionId } = await params;
  return <div>executions: {executionId}</div>;
}
