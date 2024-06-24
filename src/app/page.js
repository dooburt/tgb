import Explanation from "./components/Explanation/Explanation";
import Hero from "./components/Hero/Hero";
import ModpacksCarousel from "./components/ModpacksCarousel/ModpacksCarousel";
import Packcards from "./components/Packcards/Packcards";
import ServerLocation from "./components/ServerLocation/ServerLocation";
import Wallpaper from "./components/Wallpaper/Wallpaper";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Wallpaper /> */}
      {/* <ModpacksCarousel /> */}
      {/* <Packcards /> */}
      <Explanation />
      <ServerLocation />
    </>
  );
}
