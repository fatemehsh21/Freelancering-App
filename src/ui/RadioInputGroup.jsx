import RadioInput from "./RadioInput";

function RadioInputGroup({ errors, config, register, watch }) {
  const { name, validationSchema = {}, options } = config;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map((option) => (
          <RadioInput
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            id={option.value}
            register={register}
            // onChange={(e) => setRole(e.target.value)}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block mt-2 text-sm flex-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
