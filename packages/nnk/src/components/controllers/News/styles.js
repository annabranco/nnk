import { css, styled } from 'frontity';
import { sizeMedium } from '../../../setup/themes';
import Link from '../../core/Link';

export const NewsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: ${({ colors }) => colors && colors.secondary};
`;
NewsSection.displayName = 'NewsSection';

export const NewsWrapper = styled.div`
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0;
  padding: 12px;
  list-style: none;
  background: ${({ colors }) => colors && colors.secondary};

  @media all and (min-width: 768px) {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    padding: 24px;
  }
`;
NewsWrapper.displayName = 'NewsWrapper';
