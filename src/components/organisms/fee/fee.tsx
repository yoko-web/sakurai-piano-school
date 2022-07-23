import { Heading2 } from "../../atoms";
import { siteMetadata } from "../../data/siteMetaData";
import { Table } from "./table";

export const Fee = () => {
  return (
    <div
      className="py-28 text-center px-2 sm:px-6 mx-auto w-screen sm:text-lg max-w-screen-lg"
      id="fee"
    >
      <Heading2 type="gray">レッスン料金</Heading2>
      <div className="mt-6 mb-8 text-left">
        どのコースも、マンツーマンが基本です。レッスンは基本コース（年間42回）のほかに、月３回、月2回、月1回など、ご都合に合わせて開設いたします。
        レッスン時間も、30分・40分・1時間など選んでいただけます。
        <br />
        レッスンの概要は、
        <a className="text-primary" href="#kids">
          キッズ入門
        </a>
        、
        <a className="text-primary" href="#student">
          スチューデント
        </a>
        、
        <a className="text-primary" href="#adults">
          成人
        </a>
        、
        <a className="text-primary" href="#grade">
          グレード・検定・コンクール受験コース
        </a>
        、
        <a className="text-primary" href="#online">
          オンラインレッスン、及びオンライン組合せコース
        </a>
        を参照ください。また、
        <a className="text-primary" href="#trial">
          体験レッスン
        </a>
        は、ご都合に合わせて様々な形の機会を提供しています。
      </div>

      <Table />
      <div className="mt-6 mb-8 text-left">
        <div>
          ※ご要望の多い土曜日レッスン（基本コース）につきましては、年間40レッスンにて、開講可能となりました。
        </div>
        <div>※レベルの目安</div>
        <div>
          <ul>
            <li>初級: 入門からバイエル終了程度まで</li>
            <li>中級: ツェルニー100番、ブルグミュラー25練習曲程度から</li>
            <li>上級: ツェルニー40番程度から</li>
          </ul>
        </div>
        <div>※入会金は3000円です。</div>
        <div>
          （ご兄弟やご家族お二人目から免除。ご友人ご紹介につきましては、ご紹介者様、ご入会者様ともに特典がございます。）
          <br />
          その他のコース・詳細は、
          <a href="https://line.me/ti/p/nnSoct30EZ">LINE</a>、
          <a href={`mailto:mintsakurai@rakuten.jp`} className=" text-primary">
            メール
          </a>
          、またはお電話でお問い合わせください。
        </div>
      </div>
    </div>
  );
};
