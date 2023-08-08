import ProjectsPreview from '../../components/projects-preview/projects-preview.component';
import { Route, Routes } from 'react-router-dom';
import Project from '../../components/project/project.component';

const Projects = () => {
  // console.log('Projects re/render');

  return (
    <Routes>
      <Route index element={<ProjectsPreview />} />
      <Route path=':project' element={<Project />} />
    </Routes>
  );
};

export default Projects;
