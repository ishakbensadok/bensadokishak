import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CopyRight = styled.span`
  margin-right: 10px;
  transition: all 0.5s;
`;

export const CodeBy = styled.span`
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
`;
export const NavBrand = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  width: 155px;
  white-space: nowrap;
  display: flex;
  align-items: center;

  div {
    overflow: hidden;
  }
  &:hover {
    width: 170px;
    ${CodeBy} {
      transform: translateX(-35%);
    }
    ${CopyRight} {
      transform: rotate(360deg);
    }
  }
`;
