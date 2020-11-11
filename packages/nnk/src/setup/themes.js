import { styled } from 'frontity';
import { DARK, LIGHT } from '../constants/theme';

/* Basic Page Colors */

export const THEMES = {
  [DARK]: {
    primary: '#212121',
    secondary: '#f8f8ff',
    terciary: '#da002b',
    neutral: '#868686',
    purewWhite: '#ffffff',
    pureBlack: '#000000',
    highlights: '#ebe101'
  },
  [LIGHT]: {
    primary: '#f8f8ff',
    secondary: '#212121',
    terciary: '#da002b',
    neutral: '#868686',
    purewWhite: '#ffffff',
    pureBlack: '#000000',
    highlights: '#bfaf00'
  }
};

/* Fonts */
export const fontTitle = "'Bebas Neue', sans-serif";
export const fontText = "'Century Gothic', sans-serif";

/* Sizes */

export const sizeSmall = '1rem';
export const sizeMedium = '1.3rem';
export const sizeLarge = '2rem';
export const sizeXLarge = '2.8rem';
export const sizeXXLarge = '3.4rem';

export const BaseTitle = styled.h2`
  font-family: ${fontTitle};
  font-size: ${sizeLarge};
  font-weight: normal;
  text-transform: uppercase;
`;

export const BaseText = styled.p`
  font-family: ${fontText};
  font-size: ${sizeMedium};
  font-weight: normal;
  line-height: 2.2;
`;
