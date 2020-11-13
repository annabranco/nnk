import { styled } from 'frontity';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 0;
  width: 100%;
  padding: 0 24px;
  list-style: none;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;
NavContainer.displayName = 'NavContainer';
