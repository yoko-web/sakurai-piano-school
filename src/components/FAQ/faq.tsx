import Faq from "react-faq-component";
import { Heading2 } from "../atoms";
import { data } from "./data";

const styles = {
  bgColor: "",
  titleTextColor: "#126a87",
  rowTitleColor: "gray",
  rowContentColor: "grey",
  arrowColor: "#126a87",
};

const config = {
  animate: true,
  arrowIcon: "A",
  tabFocus: true,
};

export const FAQ = () => {
  return (
    <div className="py-28 text-center px-2 sm:px-6 mx-auto w-screen" id="about">
      <Heading2 type="gray"> よくあるご質問</Heading2>
      <div className="max-w-2/3 text-left">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};
