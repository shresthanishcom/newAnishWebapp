import Image from "next/image";
import Style from "../../styles/photos.module.scss";

export default function photos() {
  function renderPhotos() {
    let images = [];
    for (let i = 1; i <= 11; i++) {
      images.push(
        <Image
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
    <div
      className={`${Style.photosContainer} flex justify-center items-center flex-wrap`}
    >
      {renderPhotos()}
    </div>
  );
}
