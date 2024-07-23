import React from 'react';
import styled from 'styled-components';

interface TextProps {
  title: string;
  content: string;
  style?: React.CSSProperties;
}

const StyledText = styled.div<TextProps>`
  padding: 12px;
`;

const Text: React.FC<TextProps> = ({ title, content, style }) => {
  return (
    <StyledText style={style}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledText>
  );
};

export default Text;
export type { TextProps };
