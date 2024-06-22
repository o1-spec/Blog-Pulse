import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="w-full mt-32 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-4 w-[700px] px-1">
        <h2 className="text-white text-[40px] uppercase text-center font-serif">
          Our Place to share advice, news and insights
        </h2>
        <Link
          href="/"
          className="text-lg bg-btnOrange text-white px-8 py-2 rounded-md border  border-btnOrange font-semibold"
        >
          Start Reading
        </Link>
      </div>
    </div>
  );
}

export default Hero;
