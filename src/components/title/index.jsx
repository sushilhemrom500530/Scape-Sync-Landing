import Image from "next/image";
import arrowIcon from "@/assets/title-arrow.png";

export default function Title({
  title = "",
  description = "",
  className = "text-center",
  titleStyle = "text-2xl md:text-5xl font-bold mb-[6px] text-[#212B36] ",
  descriptionStyle = "",
  arrowShow = false,
}) {
  return (
    <div className={`${className} relative`}>
      <h2 className={`${titleStyle}`}>{title}</h2>
      {arrowShow && (
        <Image
          src={arrowIcon}
          alt="title-vactor"
          className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-5 md:top-11 lg:left-1/2 lg:-translate-x-5 top-7 lg:top-11 "
          height={0}
          width={0}
        />
      )}
      <p className={`text-[#637381] text-sm ${descriptionStyle}`}>
        {description}
      </p>
    </div>
  );
}
