import React, { useState } from "react";
import HouseImage from "../../assets/images/heroImage.png";

export const Gallery = () => {
  const [largeImage, setLargeImage] = useState(HouseImage);

  const smallImages = [HouseImage, HouseImage, HouseImage, HouseImage];

  const handleImageClick = (imageSrc) => {
    setLargeImage(imageSrc);
  };

  return (
    <div className="grid gap-4 w-11/12 mx-auto mt-5 lg:grid-flow-col">
      <div className="">
        <img className="rounded-lg w-full" src={largeImage} alt="Large display" />
      </div>

      <div className="grid grid-cols-4 gap-2 lg:gap-7 lg:w-40 lg:grid-rows-4 lg:grid-cols-1">
        {smallImages.map((imageSrc, index) => (
          <div key={index} className="relative group">
            <img
              className={`h-auto rounded-lg cursor-pointer transition-opacity duration-300 ${
                largeImage === imageSrc ? "opacity-100 selected" : "opacity-70"
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
