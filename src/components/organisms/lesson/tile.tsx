/* eslint-disable @next/next/no-img-element */

const data = [
  {
    id: "1",
    title: "キッズ（入門）",
    src: "img/lesson-kids.jpg",
    href: "#kids",
  },
  {
    id: "2",
    title: "スチューデント 初・中級・上級",
    src: "img/lesson-student.jpg",
    href: "#student",
  },
  {
    id: "3",
    title: "成人 ヒーリングクラス・スキルクラス",
    src: "img/lesson-adult.jpg",
    href: "#adult",
  },
  {
    id: "4",
    title: "グレード・検定・コンクール受験コース",
    src: "img/lesson-competition1.jpg",
    href: "#grade",
  },
  {
    id: "5",
    title: "オンラインレッスン、及びオンライン組合せコース",
    src: "img/lesson-online.jpg",
    href: "#online",
  },
];

export const Tiles = () => {
  return (
    <div className="flex justify-center mx-auto flex-wrap font-sans">
      {data.map((item) => {
        return (
          <div
            className="relative max-w-[530px] mb-2 mr-2 bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 align-baseline"
            key={item.id}
          >
            <a href={item.href}>
              <div className="absolute bottom-3 right-3 bg-primary/80">
                <div className="mb-1">{item.title}</div>
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

      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 max-w-[530px] mb-2 mr-2 bg-primary">
        <a className="relative" href="#others">
          <div className="absolute bottom-3 right-3 bg-primary/80">
            <div className="mb-0">その他</div>
            <ul>
              <li>親子レッスン</li>
              <li>ご友人同士の連弾レッスン</li>
              <li>ソルフェージュコース</li>
              <li>音大受験サポート</li>
            </ul>
          </div>
          <img
            loading="lazy"
            className="max-w-full h-auto"
            src="img/mum-and-kid.jpg"
            alt="その他"
          />
        </a>
      </div>

      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 max-w-[530px] mb-2 mr-2 bg-primary place-items-center">
        <a className="relative" href="#conference">
          <div className="absolute bottom-3 right-3 bg-primary/80">
            <div className="mb-0">カンファレンス（無料）</div>
            <ul>
              <li>来室カンファレンス</li>
              <li>
                オンラインカンファレンス
                <br />
                (ご入会に関するご相談や質問をお受けしたり、少しピアノに触っていただけます。)
              </li>
            </ul>
          </div>
          <img
            loading="lazy"
            className="max-w-full h-auto"
            src="img/piano.jpg"
            alt="体験レッスン"
          />
        </a>
      </div>
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 max-w-[530px] mb-2 mr-2 bg-primary">
        <a className="relative" href="#trial">
          <div className="absolute bottom-3 right-3 bg-primary/80">
            <div className="mb-0">体験レッスン（有料）</div>
            <ul>
              <li>来室体験レッスン</li>
              <li>オンライン体験レッスン</li>
              <li>
                (体験レッスンは、ご都合に合わせて様々な形の機会を提供しています。)
              </li>
            </ul>
          </div>
          <img
            loading="lazy"
            className="max-w-full h-auto"
            src="img/piano.jpg"
            alt="体験レッスン"
          />
        </a>
      </div>
    </div>
  );
};
