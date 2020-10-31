import { styled } from 'frontity';

export const FooterContainer = styled.div`
  background: black;
  min-height: 40px;
  display: flex;
  flex-direction: line;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 100px;
`;

export const FooterLink = styled.p`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: normal;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  transition: color ease 0.3s;
  text-transform: uppercase;
  margin: 10px 0;

  &:hover {
    color: red;
  }
`;
