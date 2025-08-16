import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import LoginForm from "./form";

export function FormContainer({
  className,
  title,
  type,
  ...props
}: {
  title: string;
  type: "login" | "register";
} & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <Image
          alt="butterauth logo"
          src="/butter3.png"
          width={180}
          height={80}
          className="mx-auto"
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {type === "login"
              ? "Enter your email below to login to your account"
              : "Enter your email below to create a new account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm type={type} />
        </CardContent>
      </Card>
    </div>
  );
}
