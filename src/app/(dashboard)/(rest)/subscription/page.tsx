"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";

type Props = {};

export default function page({}: Props) {
  const trpc = useTRPC();
  const testAI = useMutation(
    trpc.testAI.mutationOptions({
      onSuccess: () => {
        toast.success("Subscription workflow created successfully!");
      },
      onError: (error) => {
        toast.error(`Error creating subscription workflow: ${error.message}`);
      },
    })
  );
  return (
    <div>
      <Button onClick={() => testAI.mutate()}>
        Click to test Subscription
      </Button>
    </div>
  );
}
