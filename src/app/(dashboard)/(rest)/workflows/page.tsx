import { requireAuth } from "@/lib/auth-utils";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  await requireAuth();
  return (
    <div>
      workflows
      <div></div>
    </div>
  );
}
