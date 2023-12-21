import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectsService";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });
  const { projects } = data || {};

  return { isLoading, projects };
}
