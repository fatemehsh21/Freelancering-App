import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectsApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: deleteProjectsApi,
    onSuccess: (data) => {
      toast.success("پروژه با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { removeProject, isDeleting };
}
