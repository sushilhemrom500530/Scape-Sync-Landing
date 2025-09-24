import Image from "next/image";

export default function Logo({ className = "", src = "" }) {
  return (
    <div className="w-[207px] h-[76px]">
      <Image src={src} alt="logo" className="w-full h-full" />
    </div>
  );
}
