import React, { useState } from "react";

import ImagePlaceholder from "../../../assets/images/no_img.png";

import { handleImageErrors } from "../../../js/utils/handleImageErrors";

export const Gallery = ({ data }) => {
  const mediaUrls = data.media?.map((mediaItem) => mediaItem.url) || [];

  const initialImageUrl = mediaUrls[0] || ImagePlaceholder;

  const [largeImage, setLargeImage] = useState(initialImageUrl);

  const smallImages = mediaUrls.length > 0 ? mediaUrls : [ImagePlaceholder];

  const handleImageClick = (imageSrc) => {
    setLargeImage(imageSrc);
  };

  return (
    <div className="mx-auto my-5 w-full gap-4">
      <div className="flex-1">
        <img
          className="h-44 w-full rounded-lg object-cover xs:h-72 sm:h-80 md:h-96 lg:h-[500px]"
          src={largeImage}
          alt="Large venue image"
          onError={(e) => handleImageErrors(e, ImagePlaceholder)}
        />
      </div>

      <div className="flex flex-row justify-start gap-3 pt-3">
        {smallImages.map((imageSrc, index) => (
          <div key={index} className="group relative">
            <img
              className={`h-12 w-12 cursor-pointer rounded object-cover transition-opacity duration-300 sm:h-24 sm:w-24 ${
                largeImage === imageSrc ? "selected opacity-100" : "opacity-70"
              }`}
              src={imageSrc}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(imageSrc)}
              onError={(e) => handleImageErrors(e, ImagePlaceholder)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
