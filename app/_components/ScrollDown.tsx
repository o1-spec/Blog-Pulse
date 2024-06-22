import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ScrollDown() {
  return (
    <div className="mt-20 border-2 border-white rounded-[50%] w-20 pt-4 mx-auto">
      <div className="flex flex-col cursor-pointer">
        <FontAwesomeIcon icon={faArrowDown} size="2x" className="text-white" />
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2x"
          className="text-white -translate-y-4"
        />
      </div>
    </div>
  );
}

export default ScrollDown;
