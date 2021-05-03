import { styled } from 'frontity';

export const StyledLink = styled.a`
  text-decoration: none;

  & p {
    &:hover {
      color: ${({ colors }) => colors && colors.terciary};
      font-weight: 700;
    }
  }
  &:hover: {
    color: ${({ colors }) => colors && colors.terciary};
  }
`;
StyledLink.displayName = 'StyledLink';
