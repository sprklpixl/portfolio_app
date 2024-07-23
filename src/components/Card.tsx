import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Text from './Text';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  textContent: string;
  disabled?: boolean;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

const CardContainer = styled.div<CardProps>`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#f0f0f0'};
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
  }
`;

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, title, textContent, disabled, backgroundColor, style }) => {
  return (
    <CardContainer disabled={disabled} backgroundColor={backgroundColor} style={style}>
      <Image src={imageSrc} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
      <Text title={title} content={textContent} />
    </CardContainer>
  );
};

export default Card;
export type { CardProps };
