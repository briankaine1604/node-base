import { requireAuth } from "@/lib/auth-utils";
import React from "react";

type Props = {
  params: Promise<{ credentialId: string }>;
};

export default async function page({ params }: Props) {
  await requireAuth();
  const { credentialId } = await params;
  return <div>credentials: {credentialId}</div>;
}
