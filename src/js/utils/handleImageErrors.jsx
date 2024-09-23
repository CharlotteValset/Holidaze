import ImagePlaceholder from "../../assets/images/no_img.png";

export const handleImageErrors = (e) => {
  e.target.src = ImagePlaceholder;
};
