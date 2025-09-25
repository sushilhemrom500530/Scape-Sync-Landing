"use client";

import Logo from "@/app/components/logo";
import OTPInput from "@/app/components/otp-input";
import logoIcon from "@/assets/logo.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function VerifyPage() {
  const [otpValue, setOtpValue] = useState("");
  const router = useRouter();

  const handleOTPChange = (otp) => {
    setOtpValue(otp);
    console.log("Current OTP:", otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted OTP:", otpValue);
    // You can send otpValue to your API here
  };
  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] py-2 h-screen">
      <Logo src={logoIcon} />
      <div className=" flex flex-col justify-center h-[calc(100vh-84px)]">
        <div className="lg:w-[480px] mx-auto ">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#3BA334] px-3 py-1 text-sm font-bold rounded-lg cursor-pointer mb-6"
          >
            <FaChevronLeft />
            Back
          </button>
          <div className="mb-10">
            <h1 className="text-xl md:text-2xl font-bold">
              Please check your email!
            </h1>
            <p className="text-base text-[#637381] mt-2">
              We've emailed a 6-digit confirmation code to acb@domain, please
              enter the code in below box to verify your email.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <OTPInput length={6} onChangeOTP={handleOTPChange} />

            <button type="submit" className="auth-btn-shadow btn w-full my-6">
              Verify
            </button>
          </form>
          <p className="text-sm text-center">
            Don’t have a code?{" "}
            <button className="text-primary font-semibold">Resend code</button>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
