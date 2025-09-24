import Accordion from "@/app/components/accordion";
import Title from "@/app/components/title";
import React from "react";

export default function FrequentlyAsk() {
  const advertisersQuestions = [
    {
      title: "Is the app free to use?",
      content:
        "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
    {
      title: "Can I assign multiple employees to one job?",
      content:
        "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
    {
      title: "Does it work on both mobile and desktop?",
      content:
        "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
    {
      title: " Is GPS tracking always on?",
      content:
        "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
    },
  ];
  return (
    <div className="relative overflow-hidden">
      {/* left shadow box  */}
      <div
        className="absolute left-[-250px] top-0
    w-[505.61px] 
    h-[732.903px] 
    rotate-[19.594deg] 
    flex-shrink-0 
    rounded-[732.903px] 
    bg-[rgba(155,255,150,0.1)] 
    blur-[150px]
  "
      ></div>
      {/* right shadow box  */}
      <div
        className="
        absolute bottom-0 right-[-250px]
    w-[505.61px] 
    h-[732.903px] 
    rotate-[19.594deg] 
    flex-shrink-0 
    rounded-[732.903px] 
    bg-[rgba(155,255,150,0.1)] 
    blur-[150px]
  "
      ></div>
      <div className="w-[90%] lg:w-[996px] mx-auto ">
        <Title />
        <Accordion questions={advertisersQuestions} />
      </div>
    </div>
  );
}
