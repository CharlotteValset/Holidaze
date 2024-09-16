import React, { useState, useEffect } from "react";

export const AddImageForm = ({ setImages, errors, isSubmitted }) => {
  const [imageUrls, setImageUrls] = useState([""]);

  const addNewImageUrl = () => {
    const newImages = [...imageUrls, ""];
    setImageUrls(newImages);
    setImages("images", newImages);
  };

  const updateImageUrl = (index, value) => {
    const newImages = [...imageUrls];
    newImages[index] = value;
    setImageUrls(newImages);
    setImages("images", newImages);
  };

  const removeImageUrl = (index) => {
    const newImages = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newImages);
    setImages("images", newImages);
  };

  useEffect(() => {
    setImages("images", imageUrls);
  }, [imageUrls, setImages]);

  return (
    <div className="mx-auto my-4 flex w-60 flex-col space-y-2">
      <div className="ps-1">
        <i className="fa-regular fa-image"></i>
        <label className="ps-2 sm:text-lg">Image url</label>
      </div>
      {imageUrls.map((url, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={url}
            onChange={(e) => updateImageUrl(index, e.target.value)}
            className="h-9 w-52 flex-1 rounded-lg border-gray-300 sm:w-60"
          />
          <button
            type="button"
            onClick={() => removeImageUrl(index)}
            className="text-sm text-dark-blue hover:text-red-700"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      ))}
      <button
        type="button"
        className="border-0 ps-0 text-left hover:bg-light-blue hover:text-dark-blue hover:underline"
        onClick={addNewImageUrl}
      >
        <i className="fa-solid fa-plus mr-2 text-sm"></i>
        Add another image
      </button>
      {isSubmitted &&
        errors?.images &&
        Array.isArray(errors.images) &&
        errors.images.length > 0 && (
          <p className="text-sm text-red-500">{errors.images[0]?.message}</p>
        )}
    </div>
  );
};
