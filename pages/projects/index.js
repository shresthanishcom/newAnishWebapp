import React from "react";
import Head from "next/head";
import Style from "../../styles/Projects/projects.module.scss";
import Image from "next/image";

export default function projects() {
  return (
    <>
      <Head>
        <title>Anish Shrestha / Projects</title>
        <meta name="description" content="Web apps by Anish Shrestha" />
      </Head>
      <div className={`${Style.container} mt-3`}>
        <div className="flex flex-wrap justify-around items-center w-full text-orange-700 ">
          <div
            className={`${Style.box}  relative w-2/4 mb-16 self-center text-center group `}
          >
            <a
              target="_blank"
              href="https://anish-ecommerce.netlify.app"
              rel="noreferrer"
            >
              <div className="projectInfo h-full w-full hidden group-hover:flex flex-col items-center justify-center  text-6xl  text-center text-purple-800 absolute top-0 left-0 z-20">
                <h1 className="text-8xl text-black">Made with:</h1>
                <h3>ReactJS</h3>
                <h3>Redux</h3>
                <h3>Bootstrap</h3>
              </div>
              <Image
                alt="ecommerce website link"
                src="/ecommercePreview.png"
                height="400"
                width="400"
                objectFit="cover"
                objectPosition="center"
                className="group-hover:opacity-50"
              />
              <div className="text-xl">Ecommerce</div>
            </a>
          </div>
          <div
            className={`${Style.box} relative w-2/4 mb-16 self-center text-center group`}
          >
            <a
              target="_blank"
              href="https://news-portal-hd39p6rd6-shresthanishcom.vercel.app/specificnews/2022-04-21T03:30:27Z"
              rel="noreferrer"
            >
              <div className="projectInfo h-full w-full hidden group-hover:flex flex-col items-center justify-center   text-6xl  text-center text-purple-800 absolute top-0 left-0 z-20">
                <h1 className="text-8xl text-black">Made with:</h1>
                <h3>NEXT JS</h3>
                <h3>TAILWIND CSS</h3>
                <h3>SEO friendly</h3>
              </div>
              <Image
                alt="newsportal website "
                src="/newsportalPreview.png"
                height="400"
                width="400"
                objectFit="cover"
                objectPosition="center"
                className="group-hover:opacity-50"
              />
              <div className="text-xl">NewsPortal</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
