"use client";
import AuthForm from "@/components/modules/AuthForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthForm
        heading="login"
        subHeading="Sign in to your account."
        fields={[
          {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
          },
          {
            id: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
          },
        ]}
        buttonText="Login"
        otherActionText="Create account"
        linkText="Don't have an account?"
        linkHref="/create_account"
      />
    </QueryClientProvider>
  );
}
