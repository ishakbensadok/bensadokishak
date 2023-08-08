import ProjectRow from '../project-row/project-row.component';

import PROJECTS_INFORMATION from '../../utils/projects/projects.utils';

// import { useContext } from 'react';
// import { NavigationContext } from '../../contexts/navigation.context';

import {
  Details,
  DetailsHeader,
  DetailsLists,
  NumberOfProjects,
  Previews,
  ProjectsWrapper,
  Title,
  LinkTOMoreProjects,
  RightArrow,
  PreviewImg,
} from './projects-preview.styles.jsx';

const ProjectsPreview = ({ restricted }) => {
  console.log('ProjectsPreview re/render');

  // const { setNavLinksState, getNavLinksState } = useContext(NavigationContext);

  // const handleClick = () => {
  //   setNavLinksState(getNavLinksState('Projects'));
  // };
  const maxNumber = restricted ? 3 : PROJECTS_INFORMATION.length;
  return (
    <ProjectsWrapper className={`${restricted ? 'projects--restricted' : ''}`}>
      <Previews>
        {PROJECTS_INFORMATION.map((project, i) => {
          return (
            <PreviewImg
              id={`${i + 1}`}
              src={`${project.previewImg}`}
              alt=''
              key={project.id}
            />
          );
        })}
      </Previews>
      <Details>
        <DetailsHeader>
          <Title>projects</Title>
          <NumberOfProjects>{maxNumber}</NumberOfProjects>
        </DetailsHeader>
        <DetailsLists>
          {PROJECTS_INFORMATION.map((project, i) => {
            if (restricted) {
              if (i < maxNumber)
                return (
                  <ProjectRow
                    project={project}
                    key={project.id}
                    restricted={restricted}
                  />
                );
            } else return <ProjectRow project={project} key={project.id} />;
          })}
        </DetailsLists>

        {restricted && (
          <LinkTOMoreProjects to='Projects'>
            <span>For More</span>
            <RightArrow>&#x2192;</RightArrow>
          </LinkTOMoreProjects>
        )}
      </Details>
    </ProjectsWrapper>
  );
};

export default ProjectsPreview;
