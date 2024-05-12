"use client";
import { AuthContextState, AuthFormProps } from "@/app/types";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const BASE_URL = "http://13.49.20.202";
export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const defaultAuthContextState: AuthContextState = {
  authData: { id: 0, name: "" },
  error: "",
  login: async () => {},
  mutating: false,
  createAccount: async () => {},
};
const AuthContext = createContext<AuthContextState>(defaultAuthContextState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [authData, setAuthData] = useState(null);
  const [error, setError] = useState("");
  const [mutating, setMutating] = useState(false);

  const login = async (formData: AuthFormProps) => {
    console.log("logging");
    userLogin(formData);
  };

  const createAccount = async (formData: AuthFormProps) => {
    accountCreation(formData);
  };

  // User Login Mutation
  const { mutate: userLogin, isPending: loggingIn } = useMutation({
    mutationFn: (values: AuthFormProps) => {
      console.log(values);
      return client.post(`${BASE_URL}/login`, values);
    },
    onSuccess(data: AxiosResponse<any, any>) {
      console.log(data.data);
      setMutating(false);
      router.replace("/home");
      setAuthData(data.data);
    },
    onError(error: AxiosError<any, any>) {
      console.log(error);
      setMutating(false);
      setError(error.response?.data.message ?? error.message);
    },
  });
  console.log("authAuth", authData);

  // Account Creation Mutation
  const { mutate: accountCreation, isPending: creatingAccount } = useMutation({
    mutationFn: (values: AuthFormProps) => {
      console.log("values");
      return client.post(`${BASE_URL}/create_account`, values);
    },
    onSuccess(data: AxiosResponse<any, any>) {
      console.log(data);
      setMutating(false);

      router.replace("/home");
    },
    onError(error: AxiosError<any, any>) {
      console.log(error);
      setMutating(false);

      setError(error.response?.data.message ?? error.message);
    },
  });

  useEffect(() => {
    if (loggingIn || creatingAccount) {
      setMutating(true);
    }
  }, [loggingIn, creatingAccount]);

  return (
    <AuthContext.Provider
      value={{ authData, error, login, createAccount, mutating }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
