"use client";
import { AuthFormProps } from "@/app/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const AuthForm = ({
  heading,
  subHeading,
  fields,
  buttonText,
  linkText,
  linkHref,
  otherActionText,
}: AuthFormProps) => {
  const { login, createAccount, error, mutating } = useAuth();
  const initialState = fields.reduce((state, field) => {
    return { ...state, [field.id]: "" };
  }, {});

  const [formInput, setFormInput] = useState<AuthFormProps>(
    initialState as AuthFormProps
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (heading === "login") {
      login(formInput);
    } else {
      createAccount(formInput);
    }
  };

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormInput((prevState: any) => ({ ...prevState, [id]: value.trim() }));
  };

  return (
    <main className="flex items-center justify-center h-screen bg-black ">
      <Card className="w-[20rem] bg-[#32312C] text-white border-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{heading}</CardTitle>
          <CardDescription className="text-[#A9A69A]">
            {subHeading}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full gap-4">
              {fields.map(({ id, label, type, placeholder }) => (
                <div key={id} className="flex flex-col space-y-1.5">
                  <Label htmlFor={id} className="text-gray-300 ">
                    {label}
                  </Label>
                  <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className="bg-gray-900 text-white placeholder-gray-500 border-none text-xs"
                  />
                </div>
              ))}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-y-4">
          <p className="text-red-600 text-xs font-medium">{error}</p>
          <Button
            className="bg-[#cbb55d] hover:bg-gray-500 w-full"
            onClick={handleSubmit}
          >
            {mutating ? (
              <Image
                src="/loadingSpinner.svg"
                alt="loading spinner"
                width={25}
                height={25}
              />
            ) : (
              buttonText
            )}
          </Button>
          <div className="flex items-center justify-center flex-col">
            <span className="text-gray-300 text-sm text-center">
              {linkText}
            </span>
            <Link
              href={linkHref}
              className="font-semibold text-sm underline underline-offset-2 text-[#A9A69A] ms-1 hover:text-gray-500"
            >
              {otherActionText}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default AuthForm;
