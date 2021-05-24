import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogContent = ({ children, ...props }) => {
  return (
    <div className={`flex flex-col md:w-3/5 w-5/6 justify-center`}>
      <Image
        src={`https://${props.thumbNail.fields.file.url}`}
        width={props.thumbNail.fields.file.details.image.width}
        height={props.thumbNail.fields.file.details.image.height}
      />
      <h2>{props.title}</h2>
      <div>
        <p>{props.type}</p>
        <p>{props.createdAt}</p>
      </div>
      <div className={``}>{documentToReactComponents(props.body)}</div>
    </div>
  );
};

export default BlogContent;
