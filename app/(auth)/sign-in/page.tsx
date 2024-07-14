"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import SigninForm from "@/app/_components/SigninForm";

const slides = [
  {
    title: "Discover Insights",
    quote: "Knowledge is power. Information is liberating.-'Kofi Annan'",
    number: "01 ------ 03",
    bgImage: "hero-bg-4",
  },
  {
    title: "Stay Informed",
    quote:
      "The best way to predict the future is to create it.-'Peter Drucker'",
    number: "02 ------ 03",
    bgImage: "hero-bg-5",
  },
  {
    title: "Engage with Content",
    quote:
      "Content is the atomic particle of all digital marketing.-'Rebecca Lieb'",
    number: "03 ------ 03",
    bgImage: "hero-bg-6",
  },
];
function SignIn() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
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
        <div
          className={`relative w-[100%] h-[100vh] bg-${slides[currentSlide].bgImage} bg-cover shadow-signOverlay bg-center`}
        >
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
            {slides[currentSlide].title}
          </h1>
          <div className="pt-12">
            <div className="pl-6">
              <span className="text-white text-[72px]">&quot;</span>
              <p className="-translate-y-10 text-white text-2xl w-[400px]">
                {slides[currentSlide].quote}
              </p>
              <p className="text-white">{slides[currentSlide].number}</p>
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
      </div>
    </div>
  );
}

export default SignIn;
