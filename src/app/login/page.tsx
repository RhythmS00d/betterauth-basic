import { LoginContainer } from "@/components/login/login-container";

export default function Page() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginContainer />
      </div>
    </section>
  );
}
