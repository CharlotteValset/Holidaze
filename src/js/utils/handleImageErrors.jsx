export const handleImageErrors = (
  e,
  placeholder = "../../assets/images/no_img.png",
) => {
  e.target.src = placeholder;
};
