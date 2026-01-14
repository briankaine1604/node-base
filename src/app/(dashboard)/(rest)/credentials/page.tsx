import { requireAuth } from "@/lib/auth-utils";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  await requireAuth();
  return (
    <div>
      credentials
      <div></div>
    </div>
  );
}
