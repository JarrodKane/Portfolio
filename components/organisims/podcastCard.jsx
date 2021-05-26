import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import parse from "html-react-parser";

function PodcastCard({ title, date, url, num, id, body }) {
  const router = useRouter();

  let newTitle = title.match(/\w+/g);
  newTitle = newTitle.join("-");

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`podcast/${newTitle}`);
  };

  return (
    <div className="bg-white rounded-xl transition-all duration-500 ease-in-out shadow-md hover:shadow-xl hover:bg-yellow-100 mx-5 my-4 flex justify-end ">
      <div className=" md:p-5 p-2">
        <div
          onClick={handleClick}
          className="uppercase tracking-wide text-xl text-indigo-500 hover:text-indigo-700 font-semibold cursor-pointer"
        >
          {title}
        </div>
        <div className={`max-h-28 overflow-ellipsis overflow-hidden mb-3 `}>
          {parse(body)}
        </div>
        <audio controls className={`w-full rounded-xl`}>
          <source src={url} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default PodcastCard;
