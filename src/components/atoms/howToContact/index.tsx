import React from "react";

export const HowToContact = () => {
  return (
    <span>
      LINE、
      <a href={`mailto:yoko_iwasakijp@yahoo.co.jp`} className=" text-primary">
        メール
      </a>
      、
      <a href="#contact2" className="text-primary hover:pointer-events-auto">
        問い合わせフォーム
      </a>
      、ショートメールなどでお問い合わせいただけますとスムーズにご返答できます。
    </span>
  );
};
