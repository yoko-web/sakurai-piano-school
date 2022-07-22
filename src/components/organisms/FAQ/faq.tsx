import Faq from "react-faq-component";
import { Heading2 } from "../../atoms";
import { data } from "./data";

const config = {
  animate: true,
  arrowIcon: "A",
  tabFocus: true,
};

export const FAQ = () => {
  return (
    <div
      className="py-28 text-center px-2 sm:px-6 mx-auto max-w-2xl sm:text-lg"
      id="faq"
    >
      <Heading2 type="gray"> よくあるご質問</Heading2>
      <div className="max-w-2/3 text-left">
        <Faq data={data} config={config} />
      </div>
    </div>
  );
};
