/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const data = [
  {
    id: "1",
    title: "キッズ（入門）",
    sub0: "",
    src: "img/lesson-kids.webp",
    href: "#kids",
  },
  {
    id: "2",
    title: "スチューデント 初・中級・上級",
    sub0: "",
    src: "img/lesson-student.webp",
    href: "#student",
  },
  {
    id: "3",
    title: "成人 ヒーリングクラス・スキルクラス",
    sub0: "",
    src: "img/lesson-adult.webp",
    href: "#adult",
  },
  {
    id: "4",
    title: "グレード・検定・コンクール受験コース",
    sub0: "",
    src: "img/lesson-competition1.webp",
    href: "#grade",
  },
  {
    id: "5",
    title: "オンラインレッスン、及びオンライン組合せコース",
    sub0: "",
    src: "img/lesson-online.webp",
    href: "#online",
  },
  {
    id: "6",
    title: "その他",
    sub0: "親子レッスン / ご友人同士の連弾レッスン / ソルフェージュコース / 音大受験サポート",
    src: "img/mum-and-kid.webp",
    href: "#others",
  },
  {
    id: "7",
    title: "カンファレンス（無料）",
    sub0: "来室カンファレンス / オンラインカンファレンス\n\n(ご入会に関するご相談や質問をお受けしたり、少しピアノに触っていただけます。)",
    src: "img/piano.webp",
    href: "#conference",
  },
  {
    id: "8",
    title: "体験レッスン（有料）",
    sub0: "来室体験レッスン / オンライン体験レッスン\n\n(体験レッスンは、ご都合に合わせて様々な形の機会を提供しています。)",
    src: "img/piano.webp",
    href: "#trial",
  },
];

export const Tiles = () => {
  return (
    <ul className="flex justify-center mx-auto flex-wrap">
      {data.map((item) => {
        return (
          <li key={item.id} className="relative">
            <Link href={item.href}>
              <a aria-label="Read more">
                <div
                  className="flex p-1 h-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[0.99] duration-300 sm:p-3 max-w-[530px] w-screen"
                  style={{
                    background: `center/cover no-repeat url(${item.src})`,
                  }}
                >
                  <div className="absolute bottom-0 left-0 px-2 pt-2 sm:h-[90px] h-28 w-full bg-primary/80 align-middle">
                    <div className="mb-2 font-bold ">{item.title}</div>
                    <div className="text-sm">{item.sub0}</div>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
