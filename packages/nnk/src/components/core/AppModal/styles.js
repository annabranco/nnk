/* eslint-disable no-unused-vars */

import { css, styled } from 'frontity';
import {
  sizeLarge,
  sizeLargeTitle,
  sizeSmallTitle
} from '../../../setup/themes';
import Link from '../Link';

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
