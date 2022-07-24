import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../components/layout";
import Lottie from "lottie-react";
import Mail from "../components/organisms/contact/95248-mailbox.json";
import Head from "next/head";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>
          お問い合わせありがとうございます - 座間市のピアノ教室
          櫻井ピアノスクール
        </title>
      </Head>
      <div className="mx-auto flex flex-col items-center justify-center">
        <Lottie animationData={Mail} className="h-60 w-60" />
        <div className="container mt-20 p-3 text-lg">
          <div className="whitespace-pre-line break-words text-left">
            {router.query.text}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
