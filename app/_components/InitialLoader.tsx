import React from "react";
import { Poppins } from "next/font/google";
import HomeLoading from "./HomeLoading";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function InitialLoader() {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-btnOrange z-[1232] origin-top ${poppins.className}`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <p className="text-[100px] font-bold text-white font-serif">
          Blog Pulse
        </p>
      </div>
      <div className="absolute bottom-[6%] right-[10%] text-white py-8 px-8">
        <HomeLoading />
      </div>
    </div>
  );
}

export default InitialLoader;
