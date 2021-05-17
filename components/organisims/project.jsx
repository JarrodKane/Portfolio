import React from "react";

import Textbox from "../molecules/textbox";

function project({ title, text, imageRef, linkRef }) {
  return (
    <div class="max-w-screen-lg bg-white rounded-xl shadow-md overflow-hidden   mx-5 my-4  lg:my-6">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-72  w-full object-cover md:h-full md:w-72"
            src={`/images/${imageRef}`}
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p class="mt-2 text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default project;
