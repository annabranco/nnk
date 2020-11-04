import { styled } from 'frontity';

export const MenuToggle = styled.button`
  z-index: 5;
  position: absolute;
  top: 24px;
  right: 24px;
  display: none;
  border: 0;
  background: transparent;
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 560px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
