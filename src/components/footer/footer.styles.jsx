import styled from 'styled-components';
import Section from '../section/section.component';
import {
  SocialMediaWrapper,
  SocialMediaLink,
} from '../socialMedia/social-media.styles';

export const Credits = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  -webkit-text-stroke: thin;
  padding: 0 1.2rem;
`;
export const Creator = styled.div`
  display: inline-block;
  margin-top: 20px;
  font-weight: 700;
  font-size: 1.5rem;
  span {
    -webkit-text-stroke-width: medium;
    color: darkslategrey;
    // text-decoration: underline;
  }
`;
export const FooterWrapper = styled(Section)`
  min-height: 500px;
  text-align: center;
  padding-top: 14rem;
  ${SocialMediaWrapper} {
    margin-top: 50px;
  }

  ${SocialMediaLink}:first-of-type {
    transform: translateY(-35px);
  }
  ${SocialMediaLink}:last-of-type {
    transform: translateY(-35px);
  }

  @media screen and (min-width: 768px) {
    ${Creator} {
      font-size: 1.8rem;
    }
    ${Credits} {
      font-size: 1.6rem;
    }
  }
`;
export const FooterContent = styled.div`
  display: grid;
  gap: 4rem 2rem;
  transition: all 0.3s;

  img {
    height: 250px;
    max-width: 250px;
    width: 100%;
    display: block;
    justify-self: center;
    filter: grayscale(1);
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.3s;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr 1fr;
    img {
      height: 335px;
      max-width: 335px;
      transform: translateY(-70px);
    }
    /* .link-title {
      font-size: 3rem;
    } */
  }
  @media screen and (min-width: 1024px) {
    img {
      height: 425px;
      max-width: 425px;
    }
  }
`;
export const Container = styled.div`
  gap: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.3s;
`;
export const Title = styled.h2`
  color: darkslategrey;
  position: relative;
  white-space: nowrap;
  font-size: 2.4rem;
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

// .footer {
//   min-height: 500px;
//   position: relative;
//   text-align: center;
//   padding-top: 14rem;
//   &__content {
//     display: grid;
//     gap: 4rem 2rem;
//     transition: all 0.3s;
//     img {
//       height: 250px;
//       max-width: 250px;
//       width: 100%;
//       display: block;
//       justify-self: center;

//       filter: grayscale(1);
//       border-radius: 50%;
//       object-fit: cover;
//       transition: all 0.3s;
//     }
//     .link-container {
//       gap: 5rem;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-around;
//       align-items: center;
//       transition: all 0.3s;
//       // &:first-of-type {
//       //   align-items: start;
//       // }
//       // &:last-of-type {
//       //   align-items: end;
//       // }

//       .link-title {
//         color: darkslategrey;
//         position: relative;
//         white-space: nowrap;
//         font-size: 2.4rem;
//         -webkit-text-stroke-width: medium;
//         &::before {
//           content: '';
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background-color: #60dcc9;
//           z-index: -1;
//           padding: 0 1rem;
//           transform: scale(1.07, 1.05) skewX(-15deg);
//         }
//       }
//     }
//     @media screen and (min-width: 768px) {
//       grid-template-columns: 1fr 2fr 1fr;
//       img {
//         height: 335px;
//         max-width: 335px;
//         transform: translateY(-70px);
//       }
//       .link-title {
//         font-size: 3rem;
//       }
//     }
//     @media screen and (min-width: 1024px) {
//       img {
//         height: 425px;
//         max-width: 425px;
//       }
//     }
//   }

//   .creator {
//     display: inline-block;
//     margin-top: 20px;
//     font-weight: 700;
//     .my-name {
//       -webkit-text-stroke-width: medium;
//       color: darkslategrey;
//       // text-decoration: underline;
//     }
//   }

//   .socialMedia-container {
//     margin-top: 100px;
//     margin-top: 20px;
//     .socialMedia:first-of-type,
//     .socialMedia:last-of-type {
//       transform: translateY(-35px);
//     }
//   }

//   .credits {
//     font-size: 1.6rem;
//     font-weight: 700;
//     margin-top: 50px;
//     display: flex;
//     justify-content: space-between;
//     -webkit-text-stroke: thin;
//   }

//   .circle {
//     position: absolute;
//     display: inline-block;
//     width: 10px;
//     height: 10px;
//     // border: 1px solid;
//     border-radius: 50%;
//     transition: all 0.3s;
//     &.circle--1 {
//       top: 10%;
//       background: #37897b;
//       border: 0;
//     }
//     &.circle--2 {
//       right: 13%;
//       top: 10%;
//       background: #37897b;
//       border: 0;
//     }
//     // &.circle--3 {
//     //   left: 60%;
//     //   background: #37897b;
//     //   border: 0;
//     // }
//     // &.circle--4 {
//     //   bottom: 20%;
//     // }
//     // &.circle--5 {
//     //   top: 35%;
//     //   right: 3%;
//     //   background: darkslategrey;
//     //   border: 0;
//     // }
//     // &.circle--6 {
//     //   top: 60%;
//     //   right: 20%;
//     //   background: #9999;
//     //   border: 0;
//     // }
//     &.circle--7 {
//       bottom: 2%;
//       right: 6%;
//       background: #60dcc9;
//       border: 0;
//     }
//     &.circle--8 {
//       top: 2%;
//       left: 36%;
//       background: darkslategrey;
//       border: 0;
//     }
//     // &.circle--9 {
//     //   top: 32%;
//     //   left: 32%;
//     //   background: #60dcc9;
//     //   border: 0;
//     // }
//     &.circle--10 {
//       bottom: 5%;
//       left: 30%;
//       background: #9999;
//       border: 0;
//     }
//   }
// }
