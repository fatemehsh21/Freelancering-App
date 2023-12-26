import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/table";
import ProjectsRow from "./ProjectsRow";

function ProjectTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>

        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectsRow key={project._id} index={index} project={project} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
