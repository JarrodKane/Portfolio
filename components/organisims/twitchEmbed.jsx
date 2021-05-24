import React, { useEffect } from "react";

import ReactPlayer from "react-player";

const TwitchEmbed = (props) => {
  const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";
  console.log(props);
  useEffect(() => {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(props.targetID, { ...props });
    });
    document.body.appendChild(script);
  }, []);
  if (props.width === 0) {
    return <></>;
  } else {
    return (
      <>
        <div id={props.targetID}></div>
      </>
    );
  }
};

export default TwitchEmbed;
