import React, { FC } from 'react';
import { styled, keyframes } from 'styled-components';

const StyledLogo = styled.img<{ $spinleft?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${(props) => (props.$spinleft ? spinLeft : spinRight)} 5s infinite
    linear;
`;

const spinLeft = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
      transform: rotate(-360deg);
  }`;

const spinRight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }`;

interface LogoProps {
  src: string;
  alt: string;
  spinleft?: boolean;
}

export const Logo: FC<LogoProps> = ({ src, alt, spinleft }) => {
  return <StyledLogo src={src} alt={alt} $spinleft={spinleft} />;
};
