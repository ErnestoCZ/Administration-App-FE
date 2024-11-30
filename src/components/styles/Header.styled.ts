import { styled, keyframes } from 'styled-components';

export const Logo = styled.img<{ $spinleft?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${(props) => (props.$spinleft ? spinLeft : spinRight)} 5s infinite
    linear;
`;

export const StyledHeaderTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  transition: transform(-10px);
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
