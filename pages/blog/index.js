import React, { useState } from "react";

import { createClient } from "contentful";

import DefaultPage from "../../components/templates/defaultPage";

import BlogCard from "../../components/organisims/blogCard";

// Grabbing the posts
export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  // Reversed the array so that the older posts are at the bottom and the newer posts are first
  return {
    props: {
      posts: res.items.reverse(),
    },
    revalidate: 1,
  };
};

export default function Home({ posts }) {
  return (
    <DefaultPage>
      <div className={`flex flex-col items-center`}>
        {posts.map((post, i) => (
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
        ))}
      </div>
    </DefaultPage>
  );
}
