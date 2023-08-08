import styled from 'styled-components';

export const ProjectRowLi = styled.li`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(255 255 255 / 17%);
    transition: all 0.3s;
    transform: scale(0);
    z-index: -1;
  }
  &:hover::before {
    transform: scale(1);
  }
`;
export const Title = styled.h3`
  letter-spacing: -2px;
  font-weight: 500;
  color: cadetblue;
  color: darkcyan;
  color: darkslategrey;
  transition: all 0.3s;
`;
export const TechnologiesWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  transition: all 0.3s;

  & svg {
    width: 25px;
    height: 25px;
    opacity: 0.5;
    transition: all 0.3s;
  }
`;
export const ProjectRowWrapper = styled.div`
  padding: 2rem 1rem;
  font-size: 2rem;
  margin-bottom: 15px;
  background: rgb(255 255 255 / 16%);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  // transition: all 0.3s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0;
    transform: rotatex(90deg);
    background-color: #37897b;
    transition: all 0.3s;
  }
  &::before {
    left: 0;
    transform-origin: 0% 0%;
  }
  &::after {
    right: 0;
    transform-origin: 0% 100%;
  }

  &:hover::before,
  &:hover::after {
    transform: rotatex(0deg);
  }

  &:hover svg {
    opacity: 1;
  }
  &:hover ${Title} {
    letter-spacing: 0;
  }
  &:hover ${TechnologiesWrapper} {
    gap: 1rem;
  }
`;

// .project-row-wrapper {
//   position: relative;
//   &::before {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     background: rgb(255 255 255 / 17%);
//     transition: all 0.3s;
//     transform: scale(0);
//     z-index: -1;
//   }
//   &:hover::before {
//     transform: scale(1);
//   }
// }

// .project-row {
//   padding: 2rem 1rem;
//   font-size: 2rem;
//   margin-bottom: 15px;
//   background: rgb(255 255 255 / 16%);
//   border-radius: 4px;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 1.6rem;
//   // transition: all 0.3s;

//   &:hover svg {
//     opacity: 1;
//   }
//   &:hover &__title {
//     letter-spacing: 0;
//   }
//   &:hover &__technologies {
//     gap: 1rem;
//   }
//   &__technologies {
//     display: flex;
//     gap: 0.5rem;
//     transition: all 0.3s;

//     & svg {
//       width: 25px;
//       height: 25px;
//       opacity: 0.5;
//       transition: all 0.3s;
//     }
//   }

//   &__title {
//     letter-spacing: -2px;
//     font-weight: 500;
//     color: cadetblue;
//     color: darkcyan;
//     color: darkslategrey;
//     transition: all 0.3s;
//   }
//   &::before,
//   &::after {
//     content: '';
//     position: absolute;
//     width: 3px;
//     height: 100%;
//     top: 0;
//     transform: rotatex(90deg);
//     background-color: #37897b;
//     transition: all 0.3s;
//   }
//   &::before {
//     left: 0;
//     transform-origin: 0% 0%;
//   }
//   &::after {
//     right: 0;
//     transform-origin: 0% 100%;
//   }

//   &:hover::before,
//   &:hover::after {
//     transform: rotatex(0deg);
//   }
// }
