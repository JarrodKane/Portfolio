import Head from "next/head";
import Link from "next/link";
import DefaultPage from "../components/templates/defaultPage";
import { Icon } from "../components/atoms/icon";
import ProfileImage from "../components/molecules/profileImage";

export default function Home() {
  return (
    <DefaultPage>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="testing">
          <Icon imageFile="./images/github.svg" />
          <ProfileImage />
        </div>

        <main>TEST</main>
      </div>
    </DefaultPage>
  );
}
