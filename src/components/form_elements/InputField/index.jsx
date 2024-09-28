import React, { useState } from "react";

export const InputField = ({
  icon,
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
  togglePassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mx-auto my-2 flex w-60 flex-col">
      <label htmlFor={htmlFor} className="ps-1 text-lg">
        {icon && <span className="mr-2">{icon}</span>} {label}
      </label>
      <div className="relative flex items-center">
        <input
          {...register(
            registerYup,
            required ? { required: "This field is required" } : {},
          )}
          id={id}
          type={togglePassword ? (showPassword ? "text" : "password") : type}
          min={min}
          className={className}
        />
        {togglePassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-10 text-xs text-dark-gray sm:right-3"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {errors && errors[registerYup] && (
        <p className="text-sm text-red-600">{errors[registerYup]?.message}</p>
      )}
    </div>
  );
};
