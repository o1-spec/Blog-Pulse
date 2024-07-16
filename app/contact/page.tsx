import React from "react";
import HomeNav from "../_components/Home/HomeNav";
import GetStarted from "../_components/Home/GetStarted";
import Footer from "../_components/Home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Pacifico } from "next/font/google";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Pacifico_font = Pacifico({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

function ContactPage() {
  return (
    <div>
      <div className="relative w-[100vw] h-[100%] pb-6 bg-hero-bg-7 bg-cover shadow-overlay bg-center">
        <HomeNav />
        <div className="flex flex-col items-center justify-center gap-4 text-white pt-16 pb-20">
          <h3 className="text-4xl font-bold">How can we help?</h3>
          <p className="text-2xl">Send us a message </p>
          <FontAwesomeIcon
            icon={faMailBulk}
            size="2x"
            className="text-black bg-btnOrange py-2 px-2"
          />
        </div>
      </div>
      <div className="py-16">
        <h6
          className={`text-center text-3xl font-bold pb-8 ${Pacifico_font.className}`}
        >
          Contact us via
        </h6>
        <div className="flex gap-8 items-center justify-center mb-8 bg-bgBlue py-5 w-[800px] mx-auto rounded-md">
          <div className="flex gap-3 items-center bg-btnOrange py-3 px-3 rounded-lg text-white cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} size="1x" className="" />
            <span>Facebook</span>
          </div>
          <div className="flex gap-3 items-center bg-btnOrange py-3 px-3 rounded-lg text-white cursor-pointer">
            <FontAwesomeIcon icon={faMailForward} size="1x" className="" />
            <span>Gmail</span>
          </div>
          <div className="flex gap-3 items-center bg-btnOrange py-3 px-3 rounded-lg text-white cursor-pointer">
            <FontAwesomeIcon icon={faPhone} size="1x" className="" />
            <span>Phone Call</span>
          </div>
        </div>
        <div className="w-[600px] mx-auto">
          <form className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="font-bold">First Name</label>
                <input
                  className="px-3 py-1.5 rounded-md w-[100%] placeholder:text-sm bg-bgGray focus:outline-none"
                  type="text"
                  name="messageFirstname"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="font-bold">Last Name</label>
                <input
                  className="px-3 py-1.5 rounded-md w-[100%] placeholder:text-sm bg-bgGray focus:outline-none"
                  type="text"
                  name="messageLastname"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold">Email</label>
              <input
                className="px-3 py-1.5 rounded-md w-[100%] placeholder:text-sm bg-bgGray focus:outline-none"
                type="email"
                name="messageEmail"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold">Message</label>
              <input
                className="px-3 py-1.5 rounded-md w-[100%] placeholder:text-sm bg-bgGray focus:outline-none"
                type="text"
                name="message"
              />
            </div>
            <div className="flex items-center justify-center mt-8">
              <input
                className="text-white bg-btnOrange py-2 px-5 w-[520px] cursor-pointer rounded-lg"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="text-white bg-bgBlue">
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
