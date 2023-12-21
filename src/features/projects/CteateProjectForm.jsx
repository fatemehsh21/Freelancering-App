import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFselect from "../../ui/RHFselect";
import { TagsInput } from "react-tag-input-component";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loader from "../../ui/Loader";
import useEditProject from "./useEditProject";
import DatePickerField from "../../ui/DatePickerField";

function CteateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline) || new Date());
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();
  let editValue = {};
  if (isEditSession) {
    editValue = {
      title,
      description,
      budget,
      category: category._id,
    };
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValue });

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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
          options={categories}
        />
        <div>
          <label htmlFor="tags" className="block mb-2 text-secondary-700">
            تگ ها
          </label>
          <TagsInput
            id="tags"
            value={tags}
            onChange={setTags}
            name="tags"
            classNames={{ input: "" }}
          />
        </div>
        <DatePickerField date={date} setDate={setDate} label="ددلاین" />
        <div className="!mt-8">
          {isCreating ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CteateProjectForm;
