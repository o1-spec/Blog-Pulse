import Link from "next/link";
import React from "react";

function GetStarted() {
  return (
    <div>
      <div className="py-16 px-2 max-w-[1050px] rounded-lg flex flex-col mx-auto items-center justify-center gap-4 ">
        <h4 className="text-3xl tracking-wide">Get Started</h4>
        <p className="text-lg text-center max-w-[800px]">
          Join our vibrant community of bloggers! Whether you&apos;re a seasoned
          writer or just starting out, our platform provides all the tools you
          need to share your stories, ideas, and experiences with the world.
          Create your blog today and start connecting with readers from all
          over.
        </p>
        <Link
          href="/"
          className="font-semibold bg-btnOrange text-white text-md px-6 cursor-pointer py-1.5 rounded-lg"
        >
          Create your blog
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
