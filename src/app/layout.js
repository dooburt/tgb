import { Outfit, Red_Hat_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import TransparentHeader from "./components/TransparentHeader/TransparentHeader";

const outfit = Outfit({ subsets: ["latin"], weight: "400", variable: "--font-body" });
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], weight: "900", variable: "--font-header" });

export const metadata = {
  title:
    "The Great Beyond - Explore, build and conquer - We're playing modded Minecraft servers: Steampunk, Dawncraft, BetterMC, Prominence II RPG, Cisco's Adventure and Cobblemon!",
  description: "A modded Minecraft community playing: Steampunk, Dawncraft, BetterMC, Prominence II RPG, Cisco's Adventure and Cobblemon!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${redHatDisplay.variable} debug-screens`}>
        <TransparentHeader />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-1WWQMKCCSD" />
    </html>
  );
}
