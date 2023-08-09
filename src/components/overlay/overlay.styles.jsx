import styled from 'styled-components';

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: calc(100vh);
  z-index: 99;
  width: 100%;
  background: rgb(153 153 153 / 50%);
  transition: all 0.3s;
  &.hidden {
    visibility: hidden;
    z-index: -1;
  }
`;
