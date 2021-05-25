import React from "react";

import Textbox from "../molecules/textbox";
import Row from "../molecules/row";
import { Icon } from "../atoms/icon";
import Image from "next/image";

function project({ title, text, imageRef, githubRef, linkRef }) {
  return (
    <div className=" overflow-hidden bg-white rounded-xl shadow-md flex  flex-col md:flex-row">
      <div
        type={imageRef}
        className={`w-full h-60 bg-profile-image bg-cover bg-center  rounded-r-lg  shadow-md  flex items-end  p-5  `}
      />
      <div className="">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </div>
        <div className=" text-gray-500 overflow-hidden">{text}</div>
      </div>
    </div>

    // <div className=" bg-white rounded-xl shadow-md ">
    //   <div className="flex  flex-col md:flex-row">
    //     <div className="md:flex-shrink-0">
    //       <Image
    //         className="object-cover  "
    //         src={`/images/${imageRef}`}
    //         height="260"
    //         width="260"
    //         alt="Man looking at item at a store"
    //       />
    //     </div>
    //     <div className="">
    //       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
    //         {title}
    //       </div>
    //       <p className="mt-2 mb-2 text-gray-500">{text}</p>
    //     </div>
    //     <div className=" flex p-3   md:flex-col flex-row ">
    //       <Icon
    //         props={`h-16 w-16 p-2 m-5 `}
    //         imageFile="/images/github.svg"
    //         linkRef={`${githubRef}`}
    //       />
    //       <Icon
    //         props={`h-16 w-16 p-2  m-5`}
    //         imageFile="/images/website.svg"
    //         linkRef={`${linkRef}`}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default project;
