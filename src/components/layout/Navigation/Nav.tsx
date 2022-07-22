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
  { href: "/#fee", label: "レッスン料" },
  { href: "/#profile-main", label: "プロフィール" },
  { href: "/#contact", label: "Contact" },
  { href: "/#other-activity", label: "その他の活動" },
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
          className="relative mx-1 w-24 h-24 rounded-full bg-white/50 xl:w-32 xl:h-32"
          aria-label="Toggle Menu"
          onClick={handleOnToggleNav}
        >
          <div className="absolute transform translate-x-[80%] text-lg text-black shadow-white animate-pulse font-semibold tracking-widest z-50 font-mono">
            ナビ
          </div>
          <div className="absolute transform translate-x-[80%] text-lg text-white shadow-white animate-pulse font-bold tracking-wider font-mono">
            ナビ
          </div>
          <Lottie
            animationData={musicnote}
            className="h-24 w-24 xl:w-23 xl:h-32"
          />
        </button>
        <div
          className={`overflow-auto fixed w-full h-full top-0 right-0 bg-primary/80 z-10 transform ease-in-out duration-300 ${
            isNavShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col justify-start py-8 text-center md:mt-40">
            {items.map(({ href, label }) => {
              return (
                <CustomLink
                  key={href}
                  href={href}
                  className="flex flex-col p-2 mx-auto text-2xl font-medium tracking-widest text-right text-gray-300 hover:text-gray-100 sm:p-3 sm:tracking-widest rounded-t-sm"
                >
                  <button onClick={handleOnToggleNav}>{label}</button>
                </CustomLink>
              );
            })}
            <CustomLink
              href="/gallery"
              className="flex flex-col p-2 mx-auto text-2xl font-medium tracking-widest text-right text-gray-300 hover:text-gray-100 sm:p-3 sm:tracking-widest rounded-t-sm"
            >
              フォトギャラリー
            </CustomLink>
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
