import { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Link as Scroll } from "react-scroll";
import * as React from "react";

type Props = {
  children: ReactNode;
  href: HTMLAttributeAnchorTarget;
};

export const ButtonNav: FC<Props> = (props) => {
  return (
    <div className="inline-block bg-primary text-white text=lg px-10 py-6 rounded font-bold hover:pointer-events-auto">
      <Scroll to={props.href} smooth duration={300}>
        {props.children}
      </Scroll>
    </div>
  );
};
