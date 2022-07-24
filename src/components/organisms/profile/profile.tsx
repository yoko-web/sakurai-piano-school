/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import { Heading2, Heading3 } from "../../atoms";

export const Profile: NextPage = () => {
  return (
    <div className="bg-primary px-2 sm:px-6 py-20 lg:py-36" id="intro">
      <Heading2 type="white"> 楽しさと、美しさを分かち合う</Heading2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="px-3 sm:px-5">
          <img
            loading="lazy"
            className="img-fluid"
            src="img/profile5_original.webp"
            alt="櫻井桂子"
          />
        </div>

        <div className="pr-3 text-left">
          <Heading3 type="white">ご挨拶</Heading3>
          <div className="prose lg:prose-xl prose-invert">
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
        </div>
      </div>
    </div>
  );
};
