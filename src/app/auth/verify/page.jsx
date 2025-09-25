"use client";

import Logo from "@/components/logo";
import OTPInput from "@/components/otp-input";
import logoIcon from "@/assets/logo.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

export default function VerifyPage() {
  const [otpValue, setOtpValue] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [collectMail, setCollectMail] = useState("");

  const handleOTPChange = (otp) => {
    setOtpValue(otp);
    console.log("Current OTP:", otp);
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem("verify_email");
    if (storedEmail) {
      setCollectMail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://apitest.softvencefsd.xyz/api/verify_otp",
        { otp: otpValue, email: collectMail }
      );
      if (result?.data?.data) {
        setLoading(false);
        toast.success(result?.data?.data?.message || "OTP Send successful!");
        router.push("/auth/new-password");
      }
    } catch (error) {
      setLoading(false);
      router.push("/auth/new-password");
      toast.error(
        error?.response?.data?.message ||
          "OTP Validate failed. Please try again."
      );
    }
  };
  const handleResend = async () => {
    try {
      if (collectMail?.length > 0) {
        const result = await axios.post(
          "https://apitest.softvencefsd.xyz/api/resend_otp",
          { email: collectMail }
        );
        console.log("result", result);
      }
    } catch (error) {
      return toast.error("Email not found!");
    }
  };
  console.log("collect email", collectMail);
  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] py-2 h-screen">
      <Logo src={logoIcon} />
      <div className=" flex flex-col justify-center h-[calc(100vh-84px)]">
        <div className="md:w-[480px] mx-auto pb-12 ">
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
            <button
              onClick={handleResend}
              className="text-primary font-semibold cursor-pointer"
            >
              Resend code
            </button>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
