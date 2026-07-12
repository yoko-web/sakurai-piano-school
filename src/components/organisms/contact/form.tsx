import { useRouter } from "next/router";
import { Heading3 } from "../../atoms";
import { siteMetadata } from "../../data/siteMetadata";
import { buildMailtoUrl, CONTACT_SUBJECT } from "../../../lib/mailto";

export const Form = () => {
  const router = useRouter();

  const handleRegisterUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const subject = CONTACT_SUBJECT;
    const body = `以下の内容でお問い合わせをさせていただきます。

お名前： ${form.fullname.value} 様

お問い合わせ内容:
${form.message.value}`;

    window.location.href = buildMailtoUrl(siteMetadata.email, subject, body);
    router.push("/success?mode=mailto");
  };

  return (
    <div className="container mx-auto font-semibold pb-16 sm:px-16">
      <Heading3 type="primary">お問い合わせフォーム</Heading3>
      <form onSubmit={handleRegisterUser}>
        <div className="mb-3 flex flex-col">
          <label htmlFor="email">お名前</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            className="mt-1 w-full p-3 focus:outline-primary bg-primary/10"
            placeholder="氏名"
            autoComplete="name"
            required
            minLength={3}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message">お問合せ内容</label>
          <textarea
            id="message"
            name="message"
            className="mt-1 w-full p-3 focus:outline-primary bg-primary/10"
            rows={3}
            placeholder=""
            required
          />
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="inline-block bg-primary text-white text=lg px-10 py-6 rounded font-bold hover:pointer-events-auto"
            type="submit"
          >
            送信内容を確認
          </button>
        </div>
      </form>
    </div>
  );
};
