import { IconsBlock } from "../icons";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const { inView, ref } = useInView({ threshold: 0 });

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16">
        <IconsBlock inView={inView} />
        <div className="flex justify-center my-4"></div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-700">
          <div className="pt-3">Keiko Sakurai</div>
          <div className="pt-3">{`© ${new Date().getFullYear()}`}</div>
          <a
            // href={`mailto:${siteMetadata.email}`}
            title="Email"
            className="flex justify-center items-center w-10 h-10 text-gray-200 rounded-full bg-primary mb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
