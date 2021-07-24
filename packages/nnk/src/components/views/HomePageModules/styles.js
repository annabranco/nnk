import { styled, css } from 'frontity';
import { FULL, LARGE, MEDIUM, SMALL, XSMALL } from '../../../constants/sizes';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: ${({ colors }) => colors && colors.primary};
  min-height: 50px;
  max-width: 100%;
  padding: 10px;
  color: ${({ colors }) => colors && colors.secondary};

  ${({ size }) => {
    let margins = '100px';
    if (size === XSMALL) {
      margins = '800px';
    }
    if (size === SMALL) {
      margins = '600px';
    }
    if (size === MEDIUM) {
      margins = '400px';
    }
    if (size === LARGE) {
      margins = '100px';
    }
    if (size === FULL) {
      margins = '0px';
    }
    return css`
      margin: 10px ${margins} 0;
      width: calc(100vw - ${margins});
    `;
  }}
`;
SectionContainer.displayName = 'SectionContainer';

export const SeparatorBar = styled.div`
  border-top: ${({ colors, noBorder }) => {
    if (!noBorder && colors) {
      return `4px solid ${colors.terciary}`;
    }
    return 0;
  }};
  border-radius: 2px;

  ${({ adjust }) =>
    adjust &&
    css`
      transform: translate(${adjust});
    `};

  ${({ size }) => {
    let widthSize = '100vw';
    if (size === XSMALL) {
      widthSize = '40vw';
    }
    if (size === SMALL) {
      widthSize = '50vw';
    }
    if (size === MEDIUM) {
      widthSize = '60vw';
    }
    if (size === LARGE) {
      widthSize = '80vw';
    }
    if (size === FULL) {
      widthSize = '100vw';
    }
    return css`
      width: ${widthSize};
    `;
  }}
`;
SeparatorBar.displayName = 'SeparatorBar';
