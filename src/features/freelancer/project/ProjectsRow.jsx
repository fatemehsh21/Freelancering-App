import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/table";
import truncateText from "../../../utils/truncateText";
import toPersianNumbersWithComma from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "../../proposals/CreateProposalForm";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectsRow({ index, project }) {
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        <p>{truncateText(project.title, 30)}</p>
      </td>

      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>

      <td>
        <span className={`badge ${projectStatus[project.status].className}`}>
          {projectStatus[project.status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title={`درخواست انجام پروژه ${project.title}`}
        >
          <CreateProposalForm
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="text-primary-900 w-5 h-5" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectsRow;
