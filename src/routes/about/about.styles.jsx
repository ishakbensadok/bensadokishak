import styled, { keyframes } from 'styled-components';
import Section from '../../components/section/section.component';

const DownArrow = keyframes`

  100% {
        
        transform: translatey(5px);
     }
 
`;

export const Arrow = styled.span`
  font-size: 1.7rem;
  font-weight: 900;
`;

export const AboutContent = styled.div`
  &:hover ${Arrow} {
    animation-name: ${DownArrow};
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

export const ResumeLink = styled.a`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  width: max-content;
  font-size: 1.7rem;
  -webkit-text-stroke-width: medium;
  padding: 0.1rem;
  font-weight: 600;
  color: darkslategrey;
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

export const Title = styled.h2`
  font-size: 2.5rem;
  position: relative;
  color: #fff;
  width: max-content;
  margin-bottom: 30px;
  text-transform: uppercase;
  -webkit-text-stroke-width: medium;
  letter-spacing: 2px;
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

export const Description = styled.div`
  max-width: 500px;
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const AboutWrapper = styled(Section)`
  display: grid;
  gap: 4rem 2rem;
  align-items: center;
  justify-items: center;

  img {
    min-height: 280px;
    border-radius: 5px;
    width: 100%;
    max-width: 350px;
    display: block;
    margin: auto;
    filter: grayscale(1);
    /* object-position: right; */
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    ${AboutContent} {
      order: -1;
    }
    ${Title} {
      font-size: 3.5rem;
    }
    ${ResumeLink} {
      font-size: 1.8rem;
    }
    img {
      max-width: 650px;
      height: 490px;
    }
  }
`;
// .about {
//   display: grid;
//   gap: 4rem 2rem;
//   align-items: center;
//   justify-items: center;

//   &__header:hover .arrow {
//     animation-name: down-arrow;
//     animation-duration: 0.5s;
//     animation-timing-function: linear;
//     animation-iteration-count: infinite;
//   }

//   .link {
//     margin-top: 20px;
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     position: relative;
//     width: max-content;
//     font-size: 1.7rem;
//     -webkit-text-stroke-width: medium;
//     padding: 0.1rem;
//     font-weight: 600;
//     color: darkslategrey;

//     @keyframes down-arrow {
//       100% {
//         transform: translatey(5px);
//       }
//     }
//     .arrow {
//       font-size: 1.7rem;
//       font-weight: 900;
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
//   }

//   &__title {
//     font-size: 2.5rem;
//     position: relative;
//     color: #fff;
//     width: max-content;
//     margin-bottom: 30px;
//     text-transform: uppercase;
//     -webkit-text-stroke-width: medium;
//     letter-spacing: 2px;
//     &::before {
//       content: '';
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background-color: #37897b;
//       z-index: -1;
//       padding: 0 1rem;
//       transform: scale(1.07, 1.05) skewX(-15deg);
//     }
//   }

//   &__description {
//     max-width: 500px;
//     font-size: 1.6rem;
//     line-height: 1.5;

//     .svg {
//       width: 40px;
//       height: 40px;
//       transform: translateY(30%);
//     }
//   }
//   img {
//     min-height: 280px;
//     border-radius: 5px;
//     width: 100%;
//     display: block;
//     margin: auto;

//     filter: grayscale(1);
//     object-position: top;
//     object-fit: cover;
//   }

//   @media screen and (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     &__header {
//       order: -1;
//     }
//     &__title {
//       font-size: 3.5rem;
//     }
//     .link {
//       font-size: 1.8rem;
//     }
//     img {
//       height: 480px;
//     }
//   }
// }
