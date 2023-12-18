import React from "react";

function RHFselect({ label, name, options, required, register }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        name={name}
        id={name}
        {...register(name)}
        className="textField__input"
      >
        {options.map((option) => (
          <option key={option.value}>{option.value}</option>
        ))}
      </select>
    </div>
  );
}

export default RHFselect;
