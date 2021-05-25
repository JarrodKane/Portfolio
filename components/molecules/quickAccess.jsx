import React, { useState } from "react";
import { useRouter } from "next/router";

const QuickAccess = ({ list, props }) => {
  const router = useRouter();
  const [isQuickOpen, setIsQuickOpen] = useState(false);

  const handleClick = (title) => {
    let newTitle = title.match(/\w+/g);
    newTitle = newTitle.join("-");
    router.push(`podcast/${newTitle}`);
  };

  const handleQuickAccess = () => {
    const current = isQuickOpen;
    setIsQuickOpen(!current);
  };

  return (
    <>
      <button
        className={`
    transition duration-500 ease-in-out
    border-2 border-yellow-600 rounded-lg px-3 py-2 text-red-800 cursor-pointer  hover:bg-yellow-600 hover:text-gray-100 text-xl `}
        onClick={handleQuickAccess}
      >
        Quick Access
      </button>
      <div className={`${isQuickOpen ? "block" : "hidden"} `}>
        <div className={`${props} `}>
          {list.map((episode, i) => (
            <div
              className={`hover:text-indigo-500 cursor-pointer text-green-500 `}
              onClick={() => {
                handleClick(episode.title);
              }}
              key={episode.id}
              id={episode.id}
              title={episode.title}
              body={episode.content_html}
              date={episode.date_published}
              url={episode.attachments[0].url}
              num={i}
            >
              {episode.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickAccess;
