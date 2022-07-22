import { Heading2 } from "../../atoms";
import { Table } from "./table";

export const Fee = () => {
  return (
    <div className="py-28 text-center px-2 sm:px-6 mx-auto w-screen" id="fee">
      <Heading2 type="gray">レッスン料</Heading2>
      <div className="mt-6 mb-8 text-left">
        どのコースも、マンツーマンが基本です。レッスンは基本コース（年間42回）のほかに、月３回、月2回、月1回など、ご都合に合わせて開設いたします。
        レッスン時間も、30分・40分・1時間など選んでいただけます。
        <br />
        レッスンの概要は、
        <a className="text-blue-500" href="#kids">
          キッズ入門
        </a>
        、
        <a className="text-blue-500" href="#student">
          スチューデント
        </a>
        、
        <a className="text-blue-500" href="#adults">
          成人
        </a>
        、
        <a className="text-blue-500" href="#grade">
          グレード・検定・コンクール受験コース
        </a>
        、
        <a className="text-blue-500" href="#online">
          オンラインレッスン、及びオンライン組合せコース
        </a>
        を参照ください。また、
        <a className="text-blue-500" href="#trial">
          体験レッスン
        </a>
        は、ご都合に合わせて様々な形の機会を提供しています。
      </div>

      <Table />
    </div>
  );
};
