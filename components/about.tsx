"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently a senior year undergrad at IIT Bhilai pursuing a degree in{" "}
        <span className="font-medium">Computer Science & Engineering. </span>
        I have a passion for problem-solving.{" "} My core stack is{" "} <span className="font-medium">
        React, Next.js, Go, and Redis, with familiarity in TypeScript and C++. </span> 
        I'm always looking to explore new technologies, especially in the domain of cloud 
        & distributed computing, being well versed with various cloud-native tools such as Prometheus, Grafana, etc.
        I am currently looking for a{" "} <span className="font-medium">full-time position </span>  
        as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games & watching sports. I am also keenly interested in{" "} learning about
        low-latency development and system-level programming in general.
      </p>
    </motion.section>
  );
}
