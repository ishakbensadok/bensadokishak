import styled from 'styled-components';

export const MenuIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 10px);
  gap: 0.5rem;
  transition: all 0.3s;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    visibility: hidden;
    opacity: 0;
  }
  &.extend {
    gap: 1rem;
    transform: rotate(360deg);
  }

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    transition: all 0.3s;

    border-radius: 3px;
    &:first-of-type {
      background-color: #37897b;
    }
    &:nth-of-type(2) {
      background-color: #60dcc9;
    }
    &:nth-of-type(3) {
      border: 0.5px solid #000;
    }
    &:last-of-type {
      background-color: #999999;
    }
  }
`;
