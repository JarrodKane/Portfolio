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
      <Row>
        <Icon
          imageFile="/images/github.svg"
          linkRef="https://github.com/JarrodKane"
        />
        <Icon
          imageFile="/images/linkedin.svg"
          linkRef="https://www.linkedin.com/in/jarrodkane/"
        />
      </Row>
      <div
        className={`flex flex-col content-center justify-self-center items-center `}
      >
        <Project
          title="Test project"
          text="test Text for the project to display"
          imageRef="test.jpg"
        />
        <Project
          title="Test 2"
          text="test Text for the project to display"
          imageRef="test.jpg"
        />
        <Project
          title="Test 3"
          text="test Text for the project to display"
          imageRef="test.jpg"
        />
      </div>
      <div>Footer</div>
    </DefaultPage>
  );
}
