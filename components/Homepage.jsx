import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import { useEffect } from "react";

import Style from "../styles/Homepage.module.scss";

export default function HomePage() {
  useEffect(() => {
    const skillList = ["Anish Shrestha", "Web Developer", "Software Engineer"];
    const animateText = document.getElementById("selectText");
    let i = 0;

    //skills animation
    const myTimeInterval = setInterval(() => {
      if (i === skillList.length - 1) {
        document.getElementById(
          "selectText"
        ).innerHTML = `<h1>${skillList[i]}</h1>`;
        i = 0;
      } else {
        animateText.innerHTML = "";

        const newH1 = document.createElement("h1");
        newH1.innerText = skillList[i];
        animateText.appendChild(newH1);
        i++;
      }
    }, 3000);
    return () => {
      clearInterval(myTimeInterval);
    };
  }, []);
  return (
    <>
      <div className="bio-container relative flex justify-between md:justify-around mb-5">
        <div className="text-container self-center text-2xl sm:text-4xl md:text-7xl w-2/3">
          <Parallax translateX={["-50px", "80px"]}>
            <h1 className="text-8xl">Hi!</h1>
            <h2>I am</h2>
            <div id="selectText" className={`${Style.typewriter} `}></div>
          </Parallax>
        </div>
        <div className="backgroundShape w-1/3">
          <Image
            src="/anishPotrait.png"
            alt="anish photo"
            height="600px"
            width="350px"
          />
        </div>
        <div className="absolute top-0 left-0"></div>
      </div>
      <ParallaxBanner
        layers={[{ image: "/jamichen.jpg", speed: -25 }]}
        className="aspect-[2/1]"
        style={{ height: "50vh" }}
      ></ParallaxBanner>
      <div className="bio-container flex pr-0 mr-0 justify-between md:justify-around mt-5">
        <Image
          src="/anishStandPotrait.png"
          alt="anish photo"
          height="600px"
          width="450px"
        />
        <div className="image-container self-center  ">
          <Parallax translateX={["-100px", "0px"]}>
            <div className={`text-2xl sm:text-4xl font-serif md:text-7xl`}>
              {"Be greedy with time not money"}
              <div className="text-xl md:text-4xl font-bold flex justify-end">
                Anish Shrestha
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
}
