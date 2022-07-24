import { NextPage } from "next";
import { NavButton } from "../atoms";

export const HeaderBlock: NextPage = () => {
  return (
    <div
      className="h-screen relative w-full py-[8rem] bg-center bg-cover flex justify-around"
      style={{
        backgroundImage: "url('/img/bg-meguro1.webp')",
      }}
      id="page-top"
    >
      <div className="absolute max-h-screen min-w-screen bg-white/10 top-[20%] p-20">
        <div className="container text-center my-auto">
          <h1 className="mb-16 text-5xl  md:text-7xl text-white font-black shadow-sm sm:bg-none whitespace-nowrap">
            音の世界へ
          </h1>
          <h3 className="mb-10 text-xl md:text-2xl text-white font-bold">
            あなたの音楽旅行は 櫻井ピアノスクール とともにここから始まります。
            <br />
            貴方の目的地はどこですか？
          </h3>
          <div className="py-10">
            <NavButton href="intro">楽しさと、美しさを分かち合う</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
};
