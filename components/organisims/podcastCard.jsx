import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import parse from "html-react-parser";

function PodcastCard({ title, date, url, num, id, body }) {
  const router = useRouter();

  //TODO: Fix regex so that it includes single chracters like "A view to kill", currently it does not grab the A
  let newTitle = title.match(/[aA-zZ]\w+/g);
  newTitle = newTitle.join("-");

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`podcast/${newTitle}`);
  };

  return (
    //

    <div
      onClick={handleClick}
      className="md:w-4/6 w-5/6 h-auto bg-white rounded-xl transition-shadow duration-500 ease-in-out shadow-md hover:shadow-xl overflow-hidden mx-5 my-4 flex justify-end cursor-pointer "
    >
      <div className="w-full md:p-8 p-2 pb-0">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </div>
        {parse(body)}
        {/* <p className="mt-2 text-gray-500">{excerpt}</p> */}
        <audio controls className="flex  w-full">
          <source src={url} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default PodcastCard;
