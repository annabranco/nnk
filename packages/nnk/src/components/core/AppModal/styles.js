/* eslint-disable no-unused-vars */

import { css, styled } from 'frontity';
import {
  sizeLarge,
  sizeLargeTitle,
  sizeSmallTitle
} from '../../../setup/themes';
import Link from '../Link';

export const CloseButton = styled.p`
  position: fixed;
  top: 20px;
  right: 50px;
  z-index: 100;
  color: crimson;
  cursor: pointer;

  &::before {
    content: 'x';
    font-size: 2rem;
  }
`;
CloseButton.displayName = 'CloseButton';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background: rgba(0, 0, 0, 0.85);
  overlay-x: auto;
  padding: 30px;
`;
ModalOverlay.displayName = 'ModalOverlay';
