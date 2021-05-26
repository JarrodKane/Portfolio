import React from "react";

import Textbox from "../molecules/textbox";
import Row from "../molecules/row";
import { Icon } from "../atoms/icon";
import Image from "next/image";

function project({ title, text, imageRef, githubRef, linkRef }) {
  return (
    <div className=" grid md:grid-cols-6 md:w-10/12  max-w-screen-lg bg-white rounded-xl shadow-md my-5 md:my-5">
      <div
        type={imageRef}
        className={`col-span-2 h-52 md:h-full bg-${imageRef} bg-cover bg-center  md:rounded-l-lg  rounded-t-lg shadow-md  flex items-end  p-5  `}
      />
      <div className="p-3 md:col-span-4 ">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </div>
        <p className="text-gray-500 mt-2 whitespace-pre-line text-base">
          {text}
        </p>
        <div className=" flex p-3">
          <Icon
            props={`w-16 p-2 mx-3`}
            imageFile="/images/github.svg"
            linkRef={`${githubRef}`}
          />
          <Icon
            props={`w-16 p-2  mx-3`}
            imageFile="/images/website.svg"
            linkRef={`${linkRef}`}
          />
        </div>
      </div>
    </div>
  );
}

export default project;
