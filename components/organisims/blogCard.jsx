import React from "react";
import Image from "next/image";

import Textbox from "../molecules/textbox";
import Row from "../molecules/row";
import { Icon } from "../atoms/icon";

function BlogCard({
  title,
  excerpt,
  publishDate,
  type,
  imageRef,
  linkRef,
  num,
  thumbNail,
}) {
  console.log(thumbNail.fields);

  return (
    <>
      {num % 2 === 0 ? (
        <div className="w-4/6 bg-white rounded-xl shadow-md overflow-hidden   mx-5 my-4  lg:my-6 flex">
          <Image
            className="h-72 w-4/6 object-cover"
            src={`https:${thumbNail.fields.file.url}`}
            width={thumbNail.fields.file.details.image.width}
            height={thumbNail.fields.file.details.image.height}
            alt="Man looking at item at a store"
          />
          <div className="w-2/6 p-8 pb-0">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </div>
            <p className="mt-2 text-gray-500">{excerpt}</p>
          </div>
        </div>
      ) : (
        <div className="w-4/6 bg-white rounded-xl shadow-md overflow-hidden   mx-5 my-4  lg:my-6 flex">
          <div className="w-2/6 p-8 pb-0">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </div>
            <p className="mt-2 text-gray-500">{excerpt}</p>
          </div>
          <Image
            className="h-72 w-4/6 object-cover"
            src={`https:${thumbNail.fields.file.url}`}
            width={thumbNail.fields.file.details.image.width}
            height={thumbNail.fields.file.details.image.height}
            alt="Man looking at item at a store"
          />
        </div>
      )}
    </>
  );
}

export default BlogCard;
