import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GoRocket } from "react-icons/go";
import urlShortener from "@/public/urlshortener.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experiences",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend Developer Intern @ Zocket",
    location: "Bengaluru, IN",
    description:
      "I worked as a backend developer for 3 months at a GenAI startup. I worked with Go, Docker, Postman, Swagger, AWS, GitLab to design a microservices-based application.",
    icon: React.createElement(GoRocket),
    date: "Mar 2023 - Jun 2023",
  },
  {
    title: "CS Undergrad @ IIT Bhilai",
    location: "Durg, IN",
    description:
      "Currently a senior year CS undergrad at IIT Bhilai. I have taken courses on Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Cryptography, Distributed Systems, Network Science, etc.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2020 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "URL Shortener",
    description:
      "Currently working on a URL shortener solution to eliminate the hassle of copying & pasting URLs & providing analytics.",
    tags: ["React", "Next.js", "Redis", "Tailwind", "Go", "Apache JMeter", "Prometheus", "Grafana"],
    imageUrl: urlShortener,
    projectUrl: "https://github.com/sankalp-12/URL-Shortener",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Bash",
  "SQL",
  "Redis",
  "C++",
  "Go",
  "REST-APIs",
  "Docker",
  "Kubernetes",
  "Postman",
  "Swagger",
  "Prometheus",
  "Grafana",
  "AWS"
] as const;
