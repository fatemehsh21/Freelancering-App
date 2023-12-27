import React from "react";
import DashboardHeader from "../../ui/DashboardHeader";
import useProjects from "../../hooks/useProjects";
import useProposals from "../proposals/useProposals";
import useUsers from "./useUsers";
import Loader from "../../ui/Loader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading: isLoading1, projects } = useProjects();
  const { isLoading: isLoading2, proposals } = useProposals();
  const { isLoading: isLoading3, users } = useUsers();
  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <Stats
        projects={projects.length}
        proposals={proposals.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
