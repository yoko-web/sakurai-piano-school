import cc from "classcat";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "white" | "gray";
};

export const Heading2: FC<Props> = (props) => {
  return (
    <div className="text-3xl lg:text-5xl text-center  mb-5 sm:mb-16">
      <h2
        className={cc([
          "font-bold tracking-wide",
          {
            "text-white": props.type === "white",
            "text-gray-800": props.type === "gray",
          },
        ])}
      >
        {props.children}
      </h2>
    </div>
  );
};
export const Heading3: FC<Props> = (props) => {
  return (
    <div className="text-2xl lg:text-3xl text-center  mb-3 sm:mb-8">
      <h3
        className={cc([
          "font-bold tracking-wide",
          {
            "text-white": props.type === "white",
            "text-gray-800": props.type === "gray",
          },
        ])}
      >
        {props.children}
      </h3>
    </div>
  );
};