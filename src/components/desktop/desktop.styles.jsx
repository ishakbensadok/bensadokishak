import styled from 'styled-components';

export const MbpMockupWrapper = styled.div`
  width: 85%;
  max-width: 1280px;
  max-width: 1200px;
  min-width: 320px;
  min-width: 280px;
  margin: 10px auto 20px;
  height: auto;
  align-self: center;
  position: relative;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const MbpContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  min-width: 320px;
  min-width: 280px;
  height: auto;
  padding-top: 58.6%;
  margin: 0 auto;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;
export const MbpDisplay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  width: 81.3%;
  height: 95.2%;
  margin: 0 auto;
  background-image: radial-gradient(#cfd0d1, #cfd0d1, #adadae);
  border: 1px solid #e5e7e9;
  border-radius: 3.1% / 4%;
  z-index: 1;
`;
export const DisplayEdge = styled.div`
  display: block;
  position: relative;
  width: 99.37%;
  height: 99.25%;
  margin: 0.3% auto;
  z-index: 2;
  background-color: #262626;
  border-radius: 2.75% / 3.8%;
`;
export const Bezel = styled.div`
  display: block;
  position: relative;
  width: 99.5%;
  height: 99.2%;
  margin: auto;
  top: 0.4%;
  border-radius: 2.8% / 3.2%;
  z-index: 3;
  background-color: #010101;
`;
export const DisplayCamera = styled.div`
  width: 0.62%;
  height: 0.95%;
  margin: 1% auto;
  left: 0;
  right: 0;
  position: absolute;
  border-radius: 50%;
  z-index: 5;
  background-color: #303132;
`;
export const DisplayFrame = styled.div`
  display: block;
  position: absolute;
  width: 97.65%;
  height: 89.5%;
  margin: 0 auto;
  top: 3.5%;
  left: 0;
  right: 0;
  background-color: #151515;
  overflow-x: hidden;
  img {
    width: 100%;
    display: block;
  }
`;
export const BelowDisplay = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 4.9%;
  bottom: 0.15%;
  z-index: 3;
  // background-color: #212121;
  background-color: #121212;
  border-bottom-right-radius: 2.5% 70%;
  border-bottom-left-radius: 2.5% 70%;
`;
export const MacbookPro = styled.div`
  display: block;
  position: relative;
  width: 7.4%;
  height: 32%;
  margin-top: 0.5%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 145 20' %3E%3Cpath fill='%23D8D8DA' d='M0.5 0.6h2.67L9.6 16.23h0.08L16.11 0.6h2.67v18.55h-2.16V4.81h-1.05l2.51-3.7l-7.46 18.04H8.66L1.21 1.11 l2.51 3.7H2.66v14.33H0.5V0.6z M23.23 18.9c-0.67-0.33-1.19-0.81-1.56-1.41s-0.56-1.32-0.56-2.12v-0.03c0-1.14 0.42-2.05 1.27-2.73 c0.85-0.68 2.04-1.07 3.57-1.15l4.95-0.28v1.74l-4.69 0.28c-0.89 0.05-1.58 0.27-2.08 0.64c-0.49 0.38-0.74 0.88-0.74 1.5v0.03 c0 0.64 0.24 1.15 0.73 1.53s1.13 0.57 1.93 0.57c0.7 0 1.34-0.15 1.9-0.44c0.56-0.29 1.01-0.7 1.34-1.21 c0.33-0.51 0.49-1.09 0.49-1.74v-3.95c0-0.81-0.26-1.45-0.76-1.92c-0.51-0.47-1.23-0.7-2.17-0.7c-0.86 0-1.55 0.19-2.08 0.56 c-0.53 0.37-0.85 0.86-0.98 1.46l-0.03 0.12h-2.16l0.01-0.14c0.07-0.74 0.32-1.41 0.75-2.01s1.03-1.08 1.79-1.43 c0.76-0.36 1.67-0.53 2.71-0.53c1.05 0 1.96 0.18 2.73 0.54c0.77 0.36 1.36 0.87 1.78 1.52c0.42 0.66 0.63 1.43 0.63 2.32v9.24 h-2.24v-2.17h-0.05c-0.26 0.49-0.6 0.91-1.03 1.28c-0.43 0.36-0.91 0.65-1.45 0.85c-0.54 0.2-1.1 0.3-1.7 0.3 C24.67 19.4 23.9 19.24 23.23 18.9z M37.12 18.55c-0.93-0.57-1.65-1.38-2.15-2.42c-0.51-1.04-0.76-2.27-0.76-3.68v-0.01 c0-1.41 0.26-2.63 0.77-3.66s1.23-1.84 2.16-2.4c0.93-0.57 2.01-0.85 3.24-0.85c1.11 0 2.07 0.22 2.87 0.65 c0.8 0.43 1.43 0.99 1.88 1.68c0.46 0.69 0.73 1.41 0.83 2.17l0.01 0.1h-2.19l-0.03-0.1c-0.16-0.67-0.52-1.26-1.07-1.76 S41.36 7.5 40.38 7.5c-0.77 0-1.45 0.2-2.03 0.61c-0.58 0.41-1.04 0.98-1.36 1.72c-0.33 0.74-0.49 1.62-0.49 2.63v0.01 c0 1.04 0.17 1.92 0.49 2.66c0.33 0.74 0.79 1.3 1.38 1.7c0.59 0.39 1.27 0.59 2.04 0.59c0.92 0 1.66-0.23 2.23-0.7 c0.57-0.47 0.95-1.07 1.14-1.82l0.03-0.1H46l-0.01 0.09c-0.12 0.85-0.43 1.61-0.93 2.3c-0.5 0.68-1.15 1.22-1.94 1.62 c-0.79 0.4-1.7 0.6-2.71 0.6C39.15 19.4 38.05 19.12 37.12 18.55z M48.4 0.6h2.31v18.55H48.4V0.6z M49.56 17.1h5.5 c1.39 0 2.44-0.28 3.17-0.83c0.72-0.55 1.09-1.36 1.09-2.42v-0.03c0-0.72-0.17-1.32-0.5-1.8s-0.83-0.84-1.5-1.08 c-0.66-0.24-1.49-0.36-2.47-0.36h-5.28V8.59h4.63c1.37 0 2.42-0.27 3.14-0.8c0.72-0.53 1.09-1.3 1.09-2.3V5.47 c0-0.92-0.3-1.62-0.91-2.1c-0.61-0.48-1.47-0.73-2.6-0.73h-5.35V0.6h5.88c1.06 0 1.99 0.19 2.79 0.58c0.8 0.39 1.42 0.93 1.86 1.62 c0.45 0.69 0.67 1.5 0.67 2.43v0.03c0 0.64-0.15 1.26-0.44 1.84c-0.29 0.58-0.69 1.07-1.2 1.47c-0.51 0.4-1.08 0.65-1.72 0.74v0.05 c0.89 0.1 1.66 0.36 2.3 0.77c0.64 0.41 1.14 0.94 1.48 1.59c0.34 0.65 0.51 1.38 0.51 2.2v0.03c0 1.09-0.25 2.02-0.75 2.8 c-0.5 0.78-1.22 1.37-2.15 1.79c-0.93 0.42-2.06 0.62-3.38 0.62h-5.85V17.1z M66.26 18.56c-0.93-0.57-1.65-1.37-2.17-2.41 c-0.52-1.04-0.78-2.27-0.78-3.68v-0.03c0-1.42 0.26-2.65 0.78-3.68c0.52-1.03 1.24-1.83 2.17-2.39c0.93-0.56 2.01-0.84 3.23-0.84 c1.23 0 2.32 0.28 3.25 0.84c0.93 0.56 1.65 1.36 2.17 2.39c0.52 1.03 0.78 2.26 0.78 3.68v0.03c0 1.42-0.26 2.65-0.78 3.69 c-0.52 1.04-1.24 1.84-2.17 2.4c-0.93 0.57-2.01 0.85-3.24 0.85S67.19 19.12 66.26 18.56z M71.57 16.84 c0.58-0.39 1.03-0.96 1.35-1.7c0.32-0.74 0.48-1.63 0.48-2.68v-0.03c0-1.05-0.16-1.94-0.48-2.67s-0.78-1.3-1.36-1.68 C70.97 7.69 70.29 7.5 69.5 7.5c-0.77 0-1.45 0.19-2.04 0.59c-0.59 0.39-1.04 0.95-1.37 1.68c-0.33 0.73-0.49 1.62-0.49 2.67v0.03 c0 1.05 0.16 1.94 0.49 2.68c0.33 0.74 0.78 1.31 1.37 1.7c0.59 0.39 1.27 0.59 2.06 0.59S71 17.23 71.57 16.84z M80.24 18.56 c-0.93-0.57-1.65-1.37-2.17-2.41c-0.52-1.04-0.78-2.27-0.78-3.68v-0.03c0-1.42 0.26-2.65 0.78-3.68c0.52-1.03 1.24-1.83 2.17-2.39 c0.93-0.56 2.01-0.84 3.23-0.84c1.23 0 2.32 0.28 3.25 0.84c0.93 0.56 1.65 1.36 2.17 2.39c0.52 1.03 0.78 2.26 0.78 3.68v0.03 c0 1.42-0.26 2.65-0.78 3.69c-0.52 1.04-1.24 1.84-2.17 2.4c-0.93 0.57-2.01 0.85-3.24 0.85C82.25 19.4 81.17 19.12 80.24 18.56z M85.55 16.84c0.58-0.39 1.03-0.96 1.35-1.7c0.32-0.74 0.48-1.63 0.48-2.68v-0.03c0-1.05-0.16-1.94-0.48-2.67 c-0.32-0.74-0.78-1.3-1.36-1.68c-0.59-0.39-1.27-0.58-2.06-0.58c-0.77 0-1.45 0.19-2.04 0.59c-0.59 0.39-1.04 0.95-1.37 1.68 c-0.33 0.73-0.49 1.62-0.49 2.67v0.03c0 1.05 0.16 1.94 0.49 2.68c0.33 0.74 0.78 1.31 1.37 1.7c0.59 0.39 1.27 0.59 2.06 0.59 S84.97 17.23 85.55 16.84z M92.1 0.6h2.24v18.55H92.1V0.6z M93.83 11.68h0.55l5.86-5.9h2.71l-6.34 6.31h-0.18l-2.61 2.49V11.68z M95.45 12.76l1.49-1.49l6.2 7.88h-2.6L95.45 12.76z M110.44 0.6h2.31v18.55h-2.31V0.6z M111.6 10.47h4.86 c1.33 0 2.36-0.35 3.09-1.04c0.73-0.69 1.09-1.64 1.09-2.86V6.55c0-1.23-0.36-2.18-1.09-2.87c-0.73-0.69-1.76-1.03-3.09-1.03h-4.86 V0.6h5.45c1.17 0 2.19 0.25 3.09 0.75c0.89 0.5 1.59 1.19 2.1 2.08S123 5.35 123 6.52v0.03c0 1.17-0.26 2.21-0.76 3.11 s-1.21 1.6-2.1 2.11c-0.89 0.51-1.92 0.76-3.09 0.76h-5.45V10.47z M125.31 5.78h2.24v2.26h0.05c0.22-0.77 0.61-1.38 1.16-1.84 s1.2-0.68 1.95-0.68c0.2 0 0.37 0.01 0.53 0.03c0.16 0.02 0.28 0.04 0.37 0.06v2.17c-0.09-0.03-0.24-0.06-0.46-0.09 s-0.46-0.04-0.74-0.04c-0.57 0-1.08 0.13-1.51 0.39c-0.43 0.26-0.77 0.63-1 1.11c-0.24 0.48-0.35 1.07-0.35 1.74v8.25h-2.24V5.78z M135.07 18.56c-0.93-0.57-1.65-1.37-2.17-2.41c-0.52-1.04-0.78-2.27-0.78-3.68v-0.03c0-1.42 0.26-2.65 0.78-3.68 c0.52-1.03 1.24-1.83 2.17-2.39c0.93-0.56 2.01-0.84 3.23-0.84c1.23 0 2.32 0.28 3.25 0.84c0.93 0.56 1.65 1.36 2.17 2.39 c0.52 1.03 0.78 2.26 0.78 3.68v0.03c0 1.42-0.26 2.65-0.78 3.69s-1.24 1.84-2.17 2.4c-0.93 0.57-2.01 0.85-3.24 0.85 S136 19.12 135.07 18.56z M140.38 16.84c0.58-0.39 1.03-0.96 1.35-1.7c0.32-0.74 0.48-1.63 0.48-2.68v-0.03 c0-1.05-0.16-1.94-0.48-2.67c-0.32-0.74-0.78-1.3-1.36-1.68c-0.59-0.39-1.27-0.58-2.06-0.58c-0.77 0-1.45 0.19-2.04 0.59 c-0.59 0.39-1.04 0.95-1.37 1.68c-0.33 0.73-0.49 1.62-0.49 2.67v0.03c0 1.05 0.16 1.94 0.49 2.68c0.33 0.74 0.78 1.31 1.37 1.7 c0.59 0.39 1.27 0.59 2.06 0.59S139.8 17.23 140.38 16.84z'/%3E%3C/svg%3E");
`;
export const MbpKeyboard = styled.div`
  width: 99.75%;
  height: 7.6%;
  margin: 0 auto;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Front = styled.div`
  /* 	opacity:0; */
  width: 100%;
  height: 37.25%;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  background: linear-gradient(
    90deg,
    #68696b 0%,
    #757678 0.15%,
    #a0a1a3 0.3%,
    #cccdcf 0.5%,
    #e7e8ea 0.8%,
    #e8e9eb 1%,
    #dfe0e2 1.25%,
    #d1d2d4 1.5%,
    #adaeb0 2%,
    #a4a5a7 3%,
    #bbbdbf 4%,
    #e1e1e3 8%,
    #eaebed 15%,
    #e9eaec 25%,
    #e9eaec 75%,
    #eaebed 85%,
    #e1e1e3 92%,
    #bbbdbf 96%,
    #a4a5a7 97%,
    #adaeb0 98%,
    #d1d2d4 98.5%,
    #dfe0e2 98.75%,
    #e8e9eb 99%,
    #e7e8ea 99.2%,
    #cccdcf 99.5%,
    #a0a1a3 99.7%,
    #757678 99.85%,
    #68696b 100%
  );
  z-index: 100;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Openerleft = styled.div`
  position: relative;
  width: 6.917%;
  height: 65.5%;
  z-index: 101;
  border-radius: 0 0 0 20px;
  background-color: #c1c2c6;
  background: linear-gradient(
      180deg,
      rgba(195, 198, 200, 0.5) 0%,
      rgba(199, 200, 204, 0.5) 60%,
      rgba(115, 125, 130, 0.4) 100%
    ),
    radial-gradient(
      circle at right,
      rgba(189, 190, 193, 0.5) 0%,
      rgba(189, 190, 193, 0.5) 50%,
      rgba(166, 169, 172, 0.5) 80%,
      rgba(30, 34, 40, 0.75) 100%
    );
  background-blend-mode: darken;
`;
export const OpenerRight = styled.div`
  position: relative;
  width: 6.917%;
  height: 65.5%;
  z-index: 101;
  border-radius: 0 0 20px 0;
  background-color: #c1c2c6;
  background: linear-gradient(
      180deg,
      rgba(195, 198, 200, 0.5) 0%,
      rgba(199, 200, 204, 0.5) 60%,
      rgba(115, 125, 130, 0.4) 100%
    ),
    radial-gradient(
      circle at left,
      rgba(189, 190, 193, 0.5) 0%,
      rgba(189, 190, 193, 0.5) 50%,
      rgba(166, 169, 172, 0.5) 80%,
      rgba(30, 34, 40, 0.75) 100%
    );
  background-blend-mode: darken;
`;
export const BottomLeft = styled.div`
  display: block;
  position: relative;
  width: 50%;
  height: 58%;
  top: 10%;
  z-index: 99;
  background: linear-gradient(
    180deg,
    #e5e6e9 0%,
    #909193 65%,
    #4e4f51 90%,
    #323234 96%,
    #29292b 100%
  );
  border-bottom-left-radius: 25% 60%;
`;
export const BottomRight = styled.div`
  display: block;
  position: relative;
  width: 50%;
  height: 58%;
  top: 10%;
  z-index: 99;
  background: linear-gradient(
    180deg,
    #e5e6e9 0%,
    #909193 65%,
    #4e4f51 90%,
    #323234 96%,
    #29292b 100%
  );
  border-bottom-right-radius: 25% 60%;
`;
export const MbpShadow = styled.div`
  width: 95%;
  height: 60%;
  display: flex;
  justify-content: center;
`;
export const ShadowLeft = styled.div`
  display: block;
  position: relative;
  width: 50%;
  height: 100%;
  top: 10%;
  z-index: 90;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(8, 11, 17, 0.85) 2.5%,
    rgba(29, 32, 36, 0.4) 15%,
    rgba(255, 255, 255, 0) 50%
  );
  filter: blur(2px);
  background-blend-mode: multiply;
  border-top-left-radius: 20% 90%;
`;
export const ShadowRight = styled.div`
  display: block;
  position: relative;
  width: 50%;
  height: 100%;
  top: 10%;
  z-index: 90;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(8, 11, 17, 0.85) 2.5%,
    rgba(29, 32, 36, 0.4) 15%,
    rgba(255, 255, 255, 0) 50%
  );
  filter: blur(2px);
  background-blend-mode: multiply;
  border-top-right-radius: 20% 90%;
`;
//////////////////////
//////////////////////
//////////////////////
// .mbp-mockup-wrapper {
//   width: 85%;
//   max-width: 1280px;
//   max-width: 1200px;
//   min-width: 320px;
//   min-width: 280px;
//   margin: 10px auto 20px;
//   height: auto;
//   align-self: center;
//   position: relative;
//   display: none;
//   @media screen and (min-width: 768px) {
//     display: block;
//   }
// }
// .mbp-container {
//   position: relative;
//   width: 100%;
//   max-width: 1280px;
//   min-width: 320px;
//   min-width: 280px;

//   height: auto;
//   padding-top: 58.6%;
//   margin: 0 auto;
//   background-size: contain;
//   background-position: center center;
//   background-repeat: no-repeat;
//   box-sizing: border-box;
// }
// .mbp-display {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   display: block;
//   width: 81.3%;
//   height: 95.2%;
//   margin: 0 auto;
//   background-image: radial-gradient(#cfd0d1, #cfd0d1, #adadae);
//   border: 1px solid #e5e7e9;
//   border-radius: 3.1% / 4%;
//   z-index: 1;
// }
// .mbp-display .display-edge {
//   display: block;
//   position: relative;
//   width: 99.37%;
//   height: 99.25%;
//   margin: 0.3% auto;
//   z-index: 2;
//   background-color: #262626;
//   border-radius: 2.75% / 3.8%;
// }
// .mbp-display .display-edge .bezel {
//   display: block;
//   position: relative;
//   width: 99.5%;
//   height: 99.2%;
//   margin: auto;
//   top: 0.4%;
//   border-radius: 2.8% / 3.2%;
//   z-index: 3;
//   background-color: #010101;
// }

// .mbp-display.with-glare .bezel:after {
//   display: block;
// }
// .mbp-display .display-edge .bezel .display-camera {
//   width: 0.62%;
//   height: 0.95%;
//   margin: 1% auto;
//   left: 0;
//   right: 0;
//   position: absolute;
//   border-radius: 50%;
//   z-index: 5;
//   background-color: #303132;
// }
// .mbp-display .display-edge .bezel .display-frame {
//   display: block;
//   position: absolute;
//   width: 97.65%;
//   height: 89.5%;
//   margin: 0 auto;
//   top: 3.5%;
//   left: 0;
//   right: 0;
//   background-color: #151515;
//   overflow-x: hidden;
// }
// .mbp-display .display-frame iframe {
//   left: 0;
//   top: 0;
//   position: absolute;
//   width: 200%;
//   height: 200%;
//   border: 0;
//   //   -ms-zoom: 0.5;
//   -moz-transform: scale(0.5);
//   -moz-transform-origin: 0 0;
//   -o-transform: scale(0.5);
//   -o-transform-origin: 0 0;
//   -webkit-transform: scale(0.5);
//   -webkit-transform-origin: 0 0;
//   transform: scale(0.5);
//   transform-origin: 0 0;
// }
// .mbp-display .display-edge .bezel .below-display {
//   display: flex;
//   justify-content: center;
//   position: absolute;
//   width: 100%;
//   height: 4.9%;
//   bottom: 0.15%;
//   z-index: 3;
//   // background-color: #212121;
//   background-color: #121212;
//   border-bottom-right-radius: 2.5% 70%;
//   border-bottom-left-radius: 2.5% 70%;
// }
// .mbp-display .display-edge .bezel .below-display .macbookpro {
//   display: block;
//   display: block;
//   position: relative;
//   width: 7.4%;
//   height: 32%;
//   margin-top: 0.5%;
//   background-repeat: no-repeat;
//   background-size: 100%;
//   background-position: center;
//   background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 145 20' %3E%3Cpath fill='%23D8D8DA' d='M0.5 0.6h2.67L9.6 16.23h0.08L16.11 0.6h2.67v18.55h-2.16V4.81h-1.05l2.51-3.7l-7.46 18.04H8.66L1.21 1.11 l2.51 3.7H2.66v14.33H0.5V0.6z M23.23 18.9c-0.67-0.33-1.19-0.81-1.56-1.41s-0.56-1.32-0.56-2.12v-0.03c0-1.14 0.42-2.05 1.27-2.73 c0.85-0.68 2.04-1.07 3.57-1.15l4.95-0.28v1.74l-4.69 0.28c-0.89 0.05-1.58 0.27-2.08 0.64c-0.49 0.38-0.74 0.88-0.74 1.5v0.03 c0 0.64 0.24 1.15 0.73 1.53s1.13 0.57 1.93 0.57c0.7 0 1.34-0.15 1.9-0.44c0.56-0.29 1.01-0.7 1.34-1.21 c0.33-0.51 0.49-1.09 0.49-1.74v-3.95c0-0.81-0.26-1.45-0.76-1.92c-0.51-0.47-1.23-0.7-2.17-0.7c-0.86 0-1.55 0.19-2.08 0.56 c-0.53 0.37-0.85 0.86-0.98 1.46l-0.03 0.12h-2.16l0.01-0.14c0.07-0.74 0.32-1.41 0.75-2.01s1.03-1.08 1.79-1.43 c0.76-0.36 1.67-0.53 2.71-0.53c1.05 0 1.96 0.18 2.73 0.54c0.77 0.36 1.36 0.87 1.78 1.52c0.42 0.66 0.63 1.43 0.63 2.32v9.24 h-2.24v-2.17h-0.05c-0.26 0.49-0.6 0.91-1.03 1.28c-0.43 0.36-0.91 0.65-1.45 0.85c-0.54 0.2-1.1 0.3-1.7 0.3 C24.67 19.4 23.9 19.24 23.23 18.9z M37.12 18.55c-0.93-0.57-1.65-1.38-2.15-2.42c-0.51-1.04-0.76-2.27-0.76-3.68v-0.01 c0-1.41 0.26-2.63 0.77-3.66s1.23-1.84 2.16-2.4c0.93-0.57 2.01-0.85 3.24-0.85c1.11 0 2.07 0.22 2.87 0.65 c0.8 0.43 1.43 0.99 1.88 1.68c0.46 0.69 0.73 1.41 0.83 2.17l0.01 0.1h-2.19l-0.03-0.1c-0.16-0.67-0.52-1.26-1.07-1.76 S41.36 7.5 40.38 7.5c-0.77 0-1.45 0.2-2.03 0.61c-0.58 0.41-1.04 0.98-1.36 1.72c-0.33 0.74-0.49 1.62-0.49 2.63v0.01 c0 1.04 0.17 1.92 0.49 2.66c0.33 0.74 0.79 1.3 1.38 1.7c0.59 0.39 1.27 0.59 2.04 0.59c0.92 0 1.66-0.23 2.23-0.7 c0.57-0.47 0.95-1.07 1.14-1.82l0.03-0.1H46l-0.01 0.09c-0.12 0.85-0.43 1.61-0.93 2.3c-0.5 0.68-1.15 1.22-1.94 1.62 c-0.79 0.4-1.7 0.6-2.71 0.6C39.15 19.4 38.05 19.12 37.12 18.55z M48.4 0.6h2.31v18.55H48.4V0.6z M49.56 17.1h5.5 c1.39 0 2.44-0.28 3.17-0.83c0.72-0.55 1.09-1.36 1.09-2.42v-0.03c0-0.72-0.17-1.32-0.5-1.8s-0.83-0.84-1.5-1.08 c-0.66-0.24-1.49-0.36-2.47-0.36h-5.28V8.59h4.63c1.37 0 2.42-0.27 3.14-0.8c0.72-0.53 1.09-1.3 1.09-2.3V5.47 c0-0.92-0.3-1.62-0.91-2.1c-0.61-0.48-1.47-0.73-2.6-0.73h-5.35V0.6h5.88c1.06 0 1.99 0.19 2.79 0.58c0.8 0.39 1.42 0.93 1.86 1.62 c0.45 0.69 0.67 1.5 0.67 2.43v0.03c0 0.64-0.15 1.26-0.44 1.84c-0.29 0.58-0.69 1.07-1.2 1.47c-0.51 0.4-1.08 0.65-1.72 0.74v0.05 c0.89 0.1 1.66 0.36 2.3 0.77c0.64 0.41 1.14 0.94 1.48 1.59c0.34 0.65 0.51 1.38 0.51 2.2v0.03c0 1.09-0.25 2.02-0.75 2.8 c-0.5 0.78-1.22 1.37-2.15 1.79c-0.93 0.42-2.06 0.62-3.38 0.62h-5.85V17.1z M66.26 18.56c-0.93-0.57-1.65-1.37-2.17-2.41 c-0.52-1.04-0.78-2.27-0.78-3.68v-0.03c0-1.42 0.26-2.65 0.78-3.68c0.52-1.03 1.24-1.83 2.17-2.39c0.93-0.56 2.01-0.84 3.23-0.84 c1.23 0 2.32 0.28 3.25 0.84c0.93 0.56 1.65 1.36 2.17 2.39c0.52 1.03 0.78 2.26 0.78 3.68v0.03c0 1.42-0.26 2.65-0.78 3.69 c-0.52 1.04-1.24 1.84-2.17 2.4c-0.93 0.57-2.01 0.85-3.24 0.85S67.19 19.12 66.26 18.56z M71.57 16.84 c0.58-0.39 1.03-0.96 1.35-1.7c0.32-0.74 0.48-1.63 0.48-2.68v-0.03c0-1.05-0.16-1.94-0.48-2.67s-0.78-1.3-1.36-1.68 C70.97 7.69 70.29 7.5 69.5 7.5c-0.77 0-1.45 0.19-2.04 0.59c-0.59 0.39-1.04 0.95-1.37 1.68c-0.33 0.73-0.49 1.62-0.49 2.67v0.03 c0 1.05 0.16 1.94 0.49 2.68c0.33 0.74 0.78 1.31 1.37 1.7c0.59 0.39 1.27 0.59 2.06 0.59S71 17.23 71.57 16.84z M80.24 18.56 c-0.93-0.57-1.65-1.37-2.17-2.41c-0.52-1.04-0.78-2.27-0.78-3.68v-0.03c0-1.42 0.26-2.65 0.78-3.68c0.52-1.03 1.24-1.83 2.17-2.39 c0.93-0.56 2.01-0.84 3.23-0.84c1.23 0 2.32 0.28 3.25 0.84c0.93 0.56 1.65 1.36 2.17 2.39c0.52 1.03 0.78 2.26 0.78 3.68v0.03 c0 1.42-0.26 2.65-0.78 3.69c-0.52 1.04-1.24 1.84-2.17 2.4c-0.93 0.57-2.01 0.85-3.24 0.85C82.25 19.4 81.17 19.12 80.24 18.56z M85.55 16.84c0.58-0.39 1.03-0.96 1.35-1.7c0.32-0.74 0.48-1.63 0.48-2.68v-0.03c0-1.05-0.16-1.94-0.48-2.67 c-0.32-0.74-0.78-1.3-1.36-1.68c-0.59-0.39-1.27-0.58-2.06-0.58c-0.77 0-1.45 0.19-2.04 0.59c-0.59 0.39-1.04 0.95-1.37 1.68 c-0.33 0.73-0.49 1.62-0.49 2.67v0.03c0 1.05 0.16 1.94 0.49 2.68c0.33 0.74 0.78 1.31 1.37 1.7c0.59 0.39 1.27 0.59 2.06 0.59 S84.97 17.23 85.55 16.84z M92.1 0.6h2.24v18.55H92.1V0.6z M93.83 11.68h0.55l5.86-5.9h2.71l-6.34 6.31h-0.18l-2.61 2.49V11.68z M95.45 12.76l1.49-1.49l6.2 7.88h-2.6L95.45 12.76z M110.44 0.6h2.31v18.55h-2.31V0.6z M111.6 10.47h4.86 c1.33 0 2.36-0.35 3.09-1.04c0.73-0.69 1.09-1.64 1.09-2.86V6.55c0-1.23-0.36-2.18-1.09-2.87c-0.73-0.69-1.76-1.03-3.09-1.03h-4.86 V0.6h5.45c1.17 0 2.19 0.25 3.09 0.75c0.89 0.5 1.59 1.19 2.1 2.08S123 5.35 123 6.52v0.03c0 1.17-0.26 2.21-0.76 3.11 s-1.21 1.6-2.1 2.11c-0.89 0.51-1.92 0.76-3.09 0.76h-5.45V10.47z M125.31 5.78h2.24v2.26h0.05c0.22-0.77 0.61-1.38 1.16-1.84 s1.2-0.68 1.95-0.68c0.2 0 0.37 0.01 0.53 0.03c0.16 0.02 0.28 0.04 0.37 0.06v2.17c-0.09-0.03-0.24-0.06-0.46-0.09 s-0.46-0.04-0.74-0.04c-0.57 0-1.08 0.13-1.51 0.39c-0.43 0.26-0.77 0.63-1 1.11c-0.24 0.48-0.35 1.07-0.35 1.74v8.25h-2.24V5.78z M135.07 18.56c-0.93-0.57-1.65-1.37-2.17-2.41c-0.52-1.04-0.78-2.27-0.78-3.68v-0.03c0-1.42 0.26-2.65 0.78-3.68 c0.52-1.03 1.24-1.83 2.17-2.39c0.93-0.56 2.01-0.84 3.23-0.84c1.23 0 2.32 0.28 3.25 0.84c0.93 0.56 1.65 1.36 2.17 2.39 c0.52 1.03 0.78 2.26 0.78 3.68v0.03c0 1.42-0.26 2.65-0.78 3.69s-1.24 1.84-2.17 2.4c-0.93 0.57-2.01 0.85-3.24 0.85 S136 19.12 135.07 18.56z M140.38 16.84c0.58-0.39 1.03-0.96 1.35-1.7c0.32-0.74 0.48-1.63 0.48-2.68v-0.03 c0-1.05-0.16-1.94-0.48-2.67c-0.32-0.74-0.78-1.3-1.36-1.68c-0.59-0.39-1.27-0.58-2.06-0.58c-0.77 0-1.45 0.19-2.04 0.59 c-0.59 0.39-1.04 0.95-1.37 1.68c-0.33 0.73-0.49 1.62-0.49 2.67v0.03c0 1.05 0.16 1.94 0.49 2.68c0.33 0.74 0.78 1.31 1.37 1.7 c0.59 0.39 1.27 0.59 2.06 0.59S139.8 17.23 140.38 16.84z'/%3E%3C/svg%3E");
// }
// .mbp-keyboard {
//   width: 99.75%;
//   height: 7.6%;
//   margin: 0 auto;
//   position: absolute;
//   bottom: 0px;
//   left: 0;
//   right: 0;
//   z-index: 100;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// }
// .mbp-keyboard .front {
//   /* 	opacity:0; */
//   width: 100%;
//   height: 37.25%;
//   position: absolute;
//   margin: 0 auto;
//   left: 0;
//   right: 0;
//   top: 0;
//   background: linear-gradient(
//     90deg,
//     #68696b 0%,
//     #757678 0.15%,
//     #a0a1a3 0.3%,
//     #cccdcf 0.5%,
//     #e7e8ea 0.8%,
//     #e8e9eb 1%,
//     #dfe0e2 1.25%,
//     #d1d2d4 1.5%,
//     #adaeb0 2%,
//     #a4a5a7 3%,
//     #bbbdbf 4%,
//     #e1e1e3 8%,
//     #eaebed 15%,
//     #e9eaec 25%,
//     #e9eaec 75%,
//     #eaebed 85%,
//     #e1e1e3 92%,
//     #bbbdbf 96%,
//     #a4a5a7 97%,
//     #adaeb0 98%,
//     #d1d2d4 98.5%,
//     #dfe0e2 98.75%,
//     #e8e9eb 99%,
//     #e7e8ea 99.2%,
//     #cccdcf 99.5%,
//     #a0a1a3 99.7%,
//     #757678 99.85%,
//     #68696b 100%
//   );
//   z-index: 100;
//   border-radius: 1px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
// }
// .mbp-keyboard .opener-left {
//   position: relative;
//   width: 6.917%;
//   height: 65.5%;
//   z-index: 101;
//   border-radius: 0 0 0 20px;
//   background-color: #c1c2c6;
//   background: linear-gradient(
//       180deg,
//       rgba(195, 198, 200, 0.5) 0%,
//       rgba(199, 200, 204, 0.5) 60%,
//       rgba(115, 125, 130, 0.4) 100%
//     ),
//     radial-gradient(
//       circle at right,
//       rgba(189, 190, 193, 0.5) 0%,
//       rgba(189, 190, 193, 0.5) 50%,
//       rgba(166, 169, 172, 0.5) 80%,
//       rgba(30, 34, 40, 0.75) 100%
//     );
//   background-blend-mode: darken;
// }
// .mbp-keyboard .opener-right {
//   position: relative;
//   width: 6.917%;
//   height: 65.5%;
//   z-index: 101;
//   border-radius: 0 0 20px 0;
//   background-color: #c1c2c6;
//   background: linear-gradient(
//       180deg,
//       rgba(195, 198, 200, 0.5) 0%,
//       rgba(199, 200, 204, 0.5) 60%,
//       rgba(115, 125, 130, 0.4) 100%
//     ),
//     radial-gradient(
//       circle at left,
//       rgba(189, 190, 193, 0.5) 0%,
//       rgba(189, 190, 193, 0.5) 50%,
//       rgba(166, 169, 172, 0.5) 80%,
//       rgba(30, 34, 40, 0.75) 100%
//     );
//   background-blend-mode: darken;
// }
// .mbp-keyboard .bottom-left {
//   display: block;
//   position: relative;
//   width: 50%;
//   height: 58%;
//   top: 10%;
//   z-index: 99;
//   background: linear-gradient(
//     180deg,
//     #e5e6e9 0%,
//     #909193 65%,
//     #4e4f51 90%,
//     #323234 96%,
//     #29292b 100%
//   );
//   border-bottom-left-radius: 25% 60%;
// }
// .mbp-keyboard .bottom-right {
//   display: block;
//   position: relative;
//   width: 50%;
//   height: 58%;
//   top: 10%;
//   z-index: 99;
//   background: linear-gradient(
//     180deg,
//     #e5e6e9 0%,
//     #909193 65%,
//     #4e4f51 90%,
//     #323234 96%,
//     #29292b 100%
//   );
//   border-bottom-right-radius: 25% 60%;
// }
// .mbp-shadow {
//   width: 95%;
//   height: 60%;
//   display: flex;
//   justify-content: center;
// }
// .mbp-shadow .shadow-left {
//   display: block;
//   position: relative;
//   width: 50%;
//   height: 100%;
//   top: 10%;
//   z-index: 90;
//   background: linear-gradient(
//     180deg,
//     rgba(0, 0, 0, 1) 0%,
//     rgba(8, 11, 17, 0.85) 2.5%,
//     rgba(29, 32, 36, 0.4) 15%,
//     rgba(255, 255, 255, 0) 50%
//   );
//   filter: blur(2px);
//   background-blend-mode: multiply;
//   border-top-left-radius: 20% 90%;
// }
// .mbp-shadow .shadow-right {
//   display: block;
//   position: relative;
//   width: 50%;
//   height: 100%;
//   top: 10%;
//   z-index: 90;
//   background: linear-gradient(
//     180deg,
//     rgba(0, 0, 0, 1) 0%,
//     rgba(8, 11, 17, 0.85) 2.5%,
//     rgba(29, 32, 36, 0.4) 15%,
//     rgba(255, 255, 255, 0) 50%
//   );
//   filter: blur(2px);
//   background-blend-mode: multiply;
//   border-top-right-radius: 20% 90%;
// }
