"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import arrowIcon from "@/assets/title-arrow.png";

export default function Title({
  title = "",
  description = "",
  className = "text-center",
  titleStyle = "text-2xl md:text-5xl font-bold mb-[6px] text-[#212B36]",
  descriptionStyle = "",
  arrowShow = false,
}) {
  return (
    <motion.div
      className={`${className} relative`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className={titleStyle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {arrowShow && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-5 md:top-11 lg:left-1/2 lg:-translate-x-5 top-7 lg:top-11"
        >
          <Image src={arrowIcon} alt="title-vector" height={0} width={0} />
        </motion.div>
      )}

      <motion.p
        className={`text-[#637381] text-sm ${descriptionStyle}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
