import React from "react";

function RadioInput({
  name,
  label,
  value,
  register,
  id,
  validationSchema,
  watch,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
