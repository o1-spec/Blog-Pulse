import React, { useRef, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import HomeLoading from "./HomeLoading";
import SplitType from "split-type";
import gsap from "gsap";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function InitialLoader() {
  const [isInit, setIsInit] = useState(false);
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  const containerRef = useRef(null);

  const isAppInit = () => {
    if (!isInit) {
      setIsInit(true);
      return false;
    }
    return isInit;
  };

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current);

      let textAnimation = gsap.timeline();
      textAnimation
        .set(text.lines, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          overflow: "hidden",
          duration: 0.1,
        })
        .from(
          text.words,
          {
            y: 120,
            opacity: 0,
            duration: 1.2,
            ease: "expo.inOut",
          },
          "<"
        )
        .fromTo(
          loaderRef.current,
          {
            scale: 0,
            // duration: 0.2,
          },
          {
            scale: 1,
          }
        )
        .to(text.words, {
          y: -120,
          opacity: 0,
          delay: 0.8,
        })
        .to(loaderRef.current, {
          scale: 0,
        })
        .to(".blinder", {
          scaleY: 0,
          stagger: 0.05,
          ease: "easeIn",
          duration: 0.5,
        });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed origin-top w-[100vw] h-[100vh] z-[999] pointer-events-none flex items-center justify-center ${poppins.className}`}
    >
      <div className="flex blog-initial-loader">
        <p ref={textRef}>Blog Pulse</p>
      </div>
      <div
        ref={loaderRef}
        className="absolute bottom-[0] mx-[100px] my-[50px] scale-100 right-[0] text-white py-8 px-8"
      >
        <HomeLoading />
      </div>
      <div className="blinder-container -z-10">
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
        <div className="blinder"></div>
      </div>
    </div>
  );
}

export default InitialLoader;
