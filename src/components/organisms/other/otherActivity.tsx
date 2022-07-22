import { Heading3 } from "../../atoms";
import { ButtonNav } from "../../atoms/button";
import { PriceLink } from "../../atoms/priceLink";

export const OtherActivity = () => {
  return (
    <div className="flex flex-col items-center sm:text-lg">
      <div className="mt-10 lg:mt-20 px-3 sm:px-10" id="other-activity">
        <Heading3 type="gray">ピアノレッスン以外の活動</Heading3>
        <div className="flex flex-col whitespace-normal leading-7 text-left">
          <div className="flex border-solid border-t-2 border-gray-100 hover:bg-gray-100">
            <div className="p-2 md:flex-none whitespace-normal md:whitespace-nowrap sm:w-1/5">
              合唱団、 声楽の伴奏
            </div>
            <div className="p-2">
              合唱団、声楽ほか伴奏ピアニスト活動合唱団の定期練習及び本番の伴奏、声楽や器楽の奏者からのご依頼で本番と本番に向けての伴奏を承っております。ピアノ伴奏に関しましては、
              <a
                href="https://www.piano.or.jp/concert/accompaniment/bansousha-list.html"
                target="_blank"
                rel="non noreferrer"
              >
                ピティナの伴奏者紹介サイト
              </a>
              も併せてご覧いただけます。
            </div>
          </div>
          <div className="flex border-solid border-t-2 border-gray-100 hover:bg-gray-100">
            <div className="p-2 md:flex-none whitespace-normal md:whitespace-nowrap sm:w-1/5">
              地域貢献
            </div>
            <div className="p-2">
              姉妹デュオ・ツインベル演奏活動姉妹でピアノデュオ・ツインベルというユニットを組んで地域貢献のために演奏活動を行っています。市の行事や学校、そのほかイベントのゲスト演奏など、ご依頼を承ります。
            </div>
          </div>
          <div className="flex border-solid border-t-2 border-gray-100 hover:bg-gray-100">
            <div className="p-2 md:flex-none whitespace-normal md:whitespace-nowrap sm:w-1/5">
              イベント活動
            </div>
            <div className="p-2">
              ピアニカアンサンブル活動ピアノ講師同士で4人の鍵盤ハーモニカアンサンブルユニット・ピアニカアベニューを組んで、地域のイベントに出演しています。
            </div>
          </div>
          <div className="flex border-solid border-t-2 border-gray-100 hover:bg-gray-100">
            <div className="p-2 md:flex-none whitespace-normal md:whitespace-nowrap sm:w-1/5">
              歌声喫茶
            </div>
            <div className="p-2">
              月一の歌声喫茶の開催地域の小さな喫茶店にて月1回、少人数で歌声喫茶を開いています。お越し頂ける人数が限られますのでご予約制になっています。
            </div>
          </div>
          <div className="flex border-solid border-t-2 border-gray-100 hover:bg-gray-100">
            <div className="p-2 md:flex-none whitespace-normal md:whitespace-nowrap sm:w-1/5">
              作曲・編曲
            </div>
            <div className="p-2">
              作編曲活動レッスンで使う曲をレベルに合わせて簡易に編曲、とは別にご依頼がありましたら作編曲を行っております。これまでに、神奈川県西部の高齢者健康体操の曲や、ご自身の作曲の手直し、伴奏付けや録音等行いました。鼻歌を譜面に起こして、伴奏を付けると素敵な曲が生まれます。
            </div>
          </div>
          <div className="mt-6">
            ピアノ伴奏に関しましては
            <a
              href="https://www.piano.or.jp/concert/accompaniment/bansousha-list.html"
              target="_blank"
              rel="non noreferrer"
              className="text-blue-500"
            >
              ピティナの伴奏者紹介サイト
            </a>
            も併せてご覧いただけます。
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10 w-60">
        <ButtonNav href="contact">ご依頼</ButtonNav>
      </div>
    </div>
  );
};
