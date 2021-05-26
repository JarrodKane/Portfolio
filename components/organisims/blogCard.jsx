import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
  const [isHoverd, setIsHoverd] = useState(false);

  // Added in a isHovered to the parent element so that the image elment will go from greyscale to color when the parent div is hoverd over

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`blog/${linkRef}`);
  };

  const changeHover = () => {
    let curHover = !isHoverd;

    setIsHoverd(curHover);
  };

  return (
    <>
      {num % 2 === 0 ? (
        <div
          onMouseEnter={changeHover}
          onMouseLeave={changeHover}
          onClick={handleClick}
          className="md:w-4/6 w-5/6 h-60 bg-white rounded-xl transition-shadow duration-500 ease-in-out shadow-md hover:shadow-xl overflow-hidden mx-5 my-4 flex justify-end cursor-pointer "
        >
          <div className="flex w-1/2">
            <Image
              className={`object-cover  transition-filter duration-500 ease-in-out   ${
                isHoverd ? "" : " filter grayscale"
              }`}
              src={thumbNailUrl}
              width={400}
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
          onMouseEnter={changeHover}
          onMouseLeave={changeHover}
          onClick={handleClick}
          className="md:w-4/6 w-5/6 h-60 bg-white rounded-xl transition-shadow duration-500 ease-in-out shadow-md hover:shadow-xl overflow-hidden mx-5 my-4 flex justify-end cursor-pointer "
        >
          <div className="w-1/2  md:p-8 p-2 pb-0  flex flex-col">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </div>
            <p className="mt-2 text-gray-500">{excerpt}</p>
          </div>
          <div className="flex w-1/2">
            <Image
              className={`object-cover  transition-filter duration-500 ease-in-out   ${
                isHoverd ? "" : " filter grayscale"
              }`}
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
