"use client";

import coverImage from "@/assets/footer-musk.png";
import Logo from "@/components/logo";
import logoImage from "@/assets/footer-logo.png";
import Image from "next/image";
import appleIcon from "@/assets/apple.png";
import playstore from "@/assets/playstore.png";
import youtube from "@/assets/youtube.png";
import twitter from "@/assets/twitter.png";
import facebook from "@/assets/facebook.png";
import insta from "@/assets/instagram.png";
import Link from "next/link";
import StoreCard from "@/components/reuseable/apps-card";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section
      style={{
        backgroundImage: `url(${coverImage.src})`,
      }}
      className="bg-[#0F3B34] h-auto pb-6 lg:h-[378px] bg-no-repeat bg-cover bg-center mt-[80px]"
    >
      <motion.div
        className="w-full h-full custom-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12 py-[6.4rem]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Logo src={logoImage} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="md:w-[404px] text-[#CFD8D6] text-center lg:text-start">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center flex-col md:flex-row gap-5 w-max"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StoreCard title="App Store" src={appleIcon} />
            <StoreCard title="Google Play" src={playstore} />
          </motion.div>
        </div>

        <motion.div
          className="flex items-center gap-6 mb-6 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[youtube, twitter, facebook, insta].map((icon, idx) => (
            <Link href="#" key={idx}>
              <Image
                src={icon}
                alt="social-icon"
                width={22}
                height={20}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </motion.div>

        <motion.hr
          className="w-full h-[1px] border-[#D7DAE0]/60 my-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-sm text-[#E5E5E5]/60 text-center lg:text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          © 2021-2025, ScapeSync. All Rights Reserved.
        </motion.p>
      </motion.div>
    </section>
  );
}
