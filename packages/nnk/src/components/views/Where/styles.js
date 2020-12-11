import { styled, css } from 'frontity';
import {
  BaseText,
  BaseTitle,
  sizeHugeTitle,
  sizeLarge,
  sizeLargeTitle
} from '../../../setup/themes';

export const Content = styled.div`
  padding: 20px 0;

  @media only screen and (min-width: 1024px) {
    padding: 20px 80px;
  }
`;
Content.displayName = 'Content';

export const Map = styled.img`
  width: 100%;
`;
Map.displayName = 'Map';

export const Section = styled.section`
  color: ${({ colors }) => colors && colors.secondary};
`;
Section.displayName = 'Section';
