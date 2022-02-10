import { styled } from 'frontity';

export const MenuToggle = styled.button`
  z-index: 11;
  position: fixed;
  right: 15px;
  margin-top: 20px;
  border: 0;
  background: ${({ colors }) => colors && colors.primary};
  color: white;

  @media all and (min-width: 768px) {
    display: none;
  }
`;
MenuToggle.displayName = 'MenuToggle';
