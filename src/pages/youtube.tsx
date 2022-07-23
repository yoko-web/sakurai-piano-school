import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../components/layout";
import { YouTubeTile } from "../components/molecules/youtube";
import { Heading2 } from "../components/atoms";

const YouTubePage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="mx-auto mt-6">
        <Heading2 type="primary">桂子の音の世界</Heading2>
        <div className="container mt-20">
          <YouTubeTile />
        </div>
      </div>
    </Layout>
  );
};

export default YouTubePage;
