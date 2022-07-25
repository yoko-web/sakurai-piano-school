import { FC } from "react";

type Props = {
  id: string;
  title: string;
  desc: string;
};

export const Rows: FC<Props> = ({ id, title, desc }) => {
  return (
    <div className="flex flex-col whitespace-normal leading-7 text-left">
      <div
        className="flex border-solid border-t-2 border-gray-100 hover:bg-gray-100"
        key={id}
      >
        <div className="p-2 md:flex-none whitespace-normal md:whitespace-nowrap sm:w-1/5">
          {title}
        </div>
        <div className="p-2">{desc}</div>
      </div>
    </div>
  );
};
