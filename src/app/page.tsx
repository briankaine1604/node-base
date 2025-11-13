"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const createworkflow = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflow.queryOptions());
      },
    })
  );
  const { data } = useQuery(trpc.getWorkflow.queryOptions());
  return (
    <div className="flex flex-col max-w-sm">
      protected page
      <Button
        onClick={() => createworkflow.mutate()}
        disabled={createworkflow.isPending}
      >
        create workflow
      </Button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
