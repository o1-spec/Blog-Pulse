"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import SignupForm from "@/app/_components/SignupForm";

function SignUp() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <div className="flex">
      <div className="basis-1/2 flex flex-col items-center justify-center gap-4 py-8">
        <div className="flex flex-col text-center gap-1 pb-4">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <span>Welcome to the Blog-pulse Community</span>
        </div>
        <SignupForm />
        <div className="flex items-center gap-1">
          <span className="text-[15px]">Already have an account?</span>
          <Link
            className="text-[16px] text-btnOrange underline"
            href="/sign-in"
          >
            Log in
          </Link>
        </div>
      </div>
      <div className="basis-1/2">
        {currentSlide === 0 && (
          <div className="fixed w-[50%] h-[100vh] bg-hero-bg-7 bg-cover shadow-signOverlay bg-center">
            <div className="pt-8 px-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="text-black text-xl bg-white px-3 py-3 rounded-[50%]"
                />
                <span className="text-[15px] text-white">
                  Largest Blog and News Space
                </span>
              </div>
              <div className="w-32 h-[1px] bg-bgIcon"></div>
            </div>
            <h1 className="text-white text-[66px] font-serif text-center pt-20">
              Blog Pulse
            </h1>
            <div className="pt-12">
              <div className="pl-6">
                <span className="text-white text-[72px]">&quot;</span>
                <p className="-translate-y-10 text-white text-2xl w-[400px]">
                  Blogging is the backbone of content marketing
                </p>
                <p className="text-white">01 ------ 03</p>
              </div>
            </div>
            <div className="text-white flex items-center gap-4 justify-end pr-16 -translate-y-5">
              <span
                onClick={handlePrevSlide}
                className="border border-white rounded-[50%] text-md px-2.5 pt-1.5 pb-2 cursor-pointer"
              >
                &larr;
              </span>
              <span
                onClick={handleNextSlide}
                className="border border-white rounded-[50%] text-md px-2.5 pt-1.5 pb-2 cursor-pointer"
              >
                &rarr;
              </span>
            </div>
          </div>
        )}
        {currentSlide === 1 && (
          <div className="fixed w-[50%] h-[100vh] bg-hero-bg-2 bg-cover shadow-signOverlay bg-center">
            <div className="pt-8 px-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="text-black text-xl bg-white px-3 py-3 rounded-[50%]"
                />
                <span className="text-[15px] text-white">
                  Largest Blog and News Space
                </span>
              </div>
              <div className="w-32 h-[1px] bg-bgIcon"></div>
            </div>
            <h1 className="text-white text-[66px] font-serif text-center pt-20">
              Stay Updated
            </h1>
            <div className="pt-12">
              <div className="pl-6">
                <span className="text-white text-[72px]">&quot;</span>
                <p className="-translate-y-10 text-white text-2xl w-[400px]">
                  Latest news and articles at your fingertips
                </p>
                <p className="text-white">02 ------ 03</p>
              </div>
            </div>
            <div className="text-white flex items-center gap-4 justify-end pr-16 -translate-y-5">
              <span
                onClick={handlePrevSlide}
                className="border border-white rounded-[50%] text-md px-2.5 pt-1.5 pb-2 cursor-pointer"
              >
                &larr;
              </span>
              <span
                onClick={handleNextSlide}
                className="border border-white rounded-[50%] text-md px-2.5 pt-1.5 pb-2 cursor-pointer"
              >
                &rarr;
              </span>
            </div>
          </div>
        )}
        {currentSlide === 2 && (
          <div className="fixed w-[50%] h-[100vh] bg-hero-bg-3 bg-cover shadow-signOverlay bg-center">
            <div className="pt-8 px-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="text-black text-xl bg-white px-3 py-3 rounded-[50%]"
                />
                <span className="text-[15px] text-white">
                  Largest Blog and News Space
                </span>
              </div>
              <div className="w-32 h-[1px] bg-bgIcon"></div>
            </div>
            <h1 className="text-white text-[66px] font-serif text-center pt-20">
              Join the Community
            </h1>
            <div className="pt-12">
              <div className="pl-6">
                <span className="text-white text-[72px]">&quot;</span>
                <p className="-translate-y-10 text-white text-2xl w-[400px]">
                  Connect and interact with like-minded individuals
                </p>
                <p className="text-white">03 ------ 03</p>
              </div>
            </div>
            <div className="text-white flex items-center gap-4 justify-end pr-16 -translate-y-5">
              <span
                onClick={handlePrevSlide}
                className="border border-white rounded-[50%] text-md px-2.5 pt-1.5 pb-2 cursor-pointer"
              >
                &larr;
              </span>
              <span
                onClick={handleNextSlide}
                className="border border-white rounded-[50%] text-md px-2.5 pt-1.5 pb-2 cursor-pointer"
              >
                &rarr;
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;

/*
const slides = [
  {
    title: "Blog Pulse",
    quote: "Blogging is the backbone of content marketing",
    number: "01 ------ 03",
    bgImage: "hero-bg-7",
  },
  {
    title: "Stay Updated",
    quote: "Latest news and articles at your fingertips",
    number: "02 ------ 03",
    bgImage: "hero-bg-2",
  },
  {
    title: "Join the Community",
    quote: "Connect and interact with like-minded individuals",
    number: "03 ------ 03",
    bgImage: "hero-bg-3",
  },
];
*/
