import { AppHeader } from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <AppHeader />
      <main className=" flex-1">{children}</main>
    </>
  );
}
