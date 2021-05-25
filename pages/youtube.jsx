import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import ReactPlayer from "react-player";

import DefaultPage from "../components/templates/defaultPage";

import Textbox from "../components/molecules/textbox";

const Youtube = (props) => {
  return (
    <>
      <Head>
        <title>Youtube</title>
      </Head>
      <DefaultPage props={` flex-col items-center  `}>
        <div className={`w-screen p-12`}>
          <ReactPlayer
            key={uuidv4()}
            playerId={uuidv4()}
            className={`react-player`}
            url="https://youtu.be/f8hk3hX1ZHc"
            width="100%"
            height="50vh"
          />
        </div>

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
          text={`Youtube channel
       It's used mainly for making more informative videos about tech and the like.`}
        />
      </DefaultPage>
    </>
  );
};
export default Youtube;
