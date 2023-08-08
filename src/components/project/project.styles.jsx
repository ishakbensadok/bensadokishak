import styled from 'styled-components';

export const ProjectContent = styled.div`
  display: grid;
  gap: 2rem;
  overflow: hidden;
  align-items: center;
  justify-items: center;
  min-height: 555px;

  img {
    max-width: 250px;
    max-height: 200px;
    min-width: 200px;
    min-height: 160px;
    width: 50vw;
    height: 40vw;
    border: 0.1px solid #0000001c;
    margin-left: 0;
    transition: transform 0.5s 0.2s;
    position: relative;
    border-radius: 20px;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const ProjectDetails = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 300px;
  justify-self: baseline;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SvgContainer = styled.div`
  display: flex;
  gap: 1rem;
  svg {
    width: 30px;
    height: 30px;
    transition: all 0.2s;
    &:hover {
      fill: #37897b;
    }
  }
`;
export const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const Title = styled.h2`
  span {
    font-weight: 700;
    font-size: small;
    color: rgb(186, 183, 183);
    vertical-align: super;
    margin-left: 5px;
  }
`;
export const ProjectView = styled.div`
  display: grid;
  gap: 4rem;
  justify-items: center;
  align-items: center;
  padding: 1rem;
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1.2fr 0.5fr;
  }
`;
