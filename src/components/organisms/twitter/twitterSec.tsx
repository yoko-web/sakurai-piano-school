import { Heading2 } from "../../atoms";
import { TwitterFeed } from "./twitterFeed";

export const TwitterSec = () => {
  return (
    <div
      className="py-28 text-center px-2 sm:px-6 mx-auto sm:text-lg max-w-screen-lg"
      id="twitter"
    >
      <Heading2 type="gray"> 最新情報</Heading2>
      <div className="text-center">
        <TwitterFeed />
      </div>
    </div>
  );
};
