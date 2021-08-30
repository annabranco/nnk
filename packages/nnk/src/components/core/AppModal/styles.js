/* eslint-disable no-unused-vars */

import { css, styled } from 'frontity';
import {
  fontText,
  sizeLarge,
  sizeLargeTitle,
  sizeMedium,
  sizeSmallTitle
} from '../../../setup/themes';
import Link from '../Link';

export const CloseButton = styled.p`
  z-index: 100;
  position: fixed;
  top: 10px;
  right: 10px;
  color: ${({ colors }) => colors.terciary};
  background: ${({ colors }) => colors && colors.primary};
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 0 2px 2px white;
  }

  ${({ text }) =>
    !text
      ? css`
          &::before {
            content: 'x';
            text-transform: uppercase;
            font-weight: 900;
            font-family: ${fontText};
            font-size: ${sizeSmallTitle};
          }
        `
      : css`
          &::before {
            content: '${text}';
            text-transform: uppercase;
            font-weight: 900;
            font-family: ${fontText};
            font-size: ${sizeSmallTitle};
          }
        `};

  @media all and (min-width: 768px) {
    ${({ colors, text }) =>
      text &&
      css`
        top: 20px;
        right: 50px;
        border: ${`2px solid ${colors.terciary}`};
        background: none;

        &::before {
          content: '${text}';
          text-transform: uppercase;
          font-weight: 900;
          font-family: ${fontText};
          font-size: ${sizeMedium};
        }
      `};
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
  overflow-x: auto;
  padding: 0;

  @media all and (min-width: 768px) {
    padding: 30px;
  }
`;
ModalOverlay.displayName = 'ModalOverlay';
