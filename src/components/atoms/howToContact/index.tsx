import React from "react";
import { siteMetadata } from "../../data/siteMetadata";

export const HowToContact = () => {
  return (
    <span>
      LINE、
      <a href={`mailto:${siteMetadata.email}`} className=" text-primary">
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
