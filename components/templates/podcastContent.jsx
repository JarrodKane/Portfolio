import React from "react";
import Image from "next/image";

const PodcastContent = ({ children, ...props }) => {
  return (
    <div className={`flex flex-col md:w-4/6 w-5/6 justify-center items-center`}>
      <Image
        src={`https://${props.thumbNail.fields.file.url}`}
        width={props.thumbNail.fields.file.details.image.width}
        height={props.thumbNail.fields.file.details.image.height}
      />
      <div className={`flex flex-col md:w-9/12 w-11/12 pt-8`}>
        <h2>{props.title}</h2>
        <div>
          <p>{props.type}</p>
          <p>{props.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default PodcastContent;
