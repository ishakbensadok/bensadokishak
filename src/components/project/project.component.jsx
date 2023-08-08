import { useParams } from 'react-router-dom';
import { useEffect, useState, Fragment } from 'react';

import Section from '../section/section.component';
import TextEffect from '../text-effect/text-effect.component';
import PROJECTS_INFORMATION from '../../utils/projects/projects.utils';
import Desktop from '../desktop/desktop.component';
import Phone from '../phone/phone.component';

import Icon from '../icon/icon.component';

import {
  Container,
  ProjectContent,
  ProjectDetails,
  ProjectView,
  SvgContainer,
  TechnologiesContainer,
  Title,
} from './project.styles.jsx';

const Project = () => {
  console.log('Project re/render');

  const { project } = useParams();

  const projectInfo = PROJECTS_INFORMATION.find(
    (p) => p.title.toUpperCase() === project.toUpperCase()
  );

  const {
    title,
    year,
    previewImg,
    websiteLink,
    desktopImg,
    mobileImg,
    desktopImgSmall,
    mobileImgSmall,
    gitHubLink,
    technologies,
  } = projectInfo;
  // console.log(projectInfo);

  const defaultText = `${title}  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti
    natus eligendi esse ab exercitationem veritatis, fugit suscipit explicabo
    magni asperiores autem sint, ducimus omnis placeat ipsa ipsum ut dolor.`;

  return (
    projectInfo && (
      <Section>
        <ProjectContent>
          <img src={`${previewImg}`} alt='' />

          <ProjectDetails>
            <Container>
              <Title>
                {title}
                <span>{year}</span>
              </Title>
              <SvgContainer>
                <a target='_blank' href={`${gitHubLink}`}>
                  <Icon id='github' />
                </a>
                <a target='_blank' href={`${websiteLink}`}>
                  <Icon id='website' />
                </a>
              </SvgContainer>
            </Container>
            <TechnologiesContainer>
              {technologies.map((tech, i) => (
                <Fragment key={i}>{tech}</Fragment>
              ))}
            </TechnologiesContainer>

            <TextEffect defaultText={defaultText} />
          </ProjectDetails>
        </ProjectContent>

        <ProjectView>
          <Desktop before={desktopImgSmall} after={desktopImg} />
          <Phone before={mobileImgSmall} after={mobileImg} />
        </ProjectView>
      </Section>
    )
  );
};

export default Project;
