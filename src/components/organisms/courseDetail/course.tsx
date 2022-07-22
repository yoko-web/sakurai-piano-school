/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { Heading2 } from "../atoms";
import { Kids } from "./kids";
import { Student } from "./student";
import { Adult } from "./adult";
import { Grade } from "./grade";
import { Other } from "./other";
import { Conference } from "./conference";
import { Trial } from "./trial";

export const CourseDetail: NextPage = (props) => {
  return (
    <div
      className="py-28 text-center px-2 sm:px-6 mx-auto w-screen"
      id="course"
    >
      <Heading2 type="gray"> 🎹ピアノレッスン / コース案内詳細</Heading2>
      <div className="max-w-2/3">
        <Kids />
        <Student />
        <Adult />
        <Grade />
        <Other />
        <Conference />
        <Trial />
      </div>
    </div>
  );
};
