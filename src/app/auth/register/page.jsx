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
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
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
        "https://apitest.softvencefsd.xyz/api/register",
        data
      );
      console.log("result", result);
      if (result?.data?.data) {
        setLoading(false);
        toast.success("Registration successful!");
        router.push("/auth/login");
      }
    } catch (error) {
      setLoading(false);
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
          <h1 className="text-xl md:text-2xl font-bold">Create your Account</h1>
          <p className="text-base text-[#637381] mt-2">
            When sports Meets smart Tech.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-12">
          <div className="grid grid-cols-2 gap-4">
            <FloatingLabelInput
              name="first_name"
              control={control}
              rules={{ required: "First Name is required" }}
              placeholder="First Name"
              onChange={setValue}
            />
            <FloatingLabelInput
              name="last_name"
              control={control}
              rules={{ required: "Last Name is required" }}
              placeholder="Last name"
              onChange={setValue}
            />
          </div>
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
          <FloatingLabelInput
            name="password_confirmation"
            type="password"
            control={control}
            rules={{
              required: "Confirm password is required",
              validate: (value) =>
                value === control._formValues.password ||
                "Passwords do not match",
            }}
            placeholder="Confirm Password"
            onChange={setValue}
          />

          <div>
            <Checkbox
              control={control}
              name="terms"
              content={
                <p className="text-sm pl-3 text-[#212B36]">
                  I agree to Tech Takes{" "}
                  <Link href="#">
                    <span className="border-b border-b-[#212B36]/40">
                      Terms of Service
                    </span>
                  </Link>{" "}
                  and{" "}
                  <Link href="#">
                    {" "}
                    <span className="border-b border-b-[#212B36]/40">
                      Privacy Policy
                    </span>
                  </Link>
                  .
                </p>
              }
              colorClass=" border-[#919EAB52] checked:border-[#3BA334] checked:bg-[#3BA334] "
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`${
              loading ? "!cursor-not-allowed" : "cursor-pointer"
            } auth-btn-shadow btn w-full flex items-center justify-center gap-2`}
          >
            {loading ? "Creating Account..." : "Create Account"}
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
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
