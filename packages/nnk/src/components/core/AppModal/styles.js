/* eslint-disable no-unused-vars */

import { css, styled } from 'frontity';
import {
  fontText,
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
  color: red;
  color: ${({ colors }) => colors.terciary};

  cursor: pointer;
  border: ${({ colors }) => `2px solid ${colors.terciary}`};
  border-radius: 5px;
  padding: 5px 10px;

  &:hover {
    box-shadow: 0 0 2px 2px white;
  }

  ${({ text }) =>
    text &&
    css`
      &::before {
        content: '${text}';
        text-transform: uppercase;
        font-weight: 900;
        font-family: ${fontText};
        font-size: 1rem;
      }
    `};
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
