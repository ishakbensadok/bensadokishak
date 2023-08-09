import Icon from '../icon/icon.component';
import styled from 'styled-components';

export const ScrollToTopWrapper = styled(Icon)`
  width: 30px;
  height: 30px;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 1px;
  z-index: 98;
  fill: #37897b;
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    fill: #fff;
    background: #37897b;
  }
  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;
