import { styled, css } from 'frontity';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: ${({ colors, noBorder }) => {
    if (!noBorder && colors) {
      return `4px solid ${colors.terciary}`;
    }
    return 0;
  }};
  border-radius: 2px;
  background-color: ${({ colors }) => colors && colors.primary};
  min-height: 50px;
  max-width: 100%;
  padding: 10px;
  color: ${({ colors }) => colors && colors.secondary};

  ${({ size }) => {
    let margins = '100px';
    if (size === 'xsmall') {
      margins = '800px';
    }
    if (size === 'small') {
      margins = '600px';
    }
    if (size === 'medium') {
      margins = '400px';
    }
    if (size === 'large') {
      margins = '100px';
    }
    if (size === 'full') {
      margins = '0px';
    }
    return css`
      margin: 10px ${margins} 0;
      width: calc(100vw - ${margins});
    `;
  }}
`;
SectionContainer.displayName = 'SectionContainer';
