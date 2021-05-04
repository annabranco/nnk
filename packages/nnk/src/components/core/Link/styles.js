import { styled } from 'frontity';

export const StyledLink = styled.a`
  text-decoration: none;

  &:hover: {
    color: ${({ colors }) => colors && colors.terciary};
  }
`;
StyledLink.displayName = 'StyledLink';
