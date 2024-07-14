import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import SignupForm from "@/app/_components/SignupForm";

function SignUp() {
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
        <div className="fixed w-[50%] h-[100vh] bg-hero-bg bg-cover shadow-signOverlay bg-center">
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

export default SignUp;
