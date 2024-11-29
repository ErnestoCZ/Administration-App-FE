import { Link } from '@tanstack/react-router';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 300ms;
  }
`;

export default StyledLink;
