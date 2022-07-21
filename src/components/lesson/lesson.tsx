/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

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

export const LessonSection: NextPage = (props) => {
  return (
    <div
      className="py-28 text-white text-center px-2 sm:px-6 mx-auto w-screen"
      id="about"
    >
      <div className="flex flex-col justify-center">
        <div className="text-5xl text-center">
          <h2 className="mb-5 text-gray-800 font-bold tracking-wide">
            🎹 ピアノ レッスン / コース案内
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 mx-auto gap-4 items-center">
          {data.map((item) => {
            return (
              <div className="relative max-w-[530px] mb-4" key={item.id}>
                <a className="" href={item.href}>
                  <span className="absolute bottom-3 right-3 bg-primary/80">
                    <div className="mb-1">{item.title}</div>
                  </span>
                  <img
                    loading="lazy"
                    className="max-w-full h-auto"
                    src={item.src}
                    alt={item.title}
                  />
                </a>
              </div>
            );
          })}

          <div className="hover:">
            <a className="relative" href="#others">
              <span className="absolute bottom-3 right-3 bg-primary/80">
                <div className="mb-0">その他</div>
                <ul>
                  <li>親子レッスン</li>
                  <li>ご友人同士の連弾レッスン</li>
                  <li>ソルフェージュコース</li>
                  <li>音大受験サポート</li>
                </ul>
              </span>
              <img
                loading="lazy"
                className="img-fluid"
                src="img/mum-and-kid.jpg"
                alt="その他"
              />
            </a>
          </div>

          <div className="col-lg-6">
            <a className="relative" href="#conference">
              <span className="absolute bottom-3 right-3 bg-primary/80">
                <div className="mb-0">カンファレンス（無料）</div>
                <ul>
                  <li>来室カンファレンス</li>
                  <li>
                    オンラインカンファレンス
                    <br />
                    (ご入会に関するご相談や質問をお受けしたり、少しピアノに触っていただけます。)
                  </li>
                </ul>
              </span>
              <img
                loading="lazy"
                className="img-fluid"
                src="img/piano.jpg"
                alt="体験レッスン"
              />
            </a>
          </div>
          <div className="">
            <a className="relative" href="#trial">
              <span className="absolute bottom-3 right-3 bg-primary/80">
                <span className="caption-content">
                  <div className="mb-0">体験レッスン（有料）</div>
                  <ul>
                    <li>来室体験レッスン</li>
                    <li>オンライン体験レッスン</li>
                    <li>
                      (体験レッスンは、ご都合に合わせて様々な形の機会を提供しています。)
                    </li>
                  </ul>
                </span>
              </span>
              <img
                loading="lazy"
                className="img-fluid"
                src="img/piano.jpg"
                alt="体験レッスン"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
