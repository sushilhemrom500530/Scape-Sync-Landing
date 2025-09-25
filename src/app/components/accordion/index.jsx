"use client";
import { useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";

function Accordion({ questions }) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const contentRefs = useRef([]);
  console.log(activeAccordion);

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full mt-[60px] mb-[80px]">
      {questions.map((item, index) => (
        <div
          key={index}
          className="p-6 mb-4 rounded-md cursor-pointer bg-inherit border border-[#C7E6C5] "
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-base font-medium text-[#212B36]">
              {item?.title}
            </h4>
            <span>
              {activeAccordion === index ? (
                <HiMinus size={16} className="text-[#212B36]" />
              ) : (
                <GoPlus size={16} className="text-[#212B36]" />
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out w-[95%] mx-auto`}
            style={{
              maxHeight:
                activeAccordion === index
                  ? `${contentRefs.current[index]?.scrollHeight}px `
                  : "0px",
            }}
            ref={(el) => (contentRefs.current[index] = el)}
          >
            <p className="text-sm text-[#637381] !mt-6">{item?.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
