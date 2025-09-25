import Accordion from "@/components/accordion";
import Title from "@/components/title";
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
    <div className="relative overflow-hidden mt-[85px]">
      {/* left shadow box  */}
      <div
        className="absolute lg:left-[-250px] lg:top-0 -top-20 w-[250px] h-[362px] lg:w-[505px] lg:h-[732px] rotate-[19.594deg] flex-shrink-0 
    rounded-[732.903px] bg-[rgba(155,255,150,0.1)]  blur-[150px]"
      ></div>
      {/* right shadow box  */}
      <div className=" absolute lg:bottom-0 w-[250px] h-[362px] right-0 -bottom-20 lg:right-[-250px] lg:w-[505px] lg:h-[732.903px] rotate-[19.594deg] flex-shrink-0 rounded-[732.903px] bg-[rgba(155,255,150,0.1)] blur-[150px]  "></div>

      <div className="w-[90%] lg:w-[996px] mx-auto ">
        <Title
          title="Frequently Asked Questions"
          description=" Quick answers to help you get the most out of our app."
        />
        <Accordion questions={advertisersQuestions} />
      </div>
    </div>
  );
}
