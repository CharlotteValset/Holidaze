import React, { useState } from "react";
import HouseImage from "../../assets/images/heroImage.png";

export const Gallery = () => {
  const [largeImage, setLargeImage] = useState(HouseImage);

  const smallImages = [HouseImage, HouseImage, HouseImage, HouseImage];

  const handleImageClick = (imageSrc) => {
    setLargeImage(imageSrc);
  };

  return (
    <div className="mx-auto mt-5 grid w-11/12 gap-4 lg:grid-flow-col">
      <div className="">
        <img
          className="w-full rounded-lg"
          src={largeImage}
          alt="Large display"
        />
      </div>

      <div className="grid grid-cols-4 gap-2 lg:w-40 lg:grid-cols-1 lg:grid-rows-4 lg:gap-7">
        {smallImages.map((imageSrc, index) => (
          <div key={index} className="group relative">
            <img
              className={`h-auto cursor-pointer rounded-lg transition-opacity duration-300 ${
                largeImage === imageSrc ? "selected opacity-100" : "opacity-70"
              }`}
              src={imageSrc}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(imageSrc)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
