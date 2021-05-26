import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import DefaultPage from "../components/templates/defaultPage";
import ProfileImage from "../components/molecules/profileImage";
import Textbox from "../components/molecules/textbox";

import Project from "../components/organisims/project";

export default function Home() {
  return (
    <DefaultPage props="flex-col">
      <ProfileImage />
      <div className={`w-full flex flex-col p-3 md:p-8 items-center `}>
        <Textbox
          linkRef="https://www.linkedin.com/in/jarrodkane/"
          imageFile="/images/linkedin.svg"
          text={`I’m a developer from Melbourne Australia. 
          I focus mainly on technologies/frameworks/languages such as React, Next.js, Node, etc...

          
          My other hobbies include MMA, BJJ, and bad movies which can also be found on this site.
          This site was made in order to try out many new technologies and a link to the repo can be found bellow.`}
        ></Textbox>

        <Project
          title="Portfolio Site"
          text={`Site created with Next.js.
          It's using tailwindscss for styling.
          The site is deployed and hosted on Netlify
          The content for the blog is pulled in from a headless CMS called Contentful.
          The content for the Podcast is grabbed from the podcasts RSS feed and then the pages are dynamically generated.
          

          The original aim of this site was to create a blog that would get content from Contentful, and was to try to use Tailwindcss.
          It now grabs content from Contentful, an RSS feed, and embeds livestreamed videos.
          Check out the github for a full list of todos and technology used.`}
          imageRef="portfolio-image"
          githubRef="https://github.com/JarrodKane/Portfolio"
          linkRef="https://jarrodkane.com/"
        />
        <Project
          title="Little Piggy"
          text={`Little Piggy is based off "The Pig Dice Game".

          It was created when I was learning React Hooks, styled-components, and Framer-motion.
          It's hosted on netlify`}
          imageRef="piggy-image"
          linkRef="https://angry-williams-202a5d.netlify.app/"
          githubRef="https://github.com/JarrodKane/little-piggy"
        />
        <Project
          title="Chaos-TODO"
          text={`A basic todo list that was made while streaming live.
          It has sounds and was made to create a slightly more interesting todolist.
          - React hooks, styled componets, react-beautiful-dnd`}
          imageRef="chaos-image"
          linkRef="https://gracious-brahmagupta-942870.netlify.app/"
          githubRef="https://github.com/JarrodKane/Chaos-TODO"
        />
      </div>
    </DefaultPage>
  );
}
