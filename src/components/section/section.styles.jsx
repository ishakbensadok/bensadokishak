import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 10rem 2.5rem 5rem 1.5rem;
  transition: opacity 0.5s ease 1s, transform 0.5s ease 1s;
  /* border: 1px solid red; */
  min-height: calc(100vh - 60px);
  transform: translateY(15rem);
  opacity: 0;

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 80px);
  }
  &.reveal {
    opacity: 1;
    transform: translateY(0);
  }
  &.hidden {
    opacity: 0;
    transform: translateY(10rem);
    transition: all 0s;
  }
`;

// .home {
//   .section:nth-of-type(2),
//   .section:last-of-type {
//     transition: opacity 0.5s ease, transform 0.5s ease;
//   }
// }
