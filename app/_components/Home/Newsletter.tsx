import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Newsletter() {
  return (
    <div className="max-w-[1100px] mx-auto bg-bgBlue rounded-lg text-white my-10 px-2 relative">
      <div className="triangle"></div>
      <div className="triangle-two"></div>
      <div className="triangle-three"></div>
      <div className="triangle-four"></div>
      <div className="triangle-five"></div>
      <div className="flex gap-4 pt-8 pb-12 px-6">
        <div className="flex flex-col gap-3 basis-1/2">
          <h2 className="text-4xl pb-2">Looking to join our blog community?</h2>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-[50%] px-2 py-1">
              <FontAwesomeIcon
                icon={faTwitter}
                size="1x"
                className="text-twitterBlue"
              />
            </div>
            <div className="bg-white rounded-[50%] px-2 py-1">
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="text-instagram"
              />
            </div>
            <div className="bg-white rounded-[50%] px-2 py-1">
              <FontAwesomeIcon
                icon={faYoutube}
                size="1x"
                className="text-youtube"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <p className="text-white text-[14px] pb-4">
            Sign Up for our Newsletter
          </p>
          <div>
            <form className="flex items-center relative">
              <input
                className="w-full px-3 py-4 rounded-xl text-black text-md placeholder:text-sm placeholder:text-black pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter email address here..."
              />
              <input
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-btnOrange px-4 py-2 rounded-md font-semibold text-[15px] cursor-pointer"
                type="submit"
                value="Subscribe Now →"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
