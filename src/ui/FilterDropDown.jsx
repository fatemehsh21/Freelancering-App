import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };
  return <Select options={options} value={value} onChange={handleChange} />;
}

export default FilterDropDown;
