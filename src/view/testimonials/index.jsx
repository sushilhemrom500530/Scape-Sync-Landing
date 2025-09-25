import React from "react";
import testimonialCover from "@/assets/test-cover.png";
import user1 from "@/assets/Ellipse 452.svg";
import user2 from "@/assets/Ellipse 452 (1).svg";
import user3 from "@/assets/Ellipse 452 (2).svg";
import Image from "next/image";
import Title from "@/components/title";

export default function Testimonials() {
  const userData = [
    {
      thumbnail: user1,
      name: "Farzana H.",
      role: "Owner, CleanPro Services",
      description:
        "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    },
    {
      thumbnail: user2,
      name: "Ahmed R.",
      role: "Technician",
      description:
        "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    },
    {
      thumbnail: user3,
      name: "Farzana H.",
      role: "Rafiq M., Homeowner",
      description:
        "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${testimonialCover.src})`,
        }}
        className="custom-container bg-no-repeat bg-cover bg-center"
      >
        <Title
          title="What Our Users Are Saying"
          description="Real stories from clients, employees, and business owners who use our app every day."
          descriptionStyle="w-full md:w-[455px] mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[60px] mb-[85px]">
          {userData?.map((user, idx) => (
            <div
              key={idx}
              className="max-w-sm p-6 rounded-[22px] bg-white shadow-[0_16px_32px_-4px_rgba(146,171,145,0.1)] flex flex-col gap-6"
            >
              {/* User Info */}
              <div className="flex items-center gap-3">
                <Image
                  src={user?.thumbnail}
                  alt="Farzana H."
                  width={48}
                  height={48}
                />
                <div className="flex flex-col">
                  <span className="font-medium text-base text-[#212B36]">
                    {user?.name}
                  </span>
                  <span className="text-sm text-[#637381]">{user?.role}</span>
                </div>
              </div>

              {/* Testimonial */}
              <p className="text-[#637381] text-base">{user?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
