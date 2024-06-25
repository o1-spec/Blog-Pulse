import {
  faEnvelope,
  faMailBulk,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mx-auto max-w-[1050px] border-t border-t-white pt-16 pb-12 px-1">
      <div className="flex gap-4">
        <div className="basis-[40%]">
          <h4 className="flex items-center pb-6">
            <Image
              src="/icon.png"
              width="29"
              height="29"
              alt="icon"
              className="rotate-45"
            />
            <span className="text-xl font-bold">BlogPulse</span>
          </h4>
          <p>Connecting Bloggers Worldwide</p>
          <div className="flex flex-col gap-2 pt-4">
            <Link href="/" className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                className=" text-btnOrange"
              />
              Gmail
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                size="1x"
                className="text-btnOrange"
              />
              Phone
            </Link>
          </div>
        </div>
        <div className="basis-[20%]">
          <h6 className="pb-5 font-semibold text-lg">Read</h6>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Discover</Link>
            </li>
            <li>
              <Link href="/">Featured</Link>
            </li>
            <li>
              <Link href="/">Top Sections</Link>
            </li>
            <li>
              <Link href="/">Top in technology</Link>
            </li>
            <li>
              <Link href="/">Top in finance</Link>
            </li>
            <li>
              <Link href="/">Top in sports</Link>
            </li>
            <li>
              <Link href="/">Top Categories</Link>
            </li>
            <li>
              <Link href="/">Get App</Link>
            </li>
          </ul>
        </div>
        <div className="basis-[20%]">
          <h6 className="pb-5 font-semibold text-lg">Writers</h6>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Get Started</Link>
            </li>
            <li>
              <Link href="/">Switch from Ghost</Link>
            </li>
            <li>
              <Link href="/">For bloggers</Link>
            </li>
            <li>
              <Link href="/">For podcasts</Link>
            </li>
            <li>
              <Link href="/">For local news</Link>
            </li>
            <li>
              <Link href="/">Go paid</Link>
            </li>
            <li>
              <Link href="/">For local news</Link>
            </li>
          </ul>
        </div>
        <div className="basis-[20%]">
          <h6 className="pb-5 font-semibold text-lg">Company</h6>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
            <li>
              <Link href="/">Jobs</Link>
            </li>
            <li>
              <Link href="/">Company</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="basis-[20%]">
          <h6 className="pb-5 font-semibold text-lg">Resources</h6>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Resource Center</Link>
            </li>
            <li>
              <Link href="/">Help Center</Link>
            </li>
            <li>
              <Link href="/">Brand assets</Link>
            </li>
            <li>
              <Link href="/">Guide to going paid</Link>
            </li>
            <li>
              <Link href="/">Community & programs</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="pt-10 underline">Copyright &copy; Onadokun Oluwafemi</p>
    </div>
  );
}

export default Footer;
