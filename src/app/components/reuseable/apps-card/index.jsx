import Image from "next/image";

export default function StoreCard({ title = "Google Play", src = "" }) {
  return (
    <div className="flex items-center gap-2 p-2 border border-[#347C30] rounded cursor-pointer w-max">
      <div className="">
        <Image src={src} alt="apple-store" className="w-full h-full" />
      </div>
      <div className="text-white">
        <h4 className="text-[10px]">Download on the</h4>
        <h2 className="text-[22px] font-medium">{title}</h2>
      </div>
    </div>
  );
}
