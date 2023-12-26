import React from "react";

function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input py-4 text-xs"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
