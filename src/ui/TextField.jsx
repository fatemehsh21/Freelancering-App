import React from "react";

function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textField__input"
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
