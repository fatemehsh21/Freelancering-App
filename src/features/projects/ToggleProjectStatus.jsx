import React from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Toggle from "../../ui/Toggle";
import Loader from "../../ui/Loader";

function ToggleProjectStatus({ project }) {
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: project._id, data: { status } });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader height={20} width={50} />
      ) : (
        <Toggle
          label={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
          enabled={project.status === "OPEN" ? true : false}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
