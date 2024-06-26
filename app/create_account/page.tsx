"use client";
import AuthForm from "@/components/modules/AuthForm";
import { QueryClient } from "@tanstack/react-query";

const CreateAccount = () => {
  const queryClient = new QueryClient();

  return (
    <AuthForm
      heading="create account"
      subHeading="Sign up for a new account."
      fields={[
        {
          id: "name",
          label: "Name",
          type: "text",
          placeholder: "Enter your name",
        },
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
      buttonText="Create Account"
      otherActionText="Login"
      linkText="Already have an account?"
      linkHref="/"
    />
  );
};

export default CreateAccount;
