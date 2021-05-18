import React from "react";

import Textbox from "../molecules/textbox";

function project({ title, text, imageRef, linkRef }) {
  return (
    <div className="max-w-screen-lg bg-white rounded-xl shadow-md overflow-hidden   mx-5 my-4  lg:my-6">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-72  w-full object-cover md:h-full md:w-72"
            src={`/images/${imageRef}`}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default project;
