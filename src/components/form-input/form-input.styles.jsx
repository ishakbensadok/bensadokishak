import styled, { css } from 'styled-components';

const Shrink = css`
  color: black;
  font-size: 1.3rem;
  transform: translateY(-20px);
`;
export const FormLabel = styled.label`
  text-transform: capitalize;
  position: absolute;
  top: 0%;
  transform: translateY(50%);
  pointer-events: none;
  font-size: 1.5rem;
  left: 0;
  transition: all 0.3s;
  color: darkslategrey;
  font-weight: 500;

  &.shrink {
    @extend ${Shrink};
  }
`;
const Input = css`
  display: inline-block;
  width: 100%;
  min-height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  &:focus ~ ${FormLabel} {
    @extend ${Shrink};
  }
`;

export const FormInputField = styled.input`
  @extend ${Input};
`;
export const FormTextarea = styled.textarea`
  @extend ${Input};
  resize: none;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: small;
  font-size: 1.1rem;
  color: #ff4444;
  pointer-events: none;
  font-weight: 700;
  max-width: 180px;
  transition: all 0.3s;
  @media screen and (min-width: 400px) {
    max-width: max-content;
  }
`;
export const FormGroup = styled.div`
  position: relative;
  margin: 20px 0;
  border-bottom: 1px solid;
  &:last-of-type {
    min-height: 250px;

    ${FormLabel} {
      bottom: initial;
    }
    ${FormTextarea} {
      min-height: 200px;
      position: relative;
      resize: none;
      display: block;
    }
  }
`;

// .shrink {
//   color: black;
//   font-size: 1.3rem;
//   transform: translateY(-20px);
// }

// .form__group {
//   position: relative;
//   margin: 20px 0;
//   border-bottom: 1px solid;

//   &:last-of-type {
//     min-height: 250px;

//     .form-label {
//       bottom: initial;
//     }
//     .form-input {
//       min-height: 200px;
//       position: relative;
//       resize: none;
//       display: block;
//     }
//   }

//   .form-input {
//     width: 100%;
//     min-height: 50px;
//     border: none;
//     outline: none;
//     background-color: transparent;
//     &:focus ~ .form-label {
//       @extend .shrink;
//     }
//   }
//   .form-label {
//     text-transform: capitalize;
//     position: absolute;
//     top: 0%;
//     transform: translateY(50%);
//     pointer-events: none;
//     font-size: 1.5rem;
//     left: 0;
//     transition: all 0.3s;
//     color: darkslategrey;
//     font-weight: 500;

//     &.shrink {
//       @extend .shrink;
//     }
//   }
//   .error-message {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     font-size: small;
//     font-size: 1.1rem;
//     color: #ff4444;
//     pointer-events: none;
//     font-weight: 700;
//   }
// }
