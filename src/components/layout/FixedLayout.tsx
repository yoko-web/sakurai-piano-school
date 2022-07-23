import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";

import { NavBarMobile } from "./Navigation";
import { Footer } from "./footer";
import { HeaderBlock } from "./header";

type Props = {
  className?: string;
  theme?: "home" | "sub";
  children: ReactNode;
  photographer?: "Yoshiko Yamashita" | string;
};

export const Layout: FC<Props> = (props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-start w-screen">
      <NavBarMobile />
      <main className="mx-auto md:w-full">{props.children}</main>
      <Footer />
    </div>
    // </div>
  );
};
