import Head from "next/head";
import DefaultPage from "../components/templates/defaultPage";
import { Icon } from "../components/atoms/icon";
import ProfileImage from "../components/molecules/profileImage";
import Textbox from "../components/molecules/textbox";
import { Text } from "../components/atoms/text";
import Row from "../components/molecules/row";

export default function Home() {
  return (
    <DefaultPage>
      <ProfileImage />
      <Textbox>
        <Text
          text=" I’m a developer from Melbourne Australia. I focus on technologies such
          as React, Next.js, Node, etc"
        ></Text>
        <Row>
          <Icon imageFile="/images/github.svg" primary={true} />
          <Icon imageFile="/images/linkedin.svg" />
        </Row>
      </Textbox>

      <div>Project section</div>
      <div>Contact Section</div>
    </DefaultPage>
  );
}
// primary: true,
// size: "medium",
// label: "Button",
