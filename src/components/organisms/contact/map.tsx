import { Heading2 } from "../../atoms";
import { Form } from "./form";

export const Map = () => {
  return (
    <div
      className="py-28 text-center px-2 sm:px-6 mx-auto sm:text-lg max-w-screen-lg"
      id="faq"
    >
      <Heading2 type="gray">お問合せ</Heading2>
      <div className="text-left">
        <Form />
      </div>
    </div>
  );
};
