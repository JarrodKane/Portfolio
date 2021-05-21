import React, { useState } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import DefaultPage from "../../components/templates/defaultPage";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  // This takes the response object, and maps out all of the slugs into an array
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: { blogPost: items[0] },
    revalidate: 1,
  };
};

export default function PostDetails({ blogPost }) {
  const { title, type, thumbNail, body } = blogPost.fields;
  const { createdAt } = blogPost.sys;

  return (
    <DefaultPage>
      <Image
        src={`https://${thumbNail.fields.file.url}`}
        width={thumbNail.fields.file.details.image.width}
        height={thumbNail.fields.file.details.image.height}
      />
      <h2>{title}</h2>
      <div>
        <p>{type}</p>
        <p>{createdAt}</p>
      </div>
      <div className={``}>{documentToReactComponents(body)}</div>
    </DefaultPage>
  );
}
