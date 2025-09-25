import Image from "next/image";
import Link from "next/link";
import React from "react";
import successImage from "@/assets/success.png";

export default function SuccessContent({
  title = "",
  description = "",
  url = "",
  buttonTitle = "",
  className = "md:w-[480px] mx-auto",
}) {
  return (
    <div>
      <div className={`${className} my-8 `}>
        <div className="flex items-center justify-center">
          <Image src={successImage} alt="success-image" height={0} width={0} />
        </div>
        <div className="mb-10">
          <h1 className="text-xl md:text-[32px] font-bold">{title}</h1>
          <p className="text-base text-[#637381] mt-2">{description}</p>
        </div>
        <Link href={url}>
          <button type="submit" className="auth-btn-shadow btn w-full">
            {buttonTitle}
          </button>
        </Link>
      </div>
    </div>
  );
}
