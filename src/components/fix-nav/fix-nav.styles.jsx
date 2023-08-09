import styled from 'styled-components';

import { NavLinks } from '../nav-links/nav-links.styles';
import { NavLink } from '../nav-link/nav-link.styles';
export const FixNavigation = styled.div`
  position: fixed;
  z-index: 100;
  top: 0%;
  right: 0%;
  height: 100vh;
  width: 80vw;
  padding: 8rem 2rem;
  background: rgb(153 153 153 / 0%);
  border-left: 0.5px solid grey;
  /* transition: 0.5s all cubic-bezier(0.445, 0.05, 0.55, 0.95); */
  transition: all 0.3s;
  color: white;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${NavLinks} {
    display: block;
    height: max-content;
    font-size: 3rem;
    ${NavLink}:first-of-type {
      display: flex;
    }
    ${NavLink}::after {
      left: auto;
      right: 0;
      bottom: auto;
      top: 50%;
      transform: translateY(-50%);
    }
    a {
      width: 100%;
    }
  }
  &.hidden {
    transform: translateX(100%);
  }
  @media screen and (min-width: 768px) {
    width: 50vw;
    ${NavLinks} {
      font-size: 5rem;
    }
  }
`;
export const FixMenu = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-100%, -50%);
  left: 0;
  width: 20px;
  height: 90px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 2px solid #37897b;
  /* border-style: inherit; */
  border-right: 0;
  color: darkslategrey;
  /* writing-mode: vertical-lr; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  -webkit-text-stroke-width: thin;
  letter-spacing: 2px;
  padding: 0 0.9rem;
  transition: all 0.3s;
  span {
    font-size: 1.6rem;
    transition: all 0.3s;
    transform: rotate(270deg);
  }
  &:hover {
    span {
      color: black;
    }
  }
  &.clicked {
    span {
      font-size: 1.3rem;
      transform: rotate(0deg);
    }
    width: 50px;
    height: 60px;
  }
  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
`;
