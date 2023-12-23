import React, { useState } from "react";
import Table from "../../ui/table";
import truncateText from "../../utils/truncateText";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

function ProposalRow({ index, proposal }) {
  const { status } = proposal;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{proposal.description}</td>
      <td>{truncateText(proposal.duration)}</td>
      <td>{toPersianNumbers(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
