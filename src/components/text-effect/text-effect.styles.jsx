import styled, { keyframes, css } from 'styled-components';

const keyF = keyframes`

    50% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
 
`;
export const Text = styled.div`
  width: 100%;
  /* height: 149px; */
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  /* line-height: 1.5; */
  margin-top: 5px;

  span {
    ${({ $isTexting = true }) => {
      if (!$isTexting) {
        return css`
          animation-name: ${keyF};
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          visibility: hidden;
        `;
      }

      return ``;
    }};
  }
`;

// .text {
//   width: 100%;
//   height: 100px;
//   font-size: 1.5rem;
//   font-weight: 500;
//   letter-spacing: 0.5px;
//   line-height: 1.5;
//   margin-top: 5px;
// }

// .caret {
//   animation-name: identifier;
//   animation-duration: 1s;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
//   display: inline-block;
//   visibility: hidden;
//   font-weight: 700;
// }
