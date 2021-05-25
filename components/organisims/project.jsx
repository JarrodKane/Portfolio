import React from "react";

import Textbox from "../molecules/textbox";
import Row from "../molecules/row";
import { Icon } from "../atoms/icon";

function project({ title, text, imageRef, githubRef, linkRef }) {
  return (
    <div className="max-w-screen-xlg bg-white rounded-xl shadow-md overflow-hidden mx-5 my-4 lg:my-6">
      <div className="flex max-w-6xl flex-col md:flex-row">
        <div className="md:flex-shrink-0">
          <img
            className="h-72  w-full object-cover  md:w-72"
            src={`/images/${imageRef}`}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="md:p-8 p-3 pb-0 w-full">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 mb-2 text-gray-500 whitespace-pre-line">{text}</p>
        </div>
        <div className=" flex p-3   md:flex-col flex-row ">
          <Icon
            props={`h-16 w-16 p-2 m-5 `}
            imageFile="/images/github.svg"
            linkRef={`${githubRef}`}
          />
          <Icon
            props={`h-16 w-16 p-2  m-5`}
            imageFile="/images/website.svg"
            linkRef={`${linkRef}`}
          />
        </div>
      </div>
    </div>
  );
}

export default project;
