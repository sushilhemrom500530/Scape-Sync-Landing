"use client";

import { useState, useRef } from "react";

export default function OTPInput({ length = 6, onChangeOTP }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return; // allow only 0-9

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChangeOTP?.(newOtp.join(""));

    // Move focus
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 text-center border border-[#919EAB52] rounded focus:outline-none text-[#212B36] text-base"
        />
      ))}
    </div>
  );
}
