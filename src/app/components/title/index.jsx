import React from "react";

export default function Title({
  title = "",
  description = "",
  className = "text-center",
  titleStyle = "text-2xl md:text-5xl font-bold mb-[6px] text-[#212B36] ",
  descriptionStyle = "",
}) {
  return (
    <div className={className}>
      <h2 className={`${titleStyle}`}>{title}</h2>
      <p className={`text-[#637381] text-sm ${descriptionStyle}`}>
        {description}
      </p>
    </div>
  );
}
