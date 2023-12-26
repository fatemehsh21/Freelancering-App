import React from "react";
import Table from "../../ui/table";
import truncateText from "../../utils/truncateText";
import toPersianNumbersWithComma, {
  toPersianNumbers,
} from "../../utils/toPersianNumbers";
const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];
function ProposalRow({ index, proposal }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description, 60)}</td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
