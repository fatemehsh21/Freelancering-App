import Stats from "./Stats";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "./DashboardHeader";
import Loader from "../../ui/Loader";

function DashboardLayout() {
  const { proposals, isLoading } = useProposals();

  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}
export default DashboardLayout;
