import styled, { keyframes, css } from 'styled-components';
import Section from '../section/section.component';
import heroImg from '../../assets/heroImg.png';

const wobble = keyframes`

   0% {
     transform: translateZ(0) scale(1);
   }
   15% {
     transform: translate3d(-25%, 0, 0) rotate(-5deg) scale(1.1);
   }
   30% {
     transform: translate3d(20%, 0, 0) rotate(3deg) scale(1.2);
   }
   45% {
     transform: translate3d(-15%, 0, 0) rotate(-3deg) scale(1.3);
   }
   60% {
     transform: translate3d(10%, 0, 0) rotate(2deg) scale(1.2);
   }
   75% {
     transform: translate3d(-5%, 0, 0) rotate(-1deg) scale(1.1);
   }
   100% {
     transform: translateZ(0) scale(1);
   }
 
`;

export const HeroContent = styled.div`
  justify-self: center;
  max-width: 450px;
  width: 100%;
  min-height: 360px;
  height: max-content;
`;
export const Title = styled.h1`
  font-size: 2.8rem;
  white-space: nowrap;
  transition: all 0.5s;
`;

export const MyName = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  margin: 10px 0;

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
export const Role = styled.span`
  position: relative;
  display: inline-block;
  font-size: 1.6rem;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transform: scale(1.07, 1.05) skewX(-15deg);
    z-index: -1;
    padding: 0 1rem;
  }
`;
export const HeroImage = styled.div`
  justify-self: center;
  position: relative;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: top;
  height: 400px;
  max-width: 400px;
  width: 100%;
  transition: all 0.3s;
`;
export const HeroWrapper = styled(Section)`
  display: grid;
  img {
    width: 80px;
    animation: ${wobble} 2.5s infinite;
  }
  @media screen and (min-width: 786px) {
    grid-template-columns: repeat(2, 1fr);

    ${Title} {
      font-size: 4rem;
    }
    ${Role} {
      font-size: 2rem;
    }
    img {
      width: 100px;
    }
  }
`;
