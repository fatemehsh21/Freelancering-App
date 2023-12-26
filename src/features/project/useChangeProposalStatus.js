import { useMutation } from "@tanstack/react-query";
import { changeProppsalStatusApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeStatusProposal } = useMutation({
    mutationFn: changeProppsalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isUpdating, changeStatusProposal };
}
