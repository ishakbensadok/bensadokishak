import {
  MbpMockupWrapper,
  MbpContainer,
  BelowDisplay,
  Bezel,
  BottomLeft,
  BottomRight,
  DisplayCamera,
  DisplayEdge,
  DisplayFrame,
  Front,
  MacbookPro,
  MbpDisplay,
  MbpKeyboard,
  MbpShadow,
  OpenerRight,
  Openerleft,
  ShadowLeft,
  ShadowRight,
} from './desktop.styles.jsx';

import LazyImage from '../lazy-img/lazy-img.component.jsx';
const Desktop = ({ after, before, imgSrc }) => {
  return (
    <MbpMockupWrapper>
      <MbpContainer>
        <MbpDisplay>
          <DisplayEdge>
            <Bezel>
              <DisplayCamera />
              <DisplayFrame>
                {/* <img src={`${imgSrc}`} /> */}
                <LazyImage after={after} before={before} />
              </DisplayFrame>
              <BelowDisplay>
                <MacbookPro />
              </BelowDisplay>
            </Bezel>
          </DisplayEdge>
        </MbpDisplay>
        <MbpKeyboard>
          <Front>
            <Openerleft />
            <OpenerRight />
          </Front>
          <BottomLeft />
          <BottomRight />
          <MbpShadow>
            <ShadowLeft />
            <ShadowRight />
          </MbpShadow>
        </MbpKeyboard>
      </MbpContainer>
    </MbpMockupWrapper>
  );
};

export default Desktop;
