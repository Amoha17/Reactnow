import React from "react";
import styled from "styled-components";

// Styled input field
const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </InputContainer>
  );
};

export default InputField;
