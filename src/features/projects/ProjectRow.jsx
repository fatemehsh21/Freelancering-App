import React, { useState } from "react";
import Table from "../../ui/table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
function ProjectRow({ index, project }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();
  return (
    <Table.Row>
      <tr>
        <td>{index + 1}</td>
        <td>{truncateText(project.title)}</td>
        <td>{project.category.title}</td>
        <td>{toPersianNumbersWithComma(project.budget)}</td>
        <td>{toLocalDateShort(project.deadline)}</td>
        <td>
          <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
            {project.tags.map((tag) => (
              <span className="badge badge--secondary" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </td>
        <td>{project.freelancer?.name}</td>
        <td>
          {project.status === "OPEN" ? (
            <span className="badge badge-success">باز</span>
          ) : (
            <span className="badge badge--">بسته</span>
          )}
        </td>
        <td>
          <div className="flex items-center gap-x-4">
            <>
              <button onClick={() => setIsEditOpen(true)}>
                <TbPencilMinus className="w-5 h-5 text-primary-900" />
              </button>
              <Modal
                open={false}
                onClose={() => setIsEditOpen(false)}
                title={`ویرایش ${project.title}`}
              >
                this is a modal
              </Modal>
            </>
            <>
              <button>
                <HiOutlineTrash className="w-5 h-5 text-primary-900" />
              </button>
              <Modal
                open={false}
                onClose={() => setIsEditOpen(false)}
                title={`حذف ${project.title}`}
              >
                <ConfirmDelete
                  resourceName={project.title}
                  onClose={() => setIsDeleteOpen(false)}
                  onConfirm={() =>
                    removeProject(project._id, {
                      onSuccess: (data) => setIsDeleteOpen(false),
                    })
                  }
                  disabled={false}
                />
              </Modal>
            </>
          </div>
        </td>
      </tr>
    </Table.Row>
  );
}

export default ProjectRow;
