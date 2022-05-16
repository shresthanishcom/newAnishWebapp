import React from "react";
import Style from "../../styles/Projects/projects.module.scss";
import Image from "next/image";

export default function projects() {
  return (
    <>
      <div className={`${Style.container} mt-3`}>
        <div className="flex flex-wrap justify-around items-center w-full text-orange-700 ">
          <div className={`${Style.box} w-2/4 self-center text-center `}>
            <a target="_blank" href="https://anish-ecommerce.netlify.app">
              <Image
                src="/ecommercePreview.png"
                height="400"
                width="400"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="text-xl">Ecommerce</div>
            </a>
          </div>
          <div className={`${Style.box} w-2/4 self-center text-center`}>
            <a
              target="_blank"
              href="https://news-portal-hd39p6rd6-shresthanishcom.vercel.app/specificnews/2022-04-21T03:30:27Z"
            >
              <Image
                src="/newsportalPreview.png"
                height="400"
                width="400"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="text-xl">NewsPortal</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
