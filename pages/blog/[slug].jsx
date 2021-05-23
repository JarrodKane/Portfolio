import React, { useState } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Skeleton from "../../components/templates/skeleton";
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
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  // If the post does not exisit at all it'll redirect and not show the skeleton
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blogPost: items[0] },
    revalidate: 1,
  };
};

export default function PostDetails({ blogPost }) {
  // If the post exists but content is not grabbed yet it will fallback to the Skeleton page
  // This is because of incremental static creation
  if (!blogPost) {
    return <Skeleton />;
  }

  const { title, type, thumbNail, body } = blogPost.fields;
  const { createdAt } = blogPost.sys;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
    </>
  );
}
