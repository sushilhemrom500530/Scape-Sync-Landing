"use client";
import Logo from "@/app/components/logo";
import React from "react";
import logoIcon from "@/assets/logo.svg";
import { useForm } from "react-hook-form";
import BorderFloatingInput from "@/app/components/reuseable/input";
import FloatingLabelInput from "@/app/components/reuseable/input";

export default function RegisterPage() {
  const {
    handleSubmit,
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] py-2 ">
      <Logo src={logoIcon} />

      <div className="lg:w-[480px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            rules={{ required: "Password is required" }}
            placeholder="Confirm Password"
            onChange={setValue}
          />
          <div>
            <p className="text-sm text-[#212B36]">
              I agree to Tech Takes{" "}
              <span className="border-b border-b-[#212B36]/40">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="border-b border-b-[#212B36]/40">
                Privacy Policy
              </span>
              .
            </p>
          </div>
          <button type="submit" className="auth-btn-shadow btn w-full">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
