"use client";
import Logo from "@/app/components/logo";
import { FaChevronLeft } from "react-icons/fa6";
import logoIcon from "@/assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FloatingLabelInput from "@/app/components/reuseable/input";
import { useForm } from "react-hook-form";

export default function ResetPasswordPage() {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] py-2 ">
      <Logo src={logoIcon} />

      <div className="lg:w-[480px] mx-auto my-20 ">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#3BA334] px-3 py-1 text-sm font-bold rounded-lg cursor-pointer "
        >
          <FaChevronLeft />
          Back
        </button>
        <h1 className="text-xl md:text-[32px] font-bold text-[#212B36] mb-4 mt-6">
          Forgot your password?
        </h1>
        <p className="text-base text-[#637381]">
          Please enter the email address associated with your account, and we'll
          email you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-12">
          <FloatingLabelInput
            name="email"
            type="email"
            control={control}
            rules={{ required: "Email is required" }}
            placeholder="Email address"
            onChange={setValue}
          />

          <button type="submit" className="auth-btn-shadow btn w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
