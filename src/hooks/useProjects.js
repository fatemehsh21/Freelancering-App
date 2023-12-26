import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectsService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();
  const parsed = queryString.parse(search);
  const { data, isLoading } = useQuery({
    queryKey: ["projects", parsed],
    queryFn: () => getProjectsApi(search),
  });
  const { projects } = data || {};

  return { isLoading, projects };
}
