import React from "react";

import DefaultPage from "../components/templates/defaultPage";
import ProfileImage from "../components/molecules/profileImage";
import TextBox from "../components/molecules/textBox";
import { Text } from "../components/atoms/text";

function Home() {
  return (
    <DefaultPage>
      <ProfileImage>Intro section</ProfileImage>
      <TextBox>
        <Text
          text=" I’m a developer from Melbourne Australia. I focus on technologies such
          as React, Next.js, Node, etc"
        ></Text>
      </TextBox>

      <div>Project section</div>
      <div>Contact Section</div>
    </DefaultPage>
  );
}

export default Home;
