import React from "react";
import Table from "../../ui/table";
import useProposals from "./useProposals";
import ProposalRow from "./ProposalRow";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";

function ProposalsTable() {
  const { proposals, isLoading } = useProposals();
  if (isLoading) return <Loader />;
  if (!proposals.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} index={index} proposal={proposal} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
