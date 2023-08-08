import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PreviewImg } from '../projects-preview/projects-preview.styles';

import {
  ProjectRowLi,
  ProjectRowWrapper,
  TechnologiesWrapper,
  Title,
} from './project-row.styles.jsx';
const ProjectRow = ({ project, restricted }) => {
  const [imgsArr, setImgsArr] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [isHover, setIsHover] = useState(false);
  useEffect(
    () => setImgsArr(Array.from(document.querySelectorAll(PreviewImg))),
    []
  );
  useEffect(() => {
    if (imgsArr.length === 0) return;
    if (isHover) {
      imgsArr[targetId].style.opacity = 1;
      imgsArr[targetId].style.transform = `scale(1.05)`;
    } else {
      imgsArr[targetId].style.opacity = 0;
      imgsArr[targetId].style.transform = `scale(1)`;
    }
  }, [isHover]);

  const handleMouseMove = (e) => {
    const id = e.target
      .closest(ProjectRowLi)
      .querySelector(ProjectRowWrapper).id;

    setIsHover(true);
    setTargetId(id - 1);
  };
  const handleMouseLeave = () => setIsHover(false);

  const { title, technologies, id } = project;
  return (
    <ProjectRowLi onMouseOver={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Link to={restricted ? 'Projects/' + title : title}>
        <ProjectRowWrapper id={id}>
          <Title>{title}</Title>

          <TechnologiesWrapper>
            {technologies.map((tech, i) => (
              <Fragment key={i}>{tech}</Fragment>
            ))}
          </TechnologiesWrapper>
        </ProjectRowWrapper>
      </Link>
    </ProjectRowLi>
  );
};

export default ProjectRow;
