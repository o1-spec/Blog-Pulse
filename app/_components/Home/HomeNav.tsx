'use client'
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { AuthContext } from "@/app/_context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

function HomeNav() {
  const { user } = useContext(AuthContext);
  return (
    <nav
      className={`text-white flex items-center justify-between px-4 max-w-[1100px] mx-auto py-4 ${poppins.className}`}
    >
      <h4 className="flex items-center">
        <Image
          src="/icon.png"
          width="29"
          height="29"
          alt="icon"
          className="rotate-45"
        />
        <span className="text-xl font-bold">BlogPulse</span>
      </h4>
      <ul className="flex items-center gap-8">
        <li>
          <Link className="text-md font-semibold" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-md font-semibold" href="/">
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="text-md font-semibold"
            href={`${!user ? "/sign-up" : "/blog"}`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-md font-semibold">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/" className="text-md font-semibold">
            Pricing
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-8">
        <Link href="/sign-up">Login</Link>
        <Link
          href="/sign-in"
          className="text-white rounded-md px-4 hover:bg-white hover:text-btnOrange duration-300 border border-btnOrange py-2 bg-btnOrange"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default HomeNav;
