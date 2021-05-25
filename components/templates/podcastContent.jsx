import React from "react";
import parse from "html-react-parser";

const PodcastContent = ({ children, ...props }) => {
  const { title, body, date, url } = props;
  return (
    <div className={`flex flex-col md:w-4/6 w-5/6 justify-center items-center`}>
      <div className={`flex flex-col md:w-9/12 w-11/12 pt-8`}>
        <h2>{title}</h2>
        <div>
          <p>{date}</p>
        </div>
        <audio controls className="flex  w-full">
          <source src={url} type="audio/mpeg" />
        </audio>
        <div>{parse(body)}</div>
        <div>{url}</div>
      </div>
    </div>
  );
};

export default PodcastContent;
