/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Heading2, Heading3 } from "../../atoms";
import { Form } from "./form";

export const ContactForm = () => {
  return (
    <div
      className="pt-20 text-center px-2 sm:px-6 mx-auto sm:text-lg max-w-screen-lg"
      id="contact"
    >
      <Heading2 type="gray">お問い合わせ・アクセス</Heading2>
      <div className="text-left mb-20">
        <Heading3 type="gray">お問い合わせ</Heading3>
        <div>
          仕事中は電話に出られないことが多いので、LINE、メール、ショートメールなどでお問い合わせいただけますとスムーズにご返答できます。
        </div>
        <div className="flex flex-col py-10">
          <div className="flex max-w-screen-md">
            <div className="w-36">LINE</div>
            <div className="w-2/3">
              <a href="https://line.me/ti/p/nnSoct30EZ">
                <img loading="lazy" src="img/line-address.jpg" alt="" />
              </a>
              <a href="https://line.me/ti/p/nnSoct30EZ"></a>
            </div>
          </div>
          <div className="flex my-6">
            <div className="w-36">携帯電話</div>
            <div className="text-primary">090-3903-1452</div>
          </div>
        </div>

        <Form />
      </div>
      <div className="text-left">
        <Heading3 type="gray">アクセス</Heading3>
      </div>
    </div>
  );
};
