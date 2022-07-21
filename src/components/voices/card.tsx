import { FC } from "react";
import { data } from "./data";

type Props = {
  id?: string;
  title?: string;
  who?: string;
  description?: string;
};

export const VoiceCollection: FC<Props> = (props) => {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-3 lg:grid-cols-3">
      {data.map((item) => {
        return (
          <li key={item.id} className="bg-white text-gray-800 p-3 shadow-sm">
            <div className="flex flex-col px-2 pt-2 w-full">
              <div className="flex mb-2 font-bold leading-tight">
                <div className="">{item.title}</div>
                <div className="">{item.who}</div>
              </div>
              <div className="text-sm text-ellipsis line-clamp-4">
                {item.description}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
