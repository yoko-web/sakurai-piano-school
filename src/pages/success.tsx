import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "../components/layout";
import { siteMetadata } from "../components/data/siteMetadata";
import { buildMailtoUrl, CONTACT_SUBJECT } from "../lib/mailto";
import Lottie from "lottie-react";
import Mail from "../components/organisms/contact/95248-mailbox.json";
import Head from "next/head";

const MailtoSuccessMessage = () => (
  <div className="whitespace-pre-line break-words text-left">
    {`メールソフトが起動しました。
表示された内容をご確認のうえ、送信ボタンを押してお問い合わせを完了してください。

メールソフトが起動しない場合は、`}
    <a
      href={buildMailtoUrl(siteMetadata.email, CONTACT_SUBJECT)}
      className="text-primary"
    >
      {siteMetadata.email}
    </a>
    {" 宛に直接ご連絡ください。"}
  </div>
);

const Success: NextPage = () => {
  const router = useRouter();
  const customText =
    typeof router.query.text === "string" ? router.query.text : null;
  const isMailtoMode = router.query.mode === "mailto" || !customText;

  return (
    <Layout>
      <Head>
        <title>
          お問い合わせありがとうございます - 座間市のピアノ教室
          櫻井ピアノスクール
        </title>
      </Head>
      <div className="mx-auto flex flex-col items-center justify-center">
        <Lottie animationData={Mail} className="h-60 w-60" />
        <div className="container mt-20 p-3 text-lg">
          {isMailtoMode ? (
            <MailtoSuccessMessage />
          ) : (
            <div className="whitespace-pre-line break-words text-left">
              {customText}
            </div>
          )}
          <div className="mt-10 mb-20 flex justify-center">
            <Link
              href="/"
              className="inline-block rounded bg-primary px-10 py-6 text-lg font-bold text-white hover:pointer-events-auto"
            >
              トップに戻る
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
