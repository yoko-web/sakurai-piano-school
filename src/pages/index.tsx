import type { NextPage } from "next";
import Head from "next/head";
import { HeaderBlock } from "../components/header";
import { IconsBlock } from "../components/icons";

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>音の世界へ - 座間市のピアノ教室 櫻井ピアノスクール</title>

        <meta
          name="description"
          content="音の世界へ - 座間市のピアノ教室 櫻井ピアノスクール"
        />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      <HeaderBlock />
      <IconsBlock />
    </div>
  );
};

export default Home;
