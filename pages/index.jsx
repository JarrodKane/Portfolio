import React, { useState } from "react";
import Head from "next/head";
import DefaultPage from "../components/templates/defaultPage";
import { Icon } from "../components/atoms/icon";
import ProfileImage from "../components/molecules/profileImage";
import Textbox from "../components/molecules/textbox";
import { Text } from "../components/atoms/text";
import Row from "../components/molecules/row";

import Project from "../components/organisims/project";

export default function Home() {
  return (
    <DefaultPage>
      <ProfileImage />
      <Textbox
        text=" I’m a developer from Melbourne Australia. I focus on technologies such
          as React, Next.js, Node, etc"
      />

      <div
        className={`flex flex-col content-center justify-self-center items-center `}
      >
        <Project
          title="Portfolio Site"
          text="Site created with Next.js. The aim of this site was to create a blog that would get content from Contentful, and was to try to use Tailwindcss"
          imageRef="test.jpg"
          githubRef="https://github.com/JarrodKane/Portfolio"
          linkRef="https://jarrodkane.com/"
        />
        <Project
          title="Little Piggy"
          text={`Little Piggy is based off the Pig Dice Game.
          It was created when I was learning React Hooks, styled-components, and Framer-motion.
          It's hosted on netlify`}
          imageRef="test.jpg"
          linkRef="https://angry-williams-202a5d.netlify.app/"
          githubRef="https://github.com/JarrodKane/little-piggy"
        />
        <Project
          title="Chaos-TODO"
          text="A basic todo list that was made while streaming live. It has sounds and was made to create a slightly more interesting todolist
          - React hooks, styled componets, react-beautiful-dnd

          "
          imageRef="test.jpg"
        />
      </div>

      <div>Footer</div>
    </DefaultPage>
  );
}
