import Lottie from "lottie-react";
import Facebook from "./38798-facebook-logo-effect.json";
import Instagram from "./69057-instagram.json";
import Twitter from "./38764-twitter-logo-effect.json";
import YouTube1 from "./76274-youtube-logo.json";
import YouTube2 from "./38763-youtube-logo-effect.json";
import { CSSProperties } from "react";

type Props = {
  inView: boolean;
  className?: CSSProperties;
};

export const IconsBlock = ({ inView }: Props) => {
  return (
    <div className="sticky inset-y-0 -left-4 sm:left-0">
      <div className="flex flex-col justify-center mx-0 sm:mx-auto flex-wrap">
        <ul className="flex">
          <li className="sm:pr-3">
            <a
              href="https://www.facebook.com/profile.php?id=100050932493512&fref=profile_friend_list&hc_location=friends_tab"
              target="_blank"
              rel="noreferrer"
              aria-label="link to facebook"
            >
              <Lottie
                animationData={Facebook}
                className="h-16 w-16"
                loop={false}
              />
            </a>
          </li>
          <li className="sm:pr-3">
            <a
              href="https://twitter.com/PianoSakurai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to twitter"
            >
              <Lottie
                animationData={Twitter}
                className="h-16 w-16"
                loop={false}
              />
            </a>
          </li>
          <li className="sm:pr-3">
            <a
              href="https://www.youtube.com/channel/UCkCJCnxqzGNPjdZOqEnJAkQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to youtube"
            >
              <Lottie
                animationData={YouTube2}
                className="h-16 w-16"
                loop={false}
              />
            </a>
          </li>
          <li className="sm:pr-3">
            <a
              href="https://www.instagram.com/mintsakurai"
              target="_blank"
              rel="noreferrer"
              aria-label="link to instagram"
            >
              <Lottie
                animationData={Instagram}
                className="h-14 w-12"
                loop={false}
              />
            </a>
          </li>
        </ul>
        <ul>
          <li className="flex mx-auto justify-center">
            <a
              href="https://www.youtube.com/user/TWINBELLKEIYAN"
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              aria-label="link to youtube"
            >
              {/* <div className="absolute -top-3 mt-6 ml-4 h-8 w-8 bg-gray-100/50 rounded-full" /> */}
              <Lottie
                animationData={YouTube1}
                // loop={false}
                className="absolute h-16 w-16 -top-5 -translate-x-5"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
