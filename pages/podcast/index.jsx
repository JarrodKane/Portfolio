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

  return {
    props: {
      episodes: res.items,
    },
    revalidate: 1,
  };
};

const Podcast = ({ episodes }) => {
  const [pageNum, setPageNum] = useState(0);
  const [pages, setPages] = useState([0, 10]);

  // Slicing all of the retrived pages into an array that only has 10
  let podcastList = episodes.slice(pages[0], pages[1]);
  // This holds one more than the total pages that can be evenly divided by 10
  const moreTotalPages = episodes.length % 10;
  const totalPages = [];

  for (let i = 0; i < moreTotalPages; i++) {
    totalPages.push(i);
  }

  // Simple pagination that will change depending on which page numebr is hit
  // TODO: Fix pagination so that the arrows work
  // TODO: Change pagination into it's own component and make it so only x number of page numbers are displayed at once then it get's a ... eventually if there are too many
  const onChangePage = (value) => {
    let curPages = pages;

    console.log(value);
    if (value === 0) {
      curPages = [0, 10];
    } else {
      curPages = [10 * value, 10 * value + 10];
    }

    setPages(curPages);
  };

  return (
    <DefaultPage props=" flex-col items-center mt-5 w-screen">
      {podcastList.map((episode, i) => (
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
      <div
        className={`pb-3 w-1/5 flex justify-around content-between items-baseline`}
      >
        <div
          className={`pt-7 text-3xl`}
          onClick={() => {
            onChangePage(1);
          }}
        >
          {`<`}
        </div>
        {totalPages.map((number) => (
          <div
            className={`w-auto h-7 text-3xl   cursor-pointer`}
            onClick={() => {
              onChangePage(number);
            }}
          >
            {number + 1}
          </div>
        ))}
        <div
          className={`pt-7 text-3xl`}
          onClick={() => {
            onChangePage(1);
          }}
        >
          {`>`}
        </div>
      </div>
    </DefaultPage>
  );
};

export default Podcast;
