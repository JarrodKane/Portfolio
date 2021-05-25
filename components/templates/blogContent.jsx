import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogContent = ({ children, ...props }) => {
  return (
    <div className={`flex flex-col max-w-5xl    justify-center items-center `}>
      <Image
        src={`https://${props.thumbNail.fields.file.url}`}
        width={props.thumbNail.fields.file.details.image.width}
        height={props.thumbNail.fields.file.details.image.height}
      />
      <div className={`flex flex-col  md:w-8/12 w-10/12 pt-8`}>
        <h2>{props.title}</h2>
        <div>
          <p>{props.type}</p>
          <p>{props.createdAt}</p>
        </div>
        <div className={``}>{documentToReactComponents(props.body)}</div>
      </div>
    </div>
  );
};

export default BlogContent;
