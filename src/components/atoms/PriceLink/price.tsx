import cc from "classcat";
import { Link as Scroll } from "react-scroll";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "free" | "course" | "charge";
};

export const PriceLink: FC<Props> = (props) => {
  return (
    <Scroll to="fee" smooth duration={300}>
      <span
        className={cc([
          "text-[10px] text-white rounded p-1 whitespace-nowrap",
          {
            "bg-gray-100 text-gray-800": props.type === "free",
            "bg-gray-500 font-semibold": props.type === "course",
            "bg-gray-200 text-gray-800": props.type === "charge",
          },
        ])}
      >
        {props.children}
      </span>
    </Scroll>
  );
};
