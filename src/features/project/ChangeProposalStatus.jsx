import { useForm } from "react-hook-form";
import RHFselect from "../../ui/RHFselect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loader from "../../ui/Loader";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeStatusProposal } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeStatusProposal(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
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

export default ChangeProposalStatus;
