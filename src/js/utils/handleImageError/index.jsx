import ImagePlaceholder from "../../../assets/images/no_img.png";

export const handleImageError = (e) => {
  e.target.src = ImagePlaceholder;
};
