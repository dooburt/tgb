import Explanation from "./components/Explanation/Explanation";
import FeatureBlock from "./components/FeatureBlock/FeatureBlock";
import FeatureBlockSecondary from "./components/FeatureBlock/FeatureBlockSecondary";
import ServerLocation from "./components/ServerLocation/ServerLocation";
import Wallpaper from "./components/Wallpaper/Wallpaper";

export default function Home() {
  return (
    <>
      <Wallpaper />
      <FeatureBlockSecondary />
      <FeatureBlock />
      <Explanation />
      <ServerLocation />
    </>
  );
}
