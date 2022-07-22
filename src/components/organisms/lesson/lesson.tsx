import { NextPage } from "next";
import { Heading2 } from "../../atoms";
import { Tiles } from "./tile";

export const LessonSection: NextPage = (props) => {
  return (
    <div
      className="py-28 text-white text-center px-2 sm:px-6 mx-auto w-screen"
      id="about"
    >
      <div className="flex flex-col justify-center">
        <Heading2 type="gray"> 🎹 ピアノ レッスン / コース案内</Heading2>
      </div>
      <Tiles />
    </div>
  );
};
