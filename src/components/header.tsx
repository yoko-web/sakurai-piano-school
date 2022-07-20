import { NextPage } from "next";
import React from "react";
import { Link as Scroll } from 'react-scroll';


export const HeaderBlock: NextPage = () => {
  return (
    <>
      <div
        className="min-h-[50rem] relative h-auto w-full py-[8rem] bg-center bg-cover flex justify-around"
        style={{
          backgroundImage: "url('/img/bg-meguro1.jpg')",
        }}
        id="page-top"
      >
        <div className="container text-center my-auto">
          <h1 className="mb-10 text-6xl text-white font-black">音の世界へ</h1>
          <h3 className="mb-10 text-xl text-white font-bold">
            あなたの音楽旅行は 櫻井ピアノスクール とともにここから始まります。
            <br />
            貴方の目的地はどこですか？
          </h3>
          <a
            className="inline-block bg-primary text-white text=lg px-10 py-6 rounded font-bold hover:bg-green-800/60 hover:pointer-events-auto"
          >
            <Scroll to="intro" smooth duration={300}>
            楽しさと、美しさを分かち合う
            </Scroll>
          </a>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
};
