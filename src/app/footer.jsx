import coverImage from "@/assets/footer-musk.png";
import Logo from "./components/logo";
import logoImage from "@/assets/footer-logo.png";
import Image from "next/image";
import appleIcon from "../assets/apple.png";
import playstore from "../assets/playstore.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import Link from "next/link";

export default function Footer() {
  const StoreCard = ({ title = "Google Play", src = "" }) => {
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
  };

  return (
    <section
      style={{
        backgroundImage: `url(${coverImage.src})`,
      }}
      className="bg-[#0F3B34] h-auto pb-6 lg:h-[378px] bg-no-repeat bg-cover bg-center "
    >
      <div className=" w-full h-full custom-container  ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12 py-[6.4rem] ">
          <div>
            <Logo src={logoImage} />
          </div>
          <div>
            <p className="md:w-[404px] text-[#CFD8D6] text-center lg:text-start">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </div>
          <div className="flex items-center  flex-col md:flex-row gap-5 w-max">
            <StoreCard title="App Store" src={appleIcon} />
            <StoreCard title="Google Play" src={playstore} />
          </div>
        </div>
        <div className="flex items-center gap-6 mb-6">
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
