"use client";
import Logo from "@/components/logo";
import React, { useState } from "react";
import logoIcon from "@/assets/logo.svg";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import FloatingLabelInput from "@/components/reuseable/input";
import Checkbox from "@/components/reuseable/checkbox";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await axios.post(
        "https://apitest.softvencefsd.xyz/api/login",
        data
      );
      console.log("result", result);
      if (result?.data?.data) {
        setLoading(false);
        toast.success("Login successful!");
        router.push("/auth/create-success");
      }
    } catch (error) {
      setLoading(false);
      router.push("/auth/create-success");
      toast.error(
        error?.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] py-2 ">
      <Logo src={logoIcon} />

      <div className="lg:w-[480px] mx-auto mb-12 mt-10">
        <div className="text-center mb-16">
          <h1 className="text-xl md:text-2xl font-bold">
            Welcome to ScapeSync
          </h1>
          <p className="text-base text-[#637381] mt-2">
            Please share your login details so you can access the website.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-12">
          <FloatingLabelInput
            name="email"
            type="email"
            control={control}
            rules={{ required: "Email is required" }}
            placeholder="Email address"
            onChange={setValue}
          />
          <FloatingLabelInput
            name="password"
            type="password"
            control={control}
            rules={{ required: "Password is required" }}
            placeholder="Password"
            onChange={setValue}
          />

          <div className="flex items-center justify-between">
            <Checkbox
              control={control}
              name="remember_me"
              content={
                <p className="text-sm pl-3 text-[#212B36]">Remember Me</p>
              }
              colorClass=" border-[#919EAB52] checked:border-[#3BA334] checked:bg-[#3BA334] "
            />
            <Link href="/auth/reset-password">
              <span className="text-[#49AE44] font-semibold text-sm">
                Forgot password?
              </span>
            </Link>
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`${
              loading ? "!cursor-not-allowed" : "cursor-pointer"
            } auth-btn-shadow btn w-full flex items-center justify-center gap-2`}
          >
            {loading ? "Processing..." : "Login"}
          </button>
        </form>

        <div className="flex items-center w-full">
          <div className="flex-grow border-t border-[#919EAB52]"></div>
          <span className="px-3 text-[#637381] text-sm">OR</span>
          <div className="flex-grow border-t border-[#919EAB52]"></div>
        </div>
        <button className="flex items-center justify-center gap-4 border border-[#919EAB52] py-[11px] w-full rounded-lg mt-6 mb-8">
          <FcGoogle />
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-primary font-semibold">
            Get started
          </Link>
        </p>
      </div>
    </div>
  );
}
