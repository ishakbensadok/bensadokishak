import styled from 'styled-components';
import { ReactComponent as WavsSvg } from '../../assets/waves.svg';

export const Wavs = styled(WavsSvg)`
  display: block;
  width: 100%;
  max-height: 20px;
  transition: all 0.3s;
  position: relative;
  z-index: -200;
  @media screen and (min-width: 768px) {
    max-height: 30px;
  }
`;
