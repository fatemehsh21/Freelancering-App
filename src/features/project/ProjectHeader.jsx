import React from "react";
import Empty from "../../ui/Empty";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  if (!project.length) return <Empty resourceName="درخواستی" />;
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <HiArrowRight className="h-5 w-5 text-secondary-500" />
      </button>
      <h1 className="font-black text-xl text-secondary-700">
        لیست درخواست های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
