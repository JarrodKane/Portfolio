import Head from "next/head";
import Link from "next/link";
import Layout from "../components/templates/layout";
import { Icon } from "../components/atoms/icon";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="testing">
          <Icon />
        </div>

        <main>TEST</main>
      </div>
    </Layout>
  );
}
