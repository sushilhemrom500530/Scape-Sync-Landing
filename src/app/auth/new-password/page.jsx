"use client";
import logoIcon from "@/assets/logo.svg";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import FloatingLabelInput from "@/components/reuseable/input";
import { FaChevronLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function NewPasswordPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = {
      ...data,
      token: "pgHUpTTvTuLJHwRfaAORKBECNeKg1dbctPyYSBQs",
    };
    try {
      const result = await axios.post(
        "https://apitest.softvencefsd.xyz/api/reset-password",
        formData
      );
      console.log("result", result);
      if (result?.data?.data) {
        setLoading(false);
        toast.success("Password Changed successful!");
        router.push("/auth/password-changed");
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message ||
          "Password Changed failed. Please try again."
      );
    }
  };
  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] py-2 ">
      <Logo src={logoIcon} />

      <div className="md:w-[480px] mx-auto my-20 ">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#3BA334] px-3 py-1 text-sm font-bold rounded-lg cursor-pointer "
        >
          <FaChevronLeft />
          Back
        </button>
        <h1 className="text-xl md:text-[32px] font-bold text-[#212B36] mb-4 mt-6">
          Enter your new password
        </h1>
        <p className="text-base text-[#637381]">
          Please enter the email address associated with your account, and we'll
          email you a link to reset your password.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 mb-12 mt-10"
        >
          <FloatingLabelInput
            name="password"
            type="password"
            control={control}
            rules={{ required: "Password is required" }}
            placeholder="New Password"
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
          <button
            disabled={loading}
            type="submit"
            className={`${
              loading ? "!cursor-not-allowed" : "cursor-pointer"
            } auth-btn-shadow btn w-full flex items-center justify-center gap-2`}
          >
            {loading ? "Processing..." : " Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
