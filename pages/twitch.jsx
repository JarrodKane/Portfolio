import React, { useEffect } from "react";
import Head from "next/head";
import DefaultPage from "../components/templates/defaultPage";

import TwitchEmbed from "../components/organisims/twitchEmbed";
import Textbox from "../components/molecules/textbox";

const Twitch = (props) => {
  return (
    <>
      <Head>
        <title>Twitch Channel</title>
      </Head>
      <DefaultPage props={` flex-col items-center  `}>
        <TwitchEmbed
          targetID="twitch-embed"
          width="1500"
          height="800"
          channel="GrimeGoblin"
        />
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
