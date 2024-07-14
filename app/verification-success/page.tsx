import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Verification() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full mt-40 gap-2">
      <div className="bg-white border-2 border-btnOrange rounded-[50%] py-4 px-5 drop-shadow-xl">
        <FontAwesomeIcon icon={faCheck} size="4x" className="text-btnOrange" />
      </div>
      <h2 className="text-3xl">Verification-Sucess</h2>
      <div>
        Head back to the
        <Link href="/sign-in" className="text-btnOrange underline"> sign-in </Link>
        page in order to sign in
      </div>
    </div>
  );
}

export default Verification;
