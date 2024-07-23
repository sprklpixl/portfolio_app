import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledRadioButton = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...props }) => {
  return (
    <StyledLabel>
      <StyledRadioButton type="radio" {...props} />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
export type { RadioButtonProps };
