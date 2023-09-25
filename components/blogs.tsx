"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
    const { ref } = useSectionInView("Blogs");

  return (
    <motion.section
      id="blogs"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Blogs</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        I consistently write blogs that about my past experiences, as well as deep technical dives into various projects {" "}
        I'm currently working on and various technologies I'm exploring. <span className='font-semibold'>Currently down!</span>
      </p>
    </motion.section>
  )
}
