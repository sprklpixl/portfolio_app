//import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#ccc' : backgroundColor || '#007BFF')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled, backgroundColor }) => (disabled ? '#ccc' : backgroundColor ? darken(0.2, backgroundColor) : '#0056b3')};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, disabled, backgroundColor, ...props }) => {
  return <StyledButton disabled={disabled} backgroundColor={backgroundColor} {...props}>{label}</StyledButton>;
};

export default Button;
export type { ButtonProps };
