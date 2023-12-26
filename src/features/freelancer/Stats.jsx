import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import toPersianNumbersWithComma, {
  toPersianNumbers,
} from "../../utils/toPersianNumbers";
import Stat from "../../ui/Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="grid grid-cols-3  gap-8">
      <Stat
        value={numOfProposals}
        title="درخواست ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="primary"
      />
      <Stat
        value={acceptedProposals.length}
        title="درخواست های تایید شده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        color="green"
      />
      <Stat
        value={toPersianNumbersWithComma(balance)}
        title="کیف پول"
        icon={<HiCollection className="w-20 h-20" />}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
