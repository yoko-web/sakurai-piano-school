import { NextPage } from "next";
import React from "react";

export const HeaderBlock: NextPage = () => {
  return (
    <>
      <div className="masthead d-flex" id="page-top">
        <div className="container text-center my-auto">
          <h1
            className="mb-5"
            style={{ color: "rgb(241, 238, 238)", fontSize: "60px" }}
          >
            音の世界へ
          </h1>
          <h3
            className="mb-5"
            style={{ color: "rgb(241, 238, 238)", fontSize: "20px" }}
          >
            あなたの音楽旅行は 櫻井ピアノスクール とともにここから始まります。
            <br />
            貴方の目的地はどこですか？
          </h3>
          <a className="btn btn-primary btn-xl js-scroll-trigger" href="#intro">
            楽しさと、美しさを分かち合う
          </a>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
};
