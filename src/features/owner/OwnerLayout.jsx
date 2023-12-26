import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import SideBar from "../../ui/SideBar";
import { HiCollection, HiHome } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </SideBar>
    </AppLayout>
  );
}

export default OwnerLayout;
