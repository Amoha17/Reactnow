import React from "react";
import styled from "styled-components";

// Styled button component
const StyledButton = styled.button`
  background-color: ${(props) =>
    props.bgColor || "#007bff"}; /* Default: Blue */
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin: 5px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
  }
`;

const Button = ({ text, onClick, bgColor, hoverColor, type = "button" }) => {
  return (
    <StyledButton
      onClick={onClick}
      bgColor={bgColor}
      hoverColor={hoverColor}
      type={type}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
