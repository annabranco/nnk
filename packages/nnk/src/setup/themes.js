import { styled } from 'frontity';
import { DARK, LIGHT } from '../constants/theme';

/* Basic Page Colors */

export const THEMES = {
  [DARK]: {
    primary: '#0c0c0c',
    secondary: '#f8f8ff',
    terciary: '#da002b',
    neutral: '#868686',
    purewWhite: '#ffffff',
    pureBlack: '#000000',
    highlights: '#ebe101'
  },
  [LIGHT]: {
    primary: '#212121',
    secondary: '#f8f8ff',
    terciary: '#da002b',
    neutral: '#868686',
    purewWhite: '#ffffff',
    pureBlack: '#000000',
    highlights: '#ebe101'
  }
};

/* Fonts */
export const fontTitle = "'Bebas Neue', sans-serif";
export const fontText = "'Century Gothic', sans-serif";

/* Sizes */

export const sizeSmall = '0.7rem';
export const sizeDefaultText = '0.9rem';
export const sizeMedium = '1rem';
export const sizeLarge = '1.3rem';
export const sizeXLarge = '2.8rem';
export const sizeXXLarge = '3.4rem';

export const sizeSmallTitle = '1.6rem';
export const sizeMediumTitle = '2rem';
export const sizeLargeTitle = '2.6rem';
export const sizeXLargeTitle = '4rem';
export const sizeXXLargeTitle = '6rem';
export const sizeHugeTitle = '8rem';

export const BaseTitle = styled.h2`
  font-family: ${fontTitle};
  font-size: ${sizeMediumTitle};
  font-weight: normal;
  text-transform: uppercase;
`;

export const BaseText = styled.p`
  font-family: ${fontText};
  font-size: ${sizeMedium};
  font-weight: normal;
  line-height: 2.2;
  white-space: normal;
`;
