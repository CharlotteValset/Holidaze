import React from "react";

export const InputField = ({
  label,
  htmlFor,
  register,
  registerYup,
  required = true,
  id,
  type,
  min,
  className,
  errors,
}) => {
  return (
    <div className="flex flex-col mx-auto w-60 my-2">
      <label htmlFor={htmlFor} className="ps-1 sm:text-lg">
        {label}
      </label>
      <input
        {...register(registerYup, required ? { required: "This field is required" } : {})}
        id={id}
        type={type}
        min={min}
        className={className}
      />
      {errors && errors[registerYup] && <p className="text-red-500 text-sm">{errors[registerYup]?.message}</p>}
    </div>
  );
};
