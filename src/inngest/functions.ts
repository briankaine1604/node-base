import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("fetching vid", "10s");
    await step.sleep("transcribing", "10s");
    await step.sleep(" analyzing", "10s");
    await step.run("finalizing", async () => {
      return prisma.workflow.create({
        data: {
          name: "New Workflow",
        },
      });
    });
  }
);
