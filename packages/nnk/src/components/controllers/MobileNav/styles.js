import { styled } from 'frontity';

export const MenuToggle = styled.button`
  z-index: 11;
  position: ${({ opened }) => (opened ? 'fixed' : 'absolute')};
  right: 15px;
  margin-top: 20px;
  border: 0;
  background: transparent;
  color: white;
`;
MenuToggle.displayName = 'MenuToggle';
