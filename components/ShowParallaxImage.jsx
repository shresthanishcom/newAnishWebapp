import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export default function ShowParallaxImage({ imageUrl }) {
  return (
    <ParallaxBanner
      layers={[{ image: `${imageUrl}`, speed: -25 }]}
      className="aspect-[2/1]"
      style={{ height: "50vh" }}
    ></ParallaxBanner>
  );
}
