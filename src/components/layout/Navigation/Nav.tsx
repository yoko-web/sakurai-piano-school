/* eslint-disable @next/next/no-img-element */
import Lottie from "lottie-react";
import { useState } from "react";
import musicnote from "./27209-music-notes.json";
import Link from "next/link";
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
  { href: "/#profile-main", label: "🍭プロフィール" },
  { href: "/#contact", label: "Contact" },
  { href: "/#other", label: "その他の活動" },
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
      <div className="fixed right-5 top-10 z-50 px-2 pt-1 rounded xl:right-24">
        <button
          type="button"
          className="relative mx-1 w-24 h-24 rounded-full bg-white/60 xl:w-32 xl:h-32"
          aria-label="Toggle Menu"
          onClick={handleOnToggleNav}
        >
          <div className="absolute transform translate-x-[75%] capitalize text-lg text-gray-100">
            ナビゲーション
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
          {/* <button
            type="button"
            aria-label="toggle modal"
            className="fixed -top-7 w-full h-4/5 focus:outline-none cursor-auto"
            onClick={handleOnToggleNav}
          ></button> */}
          <nav className="flex flex-col py-8 text-center md:mt-40">
            {items.map(({ href, label }) => {
              return (
                <CustomLink
                  key={href}
                  href={href}
                  onClick={handleOnToggleNav}
                  className="flex flex-col p-2 mx-auto text-2xl font-medium tracking-widest text-right text-gray-300 hover:text-gray-100 sm:p-3 sm:tracking-widest rounded-t-sm"
                >
                  {label}
                </CustomLink>
              );
            })}
            <Link
              href="/gallery"
              className="flex flex-col p-2 mx-auto text-2xl font-medium tracking-widest text-right text-gray-300 hover:text-gray-100 sm:p-3 sm:tracking-widest rounded-t-sm"
            >
              フォトギャラリー
            </Link>
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
