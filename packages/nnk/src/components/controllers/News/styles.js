import { css, styled } from 'frontity';
import { sizeMedium } from '../../../setup/themes';
import Link from '../../core/Link';

export const Container = styled.section`
  grid-template-columns: 1fr;
  width: 100vw;
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
