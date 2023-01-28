import { Timeline } from "react-twitter-widgets";

export const TwitterFeed = () => {
  return (
    <>
      <div className="justify-center hidden md:flex">
        <Timeline
          dataSource={{ screenName: "PianoSakurai", sourceType: "profile" }}
          options={{
            height: "800",
            lang: "ja",
            width: "600",
          }}
        />
      </div>
      <div className="flex justify-center md:hidden">
        <Timeline
          dataSource={{ screenName: "PianoSakurai", sourceType: "profile" }}
          options={{
            height: "600",
            lang: "ja",
            width: "360",
          }}
        />
      </div>
    </>
  );
};
