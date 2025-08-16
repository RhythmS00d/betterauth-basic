import { FormContainer } from "@/components/login-register/container";

export default function Page() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <FormContainer title="Register to the account" type="register"/>
      </div>
    </section>
  );
}
