import AuthForm from "@/components/modules/AuthForm";

const CreateAccount = () => {
  return (
    <AuthForm
      heading="Create Account"
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
        {
          id: "confirmPassword",
          label: "Confirm Password",
          type: "password",
          placeholder: "Confirm your password",
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
