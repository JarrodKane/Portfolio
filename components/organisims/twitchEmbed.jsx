import React, { useEffect } from "react";
import Head from "next/head";

const TwitchEmbed = (props) => {
  const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";
  useEffect(() => {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(props.targetID, { ...props });
    });
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id={props.targetID}></div>
    </>
  );
};

export default TwitchEmbed;
