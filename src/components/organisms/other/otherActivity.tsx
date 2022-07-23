import { Heading3 } from "../../atoms";
import { NavButton } from "../../atoms";

const data = [
  {
    id: "1",
    title: "合唱団、 声楽の伴奏",
    desc: "合唱団、声楽ほか伴奏ピアニスト活動合唱団の定期練習及び本番の伴奏、声楽や器楽の奏者からのご依頼で本番と本番に向けての伴奏を承っております。ピアノ伴奏に関しましては、",
    linkTitle: "ピティナの伴奏者紹介サイト",
    desc1: "も併せてご覧いただけます。",
    href: "https://www.piano.or.jp/concert/accompaniment/bansousha-list.html",
  },
  {
    id: "2",
    title: "地域貢献",
    desc: "姉妹デュオ・ツインベル演奏活動姉妹でピアノデュオ・ツインベルというユニットを組んで地域貢献のために演奏活動を行っています。市の行事や学校、そのほかイベントのゲスト演奏など、ご依頼を承ります。",
  },
  {
    id: "3",
    title: "イベント活動",
    desc: "ピアニカアンサンブル活動ピアノ講師同士で4人の鍵盤ハーモニカアンサンブルユニット・ピアニカアベニューを組んで、地域のイベントに出演しています。",
  },
  {
    id: "4",
    title: "歌声喫茶",
    desc: "月一の歌声喫茶の開催地域の小さな喫茶店にて月1回、少人数で歌声喫茶を開いています。お越し頂ける人数が限られますのでご予約制になっています。",
  },
  {
    id: "5",
    title: "作曲・編曲",
    desc: "作編曲活動レッスンで使う曲をレベルに合わせて簡易に編曲、とは別にご依頼がありましたら作編曲を行っております。これまでに、神奈川県西部の高齢者健康体操の曲や、ご自身の作曲の手直し、伴奏付けや録音等行いました。鼻歌を譜面に起こして、伴奏を付けると素敵な曲が生まれます。",
  },
];

export const OtherActivity = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="flex flex-col sm:text-lg">
        <div className="mt-10 lg:mt-20 px-1 sm:px-3" id="other-activity">
          <Heading3 type="gray">ピアノレッスン以外の活動</Heading3>
          <div className="flex flex-col whitespace-normal leading-7 text-left">
            {data.map((item) => {
              return (
                <div
                  className="flex border-solid border-t-2 border-gray-100 hover:bg-gray-100"
                  key={item.id}
                >
                  <div className="p-2 md:flex-none whitespace-normal md:whitespace-nowrap sm:w-1/5">
                    {item.title}
                  </div>
                  <div className="p-2">
                    {item.desc}
                    <span className="text-primary">
                      {!item.linkTitle ? null : item.linkTitle}
                    </span>
                    <a href={item.href} target="_blank" rel="non noreferrer">
                      {item.linkTitle}
                    </a>
                    {item.desc1}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            ピアノ伴奏に関しましては
            <a
              href="https://www.piano.or.jp/concert/accompaniment/bansousha-list.html"
              target="_blank"
              rel="non noreferrer"
              className="text-primary"
            >
              ピティナの伴奏者紹介サイト
            </a>
            も併せてご覧いただけます。
          </div>
        </div>
        <div className="mx-auto my-10">
          <NavButton href="contact">ご依頼</NavButton>
        </div>
      </div>
    </div>
  );
};
