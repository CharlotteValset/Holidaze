export const Checkbox = ({
  register,
  registerYup,
  id,
  icon,
  className,
  checkboxHtmlFor,
  label,
}) => {
  return (
    <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-xs md:text-base">
      <input {...register(registerYup)} id={id} type="checkbox" />
      <div className="flex items-center gap-1 rounded bg-light-blue px-1 py-0.5 text-base">
        <i className={icon}></i>
        <label className={className} htmlFor={checkboxHtmlFor}>
          {label}
        </label>
      </div>
    </div>
  );
};
