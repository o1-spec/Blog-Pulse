import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PhoneDisplay() {
  return (
    <div className="bg-[rgb(238,238,238)]">
      <div className="max-w-[1100px] mx-auto pt-20 pb-16 px-1">
        <h2 className="text-center text-[44px] pb-6 font-semibold">
          A world-class reading, watching, and listening experience
        </h2>
        <div className="flex gap-6">
          <div className="flex flex-col gap-3 items-center basis-1/2">
            <Image
              src="/scissors_5.png"
              width="370"
              height="100"
              alt="Phone Image"
            />
            <Link
              href="/"
              className="text-lg bg-btnOrange text-white px-8 py-2 rounded-md border  border-btnOrange font-semibold"
            >
              Get Started
            </Link>
          </div>
          <div className="flex flex-col gap-32 pt-16">
            <div className="flex items-center gap-16">
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className="text-black"
              />
              <span className=" text-3xl">Community</span>
            </div>
            <div className="flex items-center gap-16">
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className="text-black"
              />
              <span className=" text-3xl">Blog Post</span>
            </div>
            <div className="flex items-center gap-16">
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className="text-black"
              />
              <span className=" text-3xl">Resources</span>
            </div>
            <div className="flex items-center gap-16">
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className="text-black"
              />
              <span className=" text-3xl">Categories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneDisplay;
