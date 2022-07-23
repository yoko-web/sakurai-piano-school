import React from "react";
import { Heading3 } from "../../atoms";
import { data } from "./data";

export const YouTubeTile = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="flex justify-center mx-auto mb-10 px-3" key={item.id}>
            <div className="w-screen">
              <iframe
                title={item.title}
                width="100%"
                height="615px"
                src={item.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="text-primary text-2xl text-right font-bold">
                {item.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
