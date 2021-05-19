import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
  // Just adding this in here in case I forget to add in a thumbnail for some blog posts
  let thumbNailUrl = `/images/${imageRef}`;
  if (thumbNail.fields !== undefined) {
    thumbNailUrl = `https:${thumbNail.fields.file.url}`;
  }

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`blog/${linkRef}`);
  };

  return (
    <>
      {num % 2 === 0 ? (
        <div
          onClick={handleClick}
          className="md:w-4/6 w-5/6 h-60 bg-white rounded-xl shadow-md overflow-hidden   mx-5 my-4 flex"
        >
          <div className="flex w-1/2">
            <Image
              className="object-cover"
              src={thumbNailUrl}
              width={700}
              height={400}
              alt="Man looking at item at a store"
            />
          </div>

          <div className="w-1/2 md:p-8 p-2 pb-0">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </div>
            <p className="mt-2 text-gray-500">{excerpt}</p>
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="md:w-4/6 w-5/6 h-60 bg-white rounded-xl shadow-md overflow-hidden mx-5 my-4   flex justify-end"
        >
          <div className="w-1/2  md:p-8 p-2 pb-0  flex flex-col">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </div>
            <p className="mt-2 text-gray-500">{excerpt}</p>
          </div>
          <div className="flex w-1/2">
            <Image
              className="object-cover"
              src={thumbNailUrl}
              width={700}
              height={400}
              alt="Man looking at item at a store"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default BlogCard;
