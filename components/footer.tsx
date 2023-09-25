import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Sankalp. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.{" "}
        <a className="text-xs mt-2 leading-relaxed underline text-gray-700 dark:text-white/70" href="https://github.com/sankalp-12/Personal-Portfolio" target="_blank">View on GitHub.</a>
      </p>
    </footer>
  );
}
