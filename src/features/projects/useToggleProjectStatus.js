import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectsStatusApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: toggleProjectsStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isUpdating, toggleProjectStatus };
}
