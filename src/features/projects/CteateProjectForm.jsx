import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFselect from "../../ui/RHFselect";
import { TagsInput } from "react-tag-input-component";
import DatePicker from "react-multi-date-picker";

function CteateProjectForm() {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="عنوان پروژه"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "عنوان ضروری است",
            minLength: {
              value: 5,
              message: "طول عنوان نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          label="بودجه"
          name="budget"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "بودجه ضروری است",
          }}
          errors={errors}
        />
        <RHFselect
          name="category"
          register={register}
          required
          label="دسته بندی"
          options={[]}
        />
        <div>
          <label htmlFor="tags" className="block mb-2 text-secondary-700">
            تگ ها
          </label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <DatePicker date={date} setDate={setDate} label="ددلاین" />
        <button className="btn btn--primary w-full" type="submit">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CteateProjectForm;
