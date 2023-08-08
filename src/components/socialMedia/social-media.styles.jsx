import styled from 'styled-components';

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  svg {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export const SocialMediaLink = styled.a`
  width: 30px;
  height: 30px;

  #twitter:hover {
    fill: #1da1f2;
  }
  #linkedin:hover {
    fill: #0a66c2;
  }
  #instagram:hover {
    fill: #fb3958;
  }
`;

// .socialMedia-container {
//   display: flex;
//   justify-content: space-around;
//   gap: 1rem;

//   .socialMedia {
//     width: 30px;
//     height: 30px;

//     #twitter:hover {
//       fill: #1da1f2;
//     }
//     #linkedin:hover {
//       fill: #0a66c2;
//     }
//     #instagram:hover {
//       fill: #fb3958;
//     }
//     svg {
//       width: 100%;
//       height: 100%;
//       transition: all 0.3s;
//       &:hover {
//         transform: scale(1.1);
//       }
//     }
//   }
// }
