import React from "react";

type Props = {
  params: Promise<{ workflowId: string }>;
};

export default async function page({ params }: Props) {
  const { workflowId } = await params;
  return <div>workflows: {workflowId}</div>;
}
