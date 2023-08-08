import {
  Btn,
  Btn2,
  Btn3,
  Camera,
  Inner,
  PhoneWrapper,
  RightBtn,
} from './phone.styles.jsx';
import LazyImage from '../lazy-img/lazy-img.component.jsx';
const Phone = ({ after, before }) => {
  return (
    <PhoneWrapper>
      <Camera></Camera>

      <Inner>
        {/* <img src={`${imgSrc}`} /> */}
        {/* <LazyImage src={`${imgSrc}`} /> */}
        <LazyImage after={after} before={before} />
      </Inner>
      <Btn />
      <Btn2 />
      <Btn3 />
      <RightBtn></RightBtn>
    </PhoneWrapper>
  );
};

export default Phone;
