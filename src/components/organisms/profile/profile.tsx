/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { Heading2 } from "../../atoms";

export const Profile: NextPage = () => {
  return (
    <div
      className="py-28 bg-primary text-white text-center px-2 sm:px-6"
      id="intro"
    >
      <Heading2 type="white"> 楽しさと、美しさを分かち合う</Heading2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="px-3 sm:px-5">
          <img
            loading="lazy"
            className="img-fluid"
            src="img/profile5_original.jpg"
            alt="櫻井桂子"
          />
        </div>

        <div className="pr-3 text-left">
          <h2 className="text-center text-2xl leading-loose tracking-wide">
            ご挨拶
          </h2>
          <div>
            本日は櫻井ピアノスクールのホームページをご訪問いただき、ありがとうございます。
            とにかく楽しいことが大好き、ピアノ講師・ピアニストの櫻井桂子です。
          </div>

          <div>
            音楽を通してワクワクすること。みんなが楽しくなることをプロデュースすること。
            音楽への情熱を楽しさにすること。これらを最も大切なことと考え、日々レッスンに当たらさせていただいています。
          </div>

          <div>
            「楽しさ」を追求する一方で、もうひとつ、私が大切に考えていることは、「美しさ」です。
            身体、手のフォームの美しさが音色の美しさにつながり、呼吸を感じながら表現を考えることが曲の美しさへとつながり、美しく演奏できた時、この上ない楽しさと喜びを感じます。さらに深く弾き進めて行くと、心の内をピアノに投影していくことさえできる。音楽は人生、とも言えます。
          </div>

          <div>
            「美しさ」の先に本当の楽しさが広がっている。このことをレッスンを通して皆様にお伝えするとともに、レッスンを通して私自身もまた一緒に考え、学び、共に向上していきます。
            <br />
            「楽しさと、美しさを分かち合う」貴方もこの輪の中に入りませんか？
          </div>
        </div>
        <div className="container text-center">
          <a
            href="#profile-main"
            className="bg-gray-800 hover:bg-gray-600 rounded px-3 py-2"
          >
            櫻井桂子について、もっと
          </a>
        </div>
      </div>
    </div>
  );
};