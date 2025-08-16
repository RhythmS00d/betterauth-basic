"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { inputParser } from "@/lib/inputParser";
import { useRouter } from "next/navigation";

export default function LoginForm({ type }: { type: "login" | "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = inputParser({
      type: "login",
      paramaters: { email: email, password: password },
    });
    if (result !== "success") return;

    await authClient.signIn.email(
      {
        email: email,
        password: password,
      },
      {
        onSuccess: (ctx) => {
          toast.success("Login successful!");
          router.push("/dashboard");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Login failed");
        },
      }
    );
  };

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    const result = inputParser({
      type: "register",
      paramaters: { email: email, password: password, name: name },
    });
    if (result !== "success") return;

    await authClient.signUp.email(
      {
        name: name,
        email: email,
        password: password,
      },
      {
        onSuccess: (ctx) => {
          toast.success("Registration successful!");
          router.push("/dashboard");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Registration failed");
        },
      }
    );
  }

  return (
    <form onSubmit={type === "login" ? handleLogin : handleRegister}>
      <div className="flex flex-col gap-6">
        {type === "register" && (
          <>
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="John Dough"
                required
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </>
        )}
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            {type === "login" && (
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            )}
          </div>
          <Input
            id="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button type="submit" className="w-full cursor-pointer">
            {type === "login" ? "Login" : "Register"}
          </Button>
        </div>
      </div>
      {type === "login" ? (
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      ) : (
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      )}
    </form>
  );
}
