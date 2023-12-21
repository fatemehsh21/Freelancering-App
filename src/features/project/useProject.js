import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectApi } from "../../services/projectsService";

export default function useProject() {
  const { id } = useParams();
  const { isLoading, data } = useQuery({
    queryFn: () => getProjectApi(id),
    queryKey: ["project"],
    retry: false,
  });

  const { project } = data || {};
  return { isLoading, project };
}
