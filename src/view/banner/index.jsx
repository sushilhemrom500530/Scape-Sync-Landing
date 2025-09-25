import appleIcon from "@/assets/light-apple.png";
import playstore from "@/assets/light-playstore.png";
import shapIcon from "@/assets/title-vector.png";
import projectFrame from "@/assets/project-frame.png";
import titleArrow from "@/assets/title-vctor.svg";
import Image from "next/image";
import StoreCard from "@/components/reuseable/apps-card";
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <div className="p-4">
      {/* left shadow box  */}
      <div
        className="w-[290px] h-[330px] lg:w-[560px] lg:h-[630px] rotate-[33.681deg] flex-shrink-0 
            rounded-[630.073px] bg-[rgba(157,255,153,0.2)] blur-[150px] -left-28 absolute lg:-left-72 top-5 lg:top-10"
      ></div>
      <div
        className="w-[235px] h-[310px] lg:w-[560px] lg:h-[630px] rotate-[33.681deg] flex-shrink-0 
            rounded-[630.073px] bg-[rgba(157,255,153,0.1)] blur-[150px] absolute right-0 lg:right-28 lg:top-20 hidden lg:block"
      ></div>

      <div className="container mx-auto lg:px-[80px] xl:px-[120px] mt-12">
        <div className="flex items-center flex-col lg:flex-row">
          <motion.div
            className="lg:w-[655px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src={shapIcon}
                alt="title-vactor"
                className="absolute left-1/2 -translate-x-1/2 -top-16"
                height={0}
                width={0}
              />
              <motion.h1
                className="text-3xl md:text-5xl lg:text-[84px] font-bold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                All Your Jobs One Smart App
              </motion.h1>
              <Image
                src={titleArrow}
                alt="title-vactor"
                className="absolute lg:left-1/2 lg:-translate-x-1/3 -bottom-3 hidden lg:block"
                height={0}
                width={0}
              />
            </div>

            <motion.p
              className="text-base text-[#637381] mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Built for business owners, employees, and clients streamline job
              scheduling, service tracking, and team management in one powerful
              app.
            </motion.p>

            <motion.div
              className="flex items-center flex-col md:flex-row gap-5 w-max mt-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <StoreCard
                title="App Store"
                src={appleIcon}
                textStyle="text-black"
              />
              <StoreCard
                title="Google Play"
                src={playstore}
                textStyle="text-black"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={projectFrame}
              alt="title-vactor"
              className="w-full h-full"
              height={0}
              width={0}
            />
            <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
