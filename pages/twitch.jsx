import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import ReactPlayer from "react-player";

import DefaultPage from "../components/templates/defaultPage";

import TwitchEmbed from "../components/organisims/twitchEmbed";
import Textbox from "../components/molecules/textbox";
import useWindowSize from "../hooks/useWindowSize.ts";

const Twitch = (props) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Head>
        <title>Twitch Channel</title>
      </Head>
      <DefaultPage props={` flex-col items-center  `}>
        <ReactPlayer
          key={uuidv4()}
          playerId={uuidv4()}
          className="react-player"
          url="https://www.twitch.tv/grimegoblin"
          width="100%"
          height="50vh"
        />
        {/* {width === 0 ? (
          <div>Loading</div>
        ) : (
          <TwitchEmbed
            key={uuidv4()}
            targetID="twitch-embed"
            width={width}
            height={height - 200}
            channel="GrimeGoblin"
          />
        )} */}

        <Textbox
          text={`Here's my twitch channel
        It's used mainly for live programming/designing
        
        Sometimes the odd game will be played as well, but normally it's just me getting confused and worried about whey something is not working`}
        />
      </DefaultPage>
    </>
  );
};
export default Twitch;
