import styled from 'styled-components';

export const Eye = styled.div`
  position: absolute;
  content: '';
  border-radius: 50%;
  z-index: 555;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
`;

export const LeftEye = styled(Eye)`
  left: 49%;
  top: 49.5%;
  transform: translate(-100%, 0%);
`;
export const RightEye = styled(Eye)`
  left: 50%;
  top: 49.8%;
  transform: translate(28%, 0%);
`;
export const Pupil = styled.span`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: black;
  transition: all 0.15s;
`;
