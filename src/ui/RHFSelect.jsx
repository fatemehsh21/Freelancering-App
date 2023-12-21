import React from "react";

function RHFselect({ label, name, options, required, register }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-secondary-700 whitespace-nowrap"
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        // name={name}
        // id={name}
        {...register(name)}
        className="textField__input"
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFselect;
