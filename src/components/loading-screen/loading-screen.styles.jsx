import styled from 'styled-components';

export const LoadingScreenWrapper = styled.div`
  position: fixed;
  top: 0%;
  transform: translateY(100%);
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #37897b;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: top;
  color: white;
  font-weight: 900;
  font-size: 5rem;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  text-transform: uppercase;
  transition: all 0.5s;

  &.visible {
    transform: translateY(0%);
    border-top-left-radius: 0%;
    border-top-right-radius: 0%;
  }
  &.hidden {
    top: -100%;
  }
`;
