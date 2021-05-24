import React, { useState } from "react";
import { createClient } from "contentful";

import Skeleton from "../../components/templates/skeleton";
import PodcastContent from "../../components/templates/blogContent";

import DefaultPage from "../../components/templates/defaultPage";
import { makeCall } from "../../api/pinecast";

export const getStaticPaths = async () => {
  const res = await makeCall();

  // This takes the response object, and maps out all of the slugs into an array
  // Currently there is no way to return more params for the path, I was wanting to make the slug the title and search for episodes via the ID but that feature is not in Next.js right now
  // Ref : https://github.com/vercel/next.js/discussions/11272
  let paths = res.items.map((item) => {
    let newTitle = item.title.match(/\w+/g);
    newTitle = newTitle.join("-");
    return {
      params: { slug: newTitle },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await makeCall();

  const episode = res.items.filter((episode) => {
    let newTitle = episode.title.match(/\w+/g);
    newTitle = newTitle.join("-");
    return newTitle === params.slug;
  });

  return {
    props: {
      episode: episode,
    },
    revalidate: 1,
  };
};

export default function Podcast({ episode }) {
  // If the post exists but content is not grabbed yet it will fallback to the Skeleton page
  // This is because of incremental static creation

  if (!episode) {
    return <Skeleton />;
  }

  const { title, content_html, date_published } = episode[0];
  const { url } = episode[0].attachments[0];

  return (
    <DefaultPage props="w-screen flex justify-center mt-5">
      <PodcastContent
        title={title}
        body={content_html}
        date={date_published}
        url={url}
      />
    </DefaultPage>
  );
}
