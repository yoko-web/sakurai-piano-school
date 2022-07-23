import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../components/layout";
import Lottie from "lottie-react";
import Mail from "../components/organisms/contact/95248-mailbox.json";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
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
