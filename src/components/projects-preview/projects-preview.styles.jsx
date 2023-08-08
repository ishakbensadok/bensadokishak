import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import Section from '../section/section.component';

const UpDown = keyframes`

   100% {
     transform: translateY(-10px);
   }
 
`;
const RightArrowAnimation = keyframes`
       100% {
         transform: translateX(10px);

       }

`;

export const LinkTOMoreProjects = styled(Link)`
  margin-top: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.6rem;
  color: darkslategrey;
  position: relative;
  width: max-content;
  padding: 0 0.5rem;
  -webkit-text-stroke-width: medium;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #60dcc9;
    z-index: -1;
    padding: 0 1rem;
    transform: scale(1.07, 1.05) skewX(-15deg);
  }
`;
export const RightArrow = styled.span`
  font-size: 2rem;
`;

export const ProjectsWrapper = styled(Section)`
  display: grid;
  position: relative;
  gap: 2rem;

  /* &.projects--restricted {
    min-height: 100vh;
  } */

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Previews = styled.div`
  align-self: center;
  justify-self: center;
  width: 40vw;
  height: 40vw;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border-bottom-right-radius: 4px;
  animation-name: ${UpDown};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  box-shadow: 0 0 30px 1px #999;
  border-left: 5px solid #60dcc9;
  overflow: hidden;
  position: relative;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const PreviewImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1);
  transition: opacity 0.2s, transform 0.15s ease;
`;
export const Details = styled.div`
  max-width: 500px;
  height: max-content;
  align-self: center;
  justify-self: center;
  width: 100%;

  &:hover ${RightArrow} {
    animation-name: ${RightArrowAnimation};
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;
export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-right: 2rem;
  margin-bottom: 30px;
`;
export const DetailsLists = styled.ul`
  height: max-content;
  max-height: 350px;
  overflow: auto;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  position: relative;
  color: #fff;
  text-transform: uppercase;
  transition: all 0.3s;
  -webkit-text-stroke-width: medium;
  letter-spacing: 2px;
  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #37897b;
    z-index: -1;
    padding: 0 1rem;
    transform: scale(1.07, 1.05) skewX(-15deg);
  }
`;
export const NumberOfProjects = styled.span`
  color: #fff;
  position: relative;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #37897b;
    z-index: -1;
    padding: 1.5rem;
    border-radius: 50%;
  }
`;
// .projects {
//   display: grid;
//   position: relative;
//   gap: 2rem;
//   &.projects--restricted {
//     min-height: 100vh;
//   }

//   @media screen and (min-width: 768px) {
//     // height: 100vh;
//     grid-template-columns: repeat(2, 1fr);
//   }

//   & .link-arrow {
//     margin-top: 10px;
//     font-weight: bold;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     font-size: 1.6rem;
//     color: darkslategrey;
//     position: relative;
//     width: max-content;
//     padding: 0 0.5rem;
//     -webkit-text-stroke-width: medium;
//     &::before {
//       content: '';
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background-color: #60dcc9;
//       z-index: -1;
//       padding: 0 1rem;
//       transform: scale(1.07, 1.05) skewX(-15deg);
//     }
//     & .arrow {
//       font-size: 2rem;
//     }
//   }

//   &__preview {
//     align-self: center;
//     justify-self: center;
//     width: 40vw;
//     height: 40vw;
//     max-width: 400px;
//     max-height: 400px;
//     border-radius: 50%;
//     border-bottom-right-radius: 4px;
//     animation-name: upDown;
//     animation-duration: 1s;
//     animation-timing-function: linear;
//     animation-iteration-count: infinite;
//     animation-direction: alternate;
//     box-shadow: 0 0 30px 1px #999;
//     border-left: 5px solid #60dcc9;
//     overflow: hidden;
//     position: relative;
//     display: none;

//     @media screen and (min-width: 768px) {
//       display: block;
//     }
//     &__img {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       // object-position: left;
//       opacity: 0;
//       transform: scale(1);
//       transition: opacity 0.2s, transform 0.15s ease;
//     }
//   }
//   &__detail {
//     max-width: 500px;
//     height: max-content;
//     align-self: center;
//     justify-self: center;
//     width: 100%;

//     &:hover .arrow {
//       animation-name: link-arrow;
//       animation-duration: 0.5s;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//       // animation-direction: alternate;
//     }
//     @keyframes link-arrow {
//       100% {
//         transform: translateX(10px);
//         -webkit-transform: translateX(10px);
//         -moz-transform: translateX(10px);
//         -ms-transform: translateX(10px);
//         -o-transform: translateX(10px);
//       }
//     }

//     &__header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       padding: 1rem;
//       padding-right: 2rem;
//       margin-bottom: 30px;
//       .title {
//         font-size: 2.5rem;
//         font-weight: 500;
//         position: relative;
//         color: #fff;
//         text-transform: uppercase;
//         transition: all 0.3s;
//         -webkit-text-stroke-width: medium;
//         letter-spacing: 2px;

//         @media screen and (min-width: 600px) {
//           font-size: 3.5rem;
//         }
//         &::before {
//           content: '';
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background-color: #37897b;
//           z-index: -1;
//           padding: 0 1rem;
//           transform: scale(1.07, 1.05) skewX(-15deg);
//         }
//       }
//       .number {
//         color: #fff;
//         position: relative;
//         font-size: 2rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         &::before {
//           content: '';
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background-color: #37897b;
//           z-index: -1;
//           padding: 1.5rem;
//           border-radius: 50%;
//         }
//       }
//     }
//     &__list {
//       height: max-content;
//       max-height: 350px;
//       overflow: auto;
//       padding: 0 1rem;
//     }
//   }
// }

// @keyframes upDown {
//   100% {
//     transform: translateY(-10px);
//   }
// }
