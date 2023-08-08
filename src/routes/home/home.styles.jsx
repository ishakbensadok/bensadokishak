import styled from 'styled-components';

import { SectionWrapper } from '../../components/section/section.styles';

export const HomeWrapper = styled.main`
  ${SectionWrapper}:nth-of-type(2) {
    min-height: 100vh;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  ${SectionWrapper}:last-of-type {
    min-height: 100vh;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
`;
