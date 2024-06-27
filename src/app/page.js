import Explanation from "./components/Explanation/Explanation";
import Hero from "./components/Hero/Hero";
import { PictureSliceCyberpunk } from "./components/PictureSlice/PictureSlice";
import ServerLocation from "./components/ServerLocation/ServerLocation";

export default function Home() {
  return (
    <>
      <Hero />
      <Explanation />
      <ServerLocation />
      <PictureSliceCyberpunk />
    </>
  );
}
