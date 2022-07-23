import { Layout } from "../components/layout";
import { ProfileMain } from "../components/organisms/profile";

const Gallery = () => {
  return (
    <Layout>
      <div className="py-36 bg-primary">
        <div
          className=" bg-cover bg-top min-h-screen max-w-7xl mx-auto "
          style={{
            backgroundImage: "url('/img/profile2.webp')",
          }}
        >
          <ProfileMain />
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
