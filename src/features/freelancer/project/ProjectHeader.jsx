import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";

const sortOptions = [
  {
    label: "مرتب سازی(جدیدترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی(قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  { label: "باز", value: "OPEN" },
  {
    label: "بسته",
    value: "CLOSED",
  },
  { label: "همه", value: "ALL" },
];
function ProjectHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="font-bold text-lg">لیست پروژه ها</h1>
      <div className="flex gap-x-8 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown options={sortOptions} filterField="sort" />
        <FilterDropDown
          options={[
            {
              label: "دسته بندی(همه)",
              value: "ALL",
            },
            ...transformedCategories,
          ]}
          filterField="category"
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
