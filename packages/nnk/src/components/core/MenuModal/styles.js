import { styled } from 'frontity';
import Link from '../Link';

export const MenuOverlay = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1f38c5;
  height: 100vh;
  width: 100vw;
  overflow: hidden auto;
`;

export const MenuContent = styled.div`
  z-index: 3;
`;

export const MenuLink = styled(Link)`
  display: inline-block;
  outline: 0;
  width: 100%;
  padding: 1.2rem 0;
  font-size: 20px;
  text-align: center;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current='page'] {
    font-weight: bold;
    color: yellow;
    /* border-bottom: 4px solid yellow; */
  }
`;
