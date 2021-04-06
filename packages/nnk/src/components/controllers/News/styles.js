import { css, styled } from 'frontity';
import { sizeMedium } from '../../../setup/themes';
import Link from '../../core/Link';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100vw;
  margin: 0;
  padding: 24px;
  list-style: none;
  background: ${({ colors }) => colors && colors.secondary};
`;
