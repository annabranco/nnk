import { styled } from 'frontity';
import { DARK, LIGHT } from '../constants/theme';

/* Basic Page Colors */

export const THEMES = {
  [DARK]: {
    primary: '#212121',
    secondary: '#ffffff',
    terciary: '#c41717',
    neutral: '#868686',
    highlights: '#ebe101'
  },
  [LIGHT]: {
    primary: '#ffffff',
    secondary: '#212121',
    terciary: '#c41717',
    neutral: '#868686',
    highlights: '#bfaf00'
  }
};

/* Fonts */
export const fontTitle = "'Bebas Neue', sans-serif";
export const fontText = "'Bebas Neue', sans-serif";

/* Sizes */

export const sizeSmall = '1rem';
export const sizeMedium = '1.5rem';
export const sizeLarge = '2rem';
export const sizeXLarge = '2.8rem';

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
  text-transform: uppercase;
`;
