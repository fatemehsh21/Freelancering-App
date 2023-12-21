import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectsApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useCreate() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectsApi,
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

  return { isCreating, createProject };
}
