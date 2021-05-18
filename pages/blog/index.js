import React, { useState } from "react";
import { createClient } from "contentful";

import DefaultPage from "../../components/templates/defaultPage";
import ProfileImage from "../../components/molecules/profileImage";
import Textbox from "../../components/molecules/textbox";

import BlogCard from "../../components/organisims/blogCard";

// Grabbing the posts
export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      posts: res.items,
    },
  };
};

export default function Home({ posts }) {
  console.log(posts[0].sys);

  return (
    <DefaultPage>
      <div className={`flex flex-col items-center`}>
        {posts.map((post, i) => (
          <BlogCard
            num={i}
            key={`${post.sys.id}`}
            title={post.fields.title}
            excerpt={post.fields.shortDesc}
            publishDate={post.fields.publishDate}
            type={post.fields.type}
            imageRef="test.jpg"
            linkRef="https://jarrodkane.com/"
          />
        ))}
      </div>
    </DefaultPage>
  );
}
