import React from "react";

export const HowToContact = () => {
  return (
    <span>
      LINE、
      <a href={`mailto:mintsakurai@rakuten.jp`} className=" text-primary">
        メール
      </a>
      、
      <a href="#contact" className="text-primary hover:pointer-events-auto">
        問い合わせフォーム
      </a>
      、ショートメールなどでお問い合わせいただけますとスムーズにご返答できます。
    </span>
  );
};
