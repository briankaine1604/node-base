import React from "react";

type Props = {
  params: Promise<{ executionId: string }>;
};

export default async function page({ params }: Props) {
  const { executionId } = await params;
  return <div>executions: {executionId}</div>;
}
