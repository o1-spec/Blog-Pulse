"use client";

import React, { useRef } from "react";
import BlogDisplay from "./_components/Home/BlogDisplay";
import HomepageBlogsTwo from "./_components/Home/HomepageBlogsTwo";
import Hero from "./_components/Home/Hero";
import HomeNav from "./_components/Home/HomeNav";
import Newsletter from "./_components/Home/Newsletter";
import ScrollDown from "./_components/Home/ScrollDown";
import GetStarted from "./_components/Home/GetStarted";
import Footer from "./_components/Home/Footer";
import Faq from "./_components/Home/Faq";
import PhoneDisplay from "./_components/Home/PhoneDisplay";
import InitialLoader from "./_components/InitialLoader";

export default function Home() {
  const blogDisplayRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (blogDisplayRef.current) {
      blogDisplayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <InitialLoader />
      <div className="relative w-[100vw] h-[100%] pb-6 bg-hero-bg bg-cover shadow-overlay bg-center">
        <HomeNav />
        <Hero />
        <ScrollDown onClick={handleScrollDown} />
      </div>
      <div ref={blogDisplayRef}>
        <BlogDisplay />
      </div>
      <Newsletter />
      <HomepageBlogsTwo />
      <PhoneDisplay />
      <Faq />
      <div className="text-white bg-bgBlue">
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}
