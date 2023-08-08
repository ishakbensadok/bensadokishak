import styled, { keyframes } from 'styled-components';
import Section from '../../components/section/section.component';
import mePng from '../../assets/me2.png';
const NorthEastArrow = keyframes`

     100% {
       transform: translate(5px, -5px);
     }
 
`;

export const Content = styled.div`
  font-size: 1.6rem;
  justify-self: center;
  align-self: center;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  position: relative;
  color: #fff;
  width: max-content;
  margin-bottom: 30px;
  text-transform: uppercase;
  -webkit-text-stroke-width: medium;
  letter-spacing: 2px;
  transition: all 0.2s;
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
export const Subtitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 1.6rem;
  &:last-of-type {
    margin-top: 30px;
  }
`;

export const ContactWrapper = styled(Section)`
  display: grid;
  gap: 4rem 2rem;
  justify-items: center;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    max-width: 350px;
    width: 100%;
    height: 350px;
    background-image: url(${mePng});
    filter: grayscale(1);
    opacity: 0.3;
    background-size: cover;
    top: 0%;
    background-position: bottom;
    transition: all 0.3s ease;
    z-index: -1;
  }

  ${Subtitle} +  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    transition: all 0.2s;
    color: darkslategrey;
    font-weight: 900;
    &:hover span {
      animation-name: ${NorthEastArrow};
      animation-duration: 0.5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
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

    #email {
      width: 25px;
      height: 25px;
      color: darkslategrey;
      transition: all 0.2s;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    &::before {
      max-width: 425px;
      height: 100%;
      transform: translate(-60%, 0%);
      opacity: 0.5;
    }
    ${Title} {
      font-size: 3.5rem;
    }
  }
`;
// .contact {
//   display: grid;
//   gap: 4rem 2rem;
//   justify-items: center;
//   position: relative;
//   &::before {
//     position: absolute;
//     content: '';
//     max-width: 350px;
//     width: 100%;
//     height: 350px;
//     background-image: url(../../assets/me2.png);
//     filter: grayscale(1);
//     opacity: 0.3;
//     background-size: cover;
//     top: 0%;
//     // border: 2px solid red;
//     background-position: bottom;
//     transition: all 0.3s ease;
//     z-index: -1;
//   }

//   &__header {
//     font-size: 1.6rem;
//     justify-self: center;
//     align-self: center;

//     position: relative;
//     &__subtitle {
//       margin-bottom: 10px;
//       font-weight: 500;
//       &:last-of-type {
//         margin-top: 30px;
//       }
//     }
//     &__title {
//       font-size: 2.5rem;
//       position: relative;
//       color: #fff;
//       width: max-content;
//       margin-bottom: 30px;
//       text-transform: uppercase;
//       -webkit-text-stroke-width: medium;
//       letter-spacing: 2px;
//       transition: all 0.2s;
//       &::before {
//         content: '';
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         background-color: #37897b;
//         z-index: -1;
//         padding: 0 1rem;
//         transform: scale(1.07, 1.05) skewX(-15deg);
//       }
//     }
//   }

//   @keyframes NORTH-EAST-ARROW {
//     100% {
//       transform: translate(5px, -5px);
//     }
//   }
//   .link-to-email {
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     position: relative;
//     transition: all 0.2s;
//     color: darkslategrey;
//     font-weight: 900;
//     &:hover .arrow {
//       animation-name: NORTH-EAST-ARROW;
//       animation-duration: 0.5s;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//     }
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

//     .email-svg {
//       width: 25px;
//       height: 25px;
//       color: darkslategrey;
//       transition: all 0.2s;
//     }
//   }
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//   @media screen and (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     &::before {
//       max-width: 425px;
//       height: 100%;
//       transform: translate(-60%, 0%);
//       opacity: 0.5;
//     }
//     &__header__title {
//       font-size: 3.5rem;
//     }
//   }
// }
