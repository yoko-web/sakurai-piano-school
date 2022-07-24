/* eslint-disable @next/next/no-img-element */

const data = [
  {
    id: "1",
    title: "キッズ（入門）",
    src: "img/lesson-kids.webp",
    href: "#kids",
  },
  {
    id: "2",
    title: "スチューデント 初・中級・上級",
    src: "img/lesson-student.webp",
    href: "#student",
  },
  {
    id: "3",
    title: "成人 ヒーリングクラス・スキルクラス",
    src: "img/lesson-adult.webp",
    href: "#adult",
  },
  {
    id: "4",
    title: "グレード・検定・コンクール受験コース",
    src: "img/lesson-competition1.webp",
    href: "#grade",
  },
  {
    id: "5",
    title: "オンラインレッスン、及びオンライン組合せコース",
    src: "img/lesson-online.webp",
    href: "#online",
  },
  {
    id: "6",
    title: "その他",
    sub0: "親子レッスン\n\n",
    sub1: "ご友人同士の連弾レッスン\n\n",
    sub2: "ソルフェージュコース\n\n",
    sub3: "音大受験サポート",
    src: "img/mum-and-kid.webp",
    href: "#others",
  },
  {
    id: "7",
    title: "カンファレンス（無料）",
    sub0: "来室カンファレンス\n\n",
    sub1: "オンラインカンファレンス\n\n",
    sub2: "(ご入会に関するご相談や質問をお受けしたり、少しピアノに触っていただけます。)",
    src: "img/piano.webp",
    href: "#conference",
  },
  {
    id: "8",
    title: "体験レッスン（有料）",
    sub0: "来室体験レッスン\n\n",
    sub1: "オンライン体験レッスン\n\n",
    sub2: "(体験レッスンは、ご都合に合わせて様々な形の機会を提供しています。)",
    src: "img/piano.webp",
    href: "#trial",
  },
];

export const Tiles = () => {
  return (
    <div className="flex justify-center mx-auto flex-wrap font-sans">
      {data.map((item) => {
        return (
          <div
            className="relative max-w-[530px] bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 align-baseline"
            key={item.id}
          >
            <a href={item.href}>
              <div className="absolute bottom-0 left-0 w-full bg-primary/80 rounded">
                <div className="pt-6 px-3 mb-1 text-lg font-bold">
                  {item.title}
                </div>
                <div className="mb-1 text-lg text-left pl-2 ml-2">
                  {!item.sub0 ? null : item.sub0}
                  {!item.sub1 ? null : item.sub1}
                  <br />
                  {!item.sub2 ? null : item.sub2}
                  {!item.sub3 ? null : item.sub3}
                </div>
              </div>
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
    </div>
  );
};
