/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { Heading2 } from "../../atoms";
import { Kids } from "./kids";
import { Student } from "./student";
import { Adult } from "./adult";
import { Grade } from "./grade";
import { Other } from "./other";
import { Conference } from "./conference";
import { Trial } from "./trial";
import { Online } from "./online";

export const CourseDetail: NextPage = (props) => {
  return (
    <div
      className="py-28 text-center px-2 sm:px-6 mx-auto w-screen sm:text-lg max-w-screen-lg"
      id="course"
    >
      <Heading2 type="gray"> 🎹ピアノレッスン / コース案内詳細</Heading2>
      <div className="mt-6 mb-8 text-left">
        どのコースも、マンツーマンが基本です。レッスンは基本コース（年間42回）のほかに、月３回、月2回、月1回など、ご都合に合わせて開設いたします。
        レッスン時間も、30分・40分・1時間など選んでいただけます。
        <br />
        レッスンの概要は、下表
        <a
          className="text-primary"
          href="#kids"
          aria-label="link to kids detail"
        >
          キッズ入門
        </a>
        、
        <a
          className="text-primary"
          href="#student"
          aria-label="link to student detail"
        >
          スチューデント
        </a>
        、
        <a
          className="text-primary"
          href="#adults"
          aria-label="link to adult detail"
        >
          成人
        </a>
        、
        <a
          className="text-primary"
          href="#grade"
          aria-label="link to grade detail"
        >
          グレード・検定・コンクール受験コース
        </a>
        、
        <a
          className="text-primary"
          href="#online"
          aria-label="link to online detail"
        >
          オンラインレッスン、及びオンライン組合せコース
        </a>
        を参照ください。また、
        <a className="text-primary" href="#trial">
          体験レッスン
        </a>
        は、ご都合に合わせて様々な形の機会を提供しています。
      </div>
      <div className="max-w-2/3">
        <Kids />
        <Student />
        <Adult />
        <Grade />
        <Online />
        <Other />
        <Conference />
        <Trial />
      </div>
    </div>
  );
};
