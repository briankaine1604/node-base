"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      }
    );
  }

  const isPending = form.formState.isSubmitting;

  return (
    <Card>
      <CardHeader>
        <CardTitle>WELCOME BACK !</CardTitle>
        <CardDescription>Login to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <Button
                variant={"outline"}
                className="w-full"
                type="button"
                disabled={isPending}
              >
                <Image
                  alt="Google"
                  width={20}
                  height={20}
                  src={"/google.svg"}
                />
                Continue with Google
              </Button>
              <Button
                variant={"outline"}
                className="w-full"
                type="button"
                disabled={isPending}
              >
                <Image
                  alt="Github"
                  width={20}
                  height={20}
                  src={"/github.svg"}
                />
                Continue with github
              </Button>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full">
                Submit
              </Button>
            </div>
            <div>
              Don&apos;t have an account?{" "}
              <Link href={"/signup"} className="underline underline-offset-4">
                Sign Up
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
