import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "", src = "" }) {
  return (
    <Link href="/">
      <div className="w-[150px] md:w-[207px] h-[76px]">
        <Image src={src} alt="logo" className="w-full h-full" />
      </div>
    </Link>
  );
}
