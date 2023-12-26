import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );
  return (
    <div className="grid grid-cols-3  gap-8">
      <Stat
        value={numOfProjects}
        title="پروژه ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="primary"
      ></Stat>
      <Stat
        value={numOfAcceptedProjects}
        title=" پروژه های واگذار شده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        color="green"
      ></Stat>
      <Stat
        value={numOfProposals}
        title="درخواست ها"
        icon={<HiCollection className="w-20 h-20" />}
        color="yellow"
      ></Stat>
    </div>
  );
}

export default Stats;
