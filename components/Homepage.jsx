import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { useEffect } from "react";

import ShowParallaxImage from "./ShowParallaxImage";

import Style from "../styles/Homepage.module.scss";

export default function HomePage() {
  useEffect(() => {
    const skillList = ["Anish Shrestha", "Web Developer", "Software Engineer"];
    const animateText = document.getElementById("selectText");
    let photoIndex = 0;

    function generateSkills() {
      animateText.innerHTML = "";

      const newH1 = document.createElement("h1");
      newH1.innerText = skillList[photoIndex];
      animateText.appendChild(newH1);
      photoIndex++;
    }

    //first text
    generateSkills();

    //skills animation
    const myTimeInterval = setInterval(() => {
      if (photoIndex === skillList.length - 1) {
        document.getElementById(
          "selectText"
        ).innerHTML = `<h1>${skillList[photoIndex]}</h1>`;
        photoIndex = 0;
      } else {
        generateSkills();
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
            <h2 className="text-8xl">Hi!</h2>
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
            priority
          />
        </div>
        <div className="absolute top-0 left-0"></div>
      </div>
      <ShowParallaxImage imageUrl="/shivapuriSunset.jpg" />
      <ShowParallaxImage imageUrl="/jamichen.jpg" />
      <ShowParallaxImage imageUrl="/shivapuriHill.jpg" />

      <ShowParallaxImage imageUrl="/shivapuriHills.jpg" />
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
              <h1>
                <q>Be greedy with time not money</q>
              </h1>
              <div className="text-xl md:text-4xl font-bold flex justify-end">
                <h2>Anish Shrestha</h2>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
}
