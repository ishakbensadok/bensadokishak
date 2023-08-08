import styled from 'styled-components';

export const PhoneWrapper = styled.div`
  position: relative;
  min-width: 270px;
  max-width: 300px;
  width: 100%;
  height: 550px;
  background: rgb(52, 50, 50);
  /* border-radius: 50px; */
  border-radius: 40px;
  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    height: 575px;
  }
`;
export const Inner = styled.div`
  position: absolute;
  inset: 3px;

  background: #ccc;
  /* border-radius: 48px; */
  border-radius: 38px;
  border: 10px solid #000;
  transition: 0.5s;
  overflow-x: hidden;

  img {
    width: 100%;
    display: block;
  }
`;
export const Btn = styled.i`
  position: absolute;
  top: 110px;
  left: -2px;
  width: 3px;
  height: 26px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  z-index: 10;
  background: radial-gradient(#ccc, #555, #222);
`;
export const Btn2 = styled(Btn)`
  top: 160px;
  height: 40px;
`;
export const Btn3 = styled(Btn)`
  top: 220px;
  height: 40px;
`;
export const RightBtn = styled.i`
  position: absolute;
  top: 170px;
  right: -2px;
  width: 3px;
  height: 30px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: radial-gradient(#ccc, #555, #222);
  z-index: 10;
`;
export const Camera = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 25px;
  background: #000;
  border-radius: 20px;
  z-index: 55;
`;
// .iphone {
//   position: relative;
//   min-width: 270px;
//   max-width: 300px;
//   width: 100%;
//   height: 550px;
//   background: rgb(52, 50, 50);
//   border-radius: 50px;
//   transition: all 0.3s;
//   @media screen and (min-width: 768px) {
//     height: 575px;
//   }
// }

// .inner {
//   position: absolute;
//   inset: 3px;

//   background: #ccc;
//   border-radius: 48px;
//   border: 10px solid #000;
//   transition: 0.5s;
//   overflow-x: hidden;

//   img {
//     width: 100%;
//     display: block;
//   }
// }

// .btn {
//   position: absolute;
//   top: 110px;
//   left: -2px;
//   width: 3px;
//   height: 26px;
//   border-top-left-radius: 4px;
//   border-bottom-left-radius: 4px;
//   z-index: 10;
//   background: radial-gradient(#ccc, #555, #222);
// }

// .btn2 {
//   top: 160px;
//   height: 40px;
// }

// .btn3 {
//   top: 220px;
//   height: 40px;
// }

// .rightButton {
//   position: absolute;
//   top: 170px;
//   right: -2px;
//   width: 3px;
//   height: 30px;
//   border-bottom-right-radius: 4px;
//   border-top-right-radius: 4px;
//   background: radial-gradient(#ccc, #555, #222);
//   z-index: 10;
// }

// .dynamic_island {
//   position: absolute;
//   top: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 100px;
//   height: 25px;
//   background: #000;
//   border-radius: 20px;
//   z-index: 55;
// }
