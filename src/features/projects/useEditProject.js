import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectsApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectsApi,
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
  return { isEditing, editProject };
}
