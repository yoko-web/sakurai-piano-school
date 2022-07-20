import Lottie from "lottie-react";
import Facebook from "./97580-facebook.json";
import Instagram from "./96175-instagram.json";
import Twitter from "./18887-twitter-notification.json";
import YouTube1 from "./76274-youtube-logo.json";
import YouTube2 from "./98802-youtube.json";

export const IconsBlock = () => {
  return (
    <div className="sticky inset-y-0">
      <div className="container flex justify-center mx-auto">
        <ul className="flex mb-3">
          <li className="pr-3">
            <a
              href="https://www.facebook.com/profile.php?id=100050932493512&fref=profile_friend_list&hc_location=friends_tab"
              target="_blank"
              rel="noreferrer"
            >
              <Lottie animationData={Facebook} className="h-16 w-16" />
            </a>
          </li>
          <li className="pr-3">
            <a
              href="https://twitter.com/PianoSakurai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Lottie animationData={Twitter} className="h-12 w-12 mt-2" />
            </a>
          </li>
          <li className="pt-1 pr-3">
            <a
              href="https://www.youtube.com/channel/UCkCJCnxqzGNPjdZOqEnJAkQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Lottie
                animationData={YouTube1}
                className="h-16 w-16 rounded-full"
              />
            </a>
          </li>
          {/* </ul>
        <ul className="flex mb-5"> */}
          <li className="pr-3">
            <a
              href="https://www.youtube.com/user/TWINBELLKEIYAN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Lottie animationData={YouTube2} className="h-16 w-16" />
            </a>
          </li>
          <li className="pr-3">
            <a
              href="https://www.instagram.com/mintsakurai"
              target="_blank"
              rel="noreferrer"
            >
              <Lottie animationData={Instagram} className="h-20 w-20" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
