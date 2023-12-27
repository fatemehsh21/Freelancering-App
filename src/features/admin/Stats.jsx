import React from "react";
import Stat from "../../ui/Stat";
import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";

function Stats({ projects, proposals, users }) {
  return (
    <div className="grid grid-cols-3  gap-8">
      <Stat
        value={users}
        title="کاربران"
        icon={<HiUser className="w-20 h-20" />}
        color="primary"
      />
      <Stat
        value={proposals}
        title="درخواست ها"
        icon={<HiCollection className="w-20 h-20" />}
        color="green"
      />
      <Stat
        value={projects}
        title="پروژه ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
