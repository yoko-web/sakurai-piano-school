import { Heading2 } from "../atoms";
import { VoiceCollection } from "./card";

export const Voices = () => {
  return (
    <div
      className="py-28 bg-primary text-white text-center px-2 sm:px-6"
      id="voice"
    >
      <Heading2 type="white">生徒さんの声</Heading2>
      <VoiceCollection />
    </div>
  );
};
