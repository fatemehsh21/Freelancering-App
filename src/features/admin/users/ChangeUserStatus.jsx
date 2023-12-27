import { useForm } from "react-hook-form";
import useChangeUserStatus from "./useChangeUserStatus";
import RHFselect from "../../../ui/RHFselect";
import Loader from "../../../ui/Loader";
import { useQueryClient } from "@tanstack/react-query";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

function ChangeUserStatus({ userId, onClose }) {
  const { isUpdating, changeStatusUser } = useChangeUserStatus();
  const { handleSubmit, register } = useForm();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeStatusUser(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
        },
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFselect
          label="تغییر وضعیت"
          name="status"
          options={options}
          required
          register={register}
        />
        <div className="!mt-8">
          {isUpdating ? (
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

export default ChangeUserStatus;
