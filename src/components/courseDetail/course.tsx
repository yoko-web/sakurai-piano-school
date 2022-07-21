/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { Heading2 } from "../atoms";

const data = [
  {
    id: "1",
    title: "キッズ（入門）",
    url: {
      background: 'center/cover no-repeat url("img/lesson-kids.jpg")',
    },
    src: "img/lesson-kids.jpg",
    href: "#kids",
  },
  {
    id: "2",
    title: "スチューデント 初・中級・上級",
    url: {
      background: 'center/cover no-repeat url("img/lesson-student.jpg")',
    },
    src: "img/lesson-student.jpg",
    href: "#student",
  },
  {
    id: "3",
    title: "成人　ヒーリングクラス・スキルクラス",
    url: {
      background: 'center/cover no-repeat url("img/lesson-adult.jpg")',
    },
    src: "img/lesson-adult.jpg",
    href: "#adult",
  },
  {
    id: "4",
    title: "グレード・検定・コンクール受験コース",
    url: {
      background: 'center/cover no-repeat url("img/lesson-competition1.jpg")',
    },
    src: "img/lesson-competition1.jpg",
    href: "#grade",
  },
  {
    id: "5",
    title: "オンラインレッスン、及びオンライン組合せコース",
    url: {
      background: 'center/cover no-repeat url("img/lesson-online.jpg")',
    },
    src: "img/lesson-online.jpg",
    href: "#online",
  },
];

export const CourseDetail: NextPage = (props) => {
  return (
    <div className="py-28 text-center px-2 sm:px-6 mx-auto w-screen" id="about">
      <Heading2 type="gray"> 🎹ピアノレッスン / コース案内詳細</Heading2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
