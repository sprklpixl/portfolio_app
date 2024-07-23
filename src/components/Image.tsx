import React from 'react';
import styled from 'styled-components';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

const StyledImage = styled.img<ImageProps>`
  width: 100%;
  height: auto;
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
`;

const Image: React.FC<ImageProps> = ({ src, alt, borderRadius, style }) => {
  return <StyledImage src={src} alt={alt} borderRadius={borderRadius} style={style} />;
};

export default Image;
export type { ImageProps };
