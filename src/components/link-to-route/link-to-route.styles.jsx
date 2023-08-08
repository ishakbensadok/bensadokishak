import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

const Rotate = keyframes`

   100% {
     transform: rotate(0deg);
   }
 
`;

export const LinkToRouteWrapper = styled(Link)`
  -webkit-text-stroke-width: medium;
  color: darkslategrey;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
  &:hover::after,
  &:hover::before {
    animation: ${Rotate} 1s infinite 0.5s linear;
    transform: rotate(360deg);
  }
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 10px solid #60dcc9;
    border-left: 10px solid rgb(224, 224, 224);
    border-radius: 50%;
    transition: all 0.5s ease;
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 5px solid #37897b;
    border-right: 5px solid rgb(224, 224, 224);
    border-radius: 50%;
    transition: all 0.5s ease 0.5s;
  }
`;
// .link-to-route {
//   -webkit-text-stroke-width: medium;
//   color: darkslategrey;
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.3s;

//   @media screen and (min-width: 768px) {
//     width: 120px;
//     height: 120px;
//   }
//   &:hover::after,
//   &:hover::before {
//     animation: Rotate 1s infinite 0.5s linear;
//     transform: rotate(360deg);
//   }
//   &::before {
//     position: absolute;
//     content: '';
//     width: 100%;
//     height: 100%;
//     border: 10px solid #60dcc9;
//     border-left: 10px solid rgb(224, 224, 224);
//     border-radius: 50%;
//     transition: all 0.5s ease;
//   }
//   &::after {
//     position: absolute;
//     content: '';
//     width: 100%;
//     height: 100%;
//     border: 5px solid #37897b;
//     border-right: 5px solid rgb(224, 224, 224);
//     border-radius: 50%;
//     transition: all 0.5s ease 0.5s;
//   }
// }

// @keyframes Rotate {
//   100% {
//     transform: rotate(0deg);
//   }
// }
