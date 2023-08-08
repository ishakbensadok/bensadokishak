import { styled, css } from 'styled-components';
const clicked = css`
  opacity: 1;
`;

export const NavLink = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 1rem;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  &:hover a {
    transform: translateY(3px);
  }

  &:first-of-type {
    display: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 0.5px;
    background-color: #000;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(100%);
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 3px;
    border: 0.5px solid #000;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    ${clicked};
  }

  &.clicked::after {
    ${clicked};
  }
`;
