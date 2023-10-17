/* eslint-disable @next/next/no-img-element */
import Lottie from "lottie-react";
import { useState } from "react";
import musicnote from "./27209-music-notes.json";
import { NextPage } from "next";
import { CustomLink } from "./CustomLink";

const items = [
  { href: "/#", label: "トップ" },
  { href: "/#intro", label: "ご挨拶" },
  { href: "/#about", label: "ピアノレッスン" },
  { href: "/#course", label: "コース案内" },
  { href: "/#voice", label: "生徒さんの声" },
  { href: "/#faq", label: "よくあるご質問" },
  { href: "/#fee", label: "レッスン料金" },
  { href: "/profile", label: "プロフィール" },
  { href: "/#contact", label: "アクセス・お問合せ" },
  { href: "/#twitter", label: "最新情報" },
  { href: "/#other-activity", label: "その他の活動" },
  { href: "/gallery", label: "フォトギャラリー" },
  { href: "/youtube", label: "桂子の音の世界" },
];

export const NavBarMobile: NextPage = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  const handleOnToggleNav = () => {
    setIsNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <div className="fixed right-3 sm:right-5 top-10 z-50 px-2 pt-1 rounded xl:right-24">
        <button
          type="button"
          className="relative mx-1 w-18 h-24 rounded-tl-full bg-white/10 xl:w-30 xl:h-32 border-r-slate-200 border-r-2 border-dashed"
          aria-label="Toggle Menu"
          onClick={handleOnToggleNav}
        >
          <Lottie
            animationData={musicnote}
            className="h-24 w-18 xl:w-23 xl:h-32"
          />
        </button>
        <div
          className={`overflow-auto fixed w-full h-full top-0 right-0 bg-primary/90 z-10 transform ease-in-out duration-300 ${
            isNavShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col justify-start py-8 text-center md:mt-40 z-50">
            {items.map(({ href, label }) => {
              return (
                <CustomLink
                  key={href}
                  href={href}
                  className="flex flex-col p-2 mx-auto text-2xl lg:text-3xl font-mono font-semibold tracking-widest text-right text-gray-300 hover:text-gray-100 sm:p-3 sm:tracking-widest rounded-t-sm"
                >
                  <button onClick={handleOnToggleNav}>{label}</button>
                </CustomLink>
              );
            })}
            <a
              href="https://ameblo.jp/keikeiyanyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-2 mx-auto text-2xl font-medium tracking-widest text-right text-gray-300 hover:text-gray-100 sm:p-3 sm:tracking-widest rounded-t-sm"
            >
              ブログ
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};
