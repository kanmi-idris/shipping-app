import AuthForm from "@/components/modules/AuthForm";

export default function Home() {
  return (
    <AuthForm
      heading="Login"
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
  );
}
