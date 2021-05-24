import React, { useState } from "react";
import axios from "axios";

import { createClient } from "contentful";
import parse from "html-react-parser";

import DefaultPage from "../../components/templates/defaultPage";

import BlogCard from "../../components/organisims/blogCard";

// // Grabbing the posts
// export const getStaticProps = async () => {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({ content_type: "blogPost" });

//   // Reversed the array so that the older posts are at the bottom and the newer posts are first
//   return {
//     props: {
//       posts: res.items.reverse(), //?
//     },
//     revalidate: 1,
//   };
// };

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
  console.log(res);

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
      posts
      {episodes.map((episode, i) => (
        <div key={episode.id}>
          {episode.title}
          {console.log(episode)}
        </div>
      ))}
      {/* {posts.map((post, i) => (
        <BlogCard
          num={i}
          key={`${post.sys.id}`}
          thumbNail={post.fields.thumbNail}
          title={post.fields.title}
          excerpt={post.fields.shortDesc}
          publishDate={post.fields.publishDate}
          type={post.fields.type}
          imageRef="test.jpg"
          linkRef={post.fields.slug}
        ></BlogCard>
      ))} */}
    </DefaultPage>
  );
};

export default Podcast;
