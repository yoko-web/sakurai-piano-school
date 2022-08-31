import Head from "next/head";
import { Layout } from "../components/layout";
import { ProfileMain } from "../components/organisms/profile";

const Profile = () => {
  return (
    <div className="bg-primary">
      <Layout>
        <Head>
          <title>
            講師プロフィール - 座間市のピアノ教室 櫻井ピアノスクール
          </title>
        </Head>
        <div className=" bg-primary lg:py-20">
          <div
            className="bg-cover bg-top max-w-4xl mx-auto"
            style={{
              backgroundImage: "url('/img/profile2.webp')",
            }}
          >
            <ProfileMain />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
