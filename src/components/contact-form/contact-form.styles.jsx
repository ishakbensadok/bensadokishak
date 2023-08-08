import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 40px;
`;
export const Button = styled.button`
  border-radius: 50%;
  font-size: 1.5rem;
  width: 90px;
  height: 90px;
  border: 0;
  transition: all 0.3s;
  cursor: pointer;
  font-weight: 500;
  background-color: #37897b;
  position: absolute;
  right: 1%;
  bottom: -10%;
  color: #fff;
  z-index: 1;
  &:hover {
    background-color: #287e6f;
    text-indent: 10px;
  }
`;

export const ContactFormWrapper = styled.div`
  max-width: 350px;
  width: 100%;

  form {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    ${Button} {
      font-size: 1.6rem;
    }
  }
`;
