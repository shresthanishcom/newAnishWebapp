import Image from "next/image";
import Head from "next/head";
import Style from "../../styles/photos.module.scss";

export default function photos() {
  function renderPhotos() {
    let images = [];
    for (let i = 1; i <= 11; i++) {
      images.push(
        <Image
          alt={`${i} `}
          src={`/${i}.jpg`}
          width={400}
          height={400}
          objectFit="contain"
          objectPosition="center"
        />
      );
    }
    return images;
  }
  return (
    <>
      <Head>
        <title>Anish Shrestha / Photos</title>
        <meta name="description" content="Photos of Anish Shrestha" />
      </Head>
      <div
        className={`${Style.photosContainer} flex justify-center items-center flex-wrap`}
      >
        {renderPhotos()}
      </div>
    </>
  );
}
