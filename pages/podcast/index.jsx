import React, { useState } from "react";
import axios from "axios";

import { createClient } from "contentful";
import parse from "html-react-parser";

import DefaultPage from "../../components/templates/defaultPage";

import PodcastCard from "../../components/organisims/podcastCard";

const makeCall = async () => {
  try {
    const resp = await axios.get(
      "https://pinecast.com/jsonfeed/end-of-the-reel"
    );

    return resp.data;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const getStaticProps = async () => {
  const res = await makeCall();

  // Reversed the array so that the older posts are at the bottom and the newer posts are first
  //console.log(res);
  return {
    props: {
      episodes: res.items,
    },
    revalidate: 1,
  };
};

const Podcast = ({ episodes }) => {
  return (
    <DefaultPage props=" flex-col items-center mt-5 w-screen">
      {episodes.map((episode, i) => (
        <PodcastCard
          key={episode.id}
          id={episode.id}
          title={episode.title}
          body={episode.content_html}
          date={episode.date_published}
          url={episode.attachments[0].url}
          num={i}
        />
      ))}
      {/* TODO: Add in pagnation */}
    </DefaultPage>
  );
};

export default Podcast;
