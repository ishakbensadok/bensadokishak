import {
  ErrorMessage,
  FormGroup,
  FormInputField,
  FormLabel,
  FormTextarea,
} from './form-input.styles.jsx';

const FormInput = ({ label, errorMessage, ...other }) => {
  return (
    <FormGroup>
      {label !== 'message' ? (
        <FormInputField {...other} maxLength='256' />
      ) : (
        <FormTextarea {...other} maxLength='5000'></FormTextarea>
      )}
      <FormLabel className={`${other.value.length > 0 ? 'shrink' : ''}`}>
        {label !== 'message' ? label : `Hello Ishak, can you help me with ...`}
      </FormLabel>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormGroup>
  );
};

export default FormInput;
