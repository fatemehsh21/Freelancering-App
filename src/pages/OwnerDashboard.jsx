import React from "react";
import DashboardLayout from "../features/owner/DashboardLayout";
import Stats from "../features/owner/Stats";
import useOwnerProjects from "../features/projects/useOwnerProjects";
import Loader from "../ui/Loader";

function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loader />;
  return (
    <div className="mb-6">
      <DashboardLayout />
      <Stats projects={projects} />
    </div>
  );
}

export default OwnerDashboard;
