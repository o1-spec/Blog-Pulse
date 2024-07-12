import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
  return (
    <div className="flex">
      <div className="basis-1/2 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col text-center gap-1 pb-4">
          <h1 className="text-[60px] font-bold">Hi There!</h1>
          <span>Welcome to the Blog-pulse Community</span>
        </div>
        <button className="text-[14px] border border-bgIcon px-24 py-3 rounded-lg text-center flex items-center justify-center gap-2">
          <Image width="20" height="10" src="Google.svg" alt="Google Icon" />
          Log in with Google
        </button>
        <div className="text-center flex items-center gap-4 py-4">
          <div className="w-32 h-[1px] bg-bgIcon"></div>
          Or
          <div className="w-32 h-[1px] bg-bgIcon"></div>
        </div>
        <form>
          <div className="pb-4">
            <input
              className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
              type="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className="pb-2">
            <input
              className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-bgIcon focus:outline-none"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex justify-end text-btnOrange text-[14px] mb-4"
            >
              Forgot password?
            </Link>
            <input
              className="bg-black text-white rounded-xl py-2 px-36 cursor-pointer hover:bg-white hover:text-black border duration-300"
              type="submit"
              value="Log In"
            />
          </div>
        </form>
        <div className="flex items-center gap-1">
          <span className="text-[15px]">Don&apos;t have an account?</span>
          <Link className="text-[16px] text-btnOrange" href="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="basis-1/2">
        <div className="relative w-[100%] h-[100vh] bg-hero-bg bg-cover shadow-signOverlay bg-center">
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
            <div className="text-white flex items-center gap-4 justify-end pr-16 -translate-y-5">
              <span className="border border-white rounded-[50%] text-md px-2.5 pt-1.5 pb-2 cursor-pointer">
                &larr;
              </span>
              <span className="border border-white rounded-[50%] text-md px-2.5 pt-1.5 pb-2 cursor-pointer">
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
