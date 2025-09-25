import Image from "next/image";

export default function StoreCard({
  title = "Google Play",
  src = "",
  textStyle = "text-white",
}) {
  return (
    <div className="flex items-center gap-2 px-[14px] py-[10px] border border-[#347C30] rounded cursor-pointer w-[190px] md:w-max">
      <div className="">
        <Image src={src} alt="apple-store" className="w-full h-full" />
      </div>
      <div className={`${textStyle}`}>
        <h4 className="text-[10px]">Download on the</h4>
        <h2 className="text-[22px] font-medium">{title}</h2>
      </div>
    </div>
  );
}
