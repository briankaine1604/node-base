import { isAuthenticated } from "@/lib/auth-utils";
import { RegisterForm } from "./(components)/register-form";

type Props = {};

const page = async (props: Props) => {
  await isAuthenticated();
  return <RegisterForm />;
};

export default page;
