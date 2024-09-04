export const Checkbox = ({ register, registerYup, id, icon, checkboxHtmlFor, label }) => {
  return (
    <div className="flex items-center gap-1 text-xs md:text-base bg-light-blue px-1 py-0.5 rounded">
      <input {...register(registerYup)} id={id} type="checkbox" />
      <div className="flex items-center gap-1 text-xs md:text-base bg-light-blue px-1 py-0.5 rounded">
        <i className={icon}></i>
        <label htmlFor={checkboxHtmlFor}>{label}</label>
      </div>
    </div>
  );
};
