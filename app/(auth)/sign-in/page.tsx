"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import SigninForm from "@/app/_components/SigninForm";

function SignIn() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <div className="flex">
      <div className="basis-1/2 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col text-center gap-1 pb-4">
          <h1 className="text-[60px] font-bold">Hi There!</h1>
          <span>Welcome to the Blog-pulse Community</span>
        </div>
        <SigninForm />
        <div className="flex items-center gap-1">
          <span className="text-[15px]">Don&apos;t have an account?</span>
          <Link className="text-[16px] text-btnOrange" href="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="basis-1/2">
        {currentSlide === 0 && (
          <div className="relative w-[100%] h-[100vh] bg-hero-bg-4 bg-cover shadow-signOverlay bg-center">
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
              Discover Insights
            </h1>
            <div className="pt-12">
              <div className="pl-6">
                <span className="text-white text-[72px]">&quot;</span>
                <p className="-translate-y-10 text-white text-2xl w-[400px]">
                  Knowledge is power. Information is liberating. -&apos;Kofi
                  Annan&apos;
                </p>
                <p className="text-white">01 ------ 03</p>
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
          </div>
        )}
        {currentSlide === 1 && (
          <div className="relative w-[100%] h-[100vh] bg-hero-bg-5 bg-cover shadow-signOverlay bg-center">
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
              Stay Informed
            </h1>
            <div className="pt-12">
              <div className="pl-6">
                <span className="text-white text-[72px]">&quot;</span>
                <p className="-translate-y-10 text-white text-2xl w-[400px]">
                  The best way to predict the future is to create it.
                  -&apos;Peter Drucker&apos;
                </p>
                <p className="text-white">02 ------ 03</p>
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
          </div>
        )}
        {currentSlide === 2 && (
          <div className="relative w-[100%] h-[100vh] bg-hero-bg-6 bg-cover shadow-signOverlay bg-center">
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
              Engage with Content
            </h1>
            <div className="pt-12">
              <div className="pl-6">
                <span className="text-white text-[72px]">&quot;</span>
                <p className="-translate-y-10 text-white text-2xl w-[400px]">
                  Content is the atomic particle of all digital marketing.
                  -&apos;Rebecca Lieb&apos;
                </p>
                <p className="text-white">03 ------ 03</p>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
