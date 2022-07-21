import Head from "next/head";
import { HeaderBlock } from "../components/header";
import { IconsBlock } from "../components/icons";
import { useInView } from "react-intersection-observer";
import { FC, ReactNode } from "react";
import { Profile } from "../components/profile";
import { LessonSection } from "../components/lesson";
import { CourseDetail } from "../components/courseDetail/course";

type Props = {
  className?: string;
  children: ReactNode;
  inView?: boolean;
};

const Home: FC<Props> = () => {
  const { inView, ref } = useInView({ threshold: 0 });
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
      <Profile />
      <LessonSection />
      <CourseDetail />
      <IconsBlock inView={inView} />
    </div>
  );
};

export default Home;
