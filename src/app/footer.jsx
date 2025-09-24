import coverImage from "@/assets/footer-musk.png";
import Logo from "./components/logo";
import logoImage from "@/assets/footer-logo.png";
import Image from "next/image";
import appleIcon from "../assets/apple.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import Link from "next/link";

export default function Footer() {
  const StoreCard = () => {
    return (
      <div className="flex items-center gap-2 p-2 border border-[#347C30] rounded cursor-pointer">
        <div className="">
          <Image src={appleIcon} alt="apple-store" className="w-full h-full" />
        </div>
        <div className="text-white">
          <h4 className="text-[10px]">Download on the</h4>
          <h2 className="text-[21px] font-medium">App Store</h2>
        </div>
      </div>
    );
  };

  return (
    <section
      style={{
        backgroundImage: `url(${coverImage.src})`,
      }}
      className="bg-[#0F3B34] lg:h-[378px] bg-no-repeat bg-cover bg-center "
    >
      <div className=" w-full h-full custom-container  ">
        <div className="flex flex-col md:flex-row items-center justify-between py-[6.5rem] ">
          <div>
            <Logo src={logoImage} />
          </div>
          <div>
            <p className="lg:w-[404px] text-[#CFD8D6]">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </div>
          <div className="flex items-center gap-5 lg:w-[386px]">
            <StoreCard />
            <StoreCard />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#">
            <Image
              src={youtube}
              alt="youtube"
              width={22}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <Link href="#">
            <Image
              src={twitter}
              alt="youtube"
              width={22}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <Link href="#">
            <Image
              src={facebook}
              alt="youtube"
              width={22}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <Link href="#">
            <Image
              src={insta}
              alt="youtube"
              width={22}
              height={20}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <hr className="w-full h-[1px] border-[#D7DAE0]/60 my-3" />
        <p className="text-sm text-[#E5E5E5]/60">
          © 2021-2025, ScapeSync. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
