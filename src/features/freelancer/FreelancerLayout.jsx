import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import CustomNavLink from "../../ui/CustomNavLink";
import { HiCollection, HiHome } from "react-icons/hi";

function FreelancerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavLink>
      </SideBar>
    </AppLayout>
  );
}

export default FreelancerLayout;
