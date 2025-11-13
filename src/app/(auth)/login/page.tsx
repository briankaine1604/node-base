import React from "react";
import { LoginForm } from "./(components)/login-form";
import { isAuthenticated } from "@/lib/auth-utils";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const page = async (props: Props) => {
  await isAuthenticated();
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default page;
