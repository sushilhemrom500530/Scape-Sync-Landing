import React from "react";

export default function Title({
  title = "",
  className = "text-center",
  titleStyle = "text-2xl md:text-5xl font-bold mb-[6px] text-[#212B36] ",
  descriptionStyle = "",
}) {
  return (
    <div className={className}>
      <h2 className={`${titleStyle}`}>Frequently Asked Questions</h2>
      <p className={`text-[#637381] text-sm ${descriptionStyle}`}>
        Quick answers to help you get the most out of our app.
      </p>
    </div>
  );
}
