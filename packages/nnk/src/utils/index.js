import { DESKTOP, MOBILE, TABLET } from '../constants/devices';
import config from '../setup/config';

export const getSocialLinks = linksToDisplay => {
  const { socialLinks } = config;
  return socialLinks.filter(link => linksToDisplay.includes(link.type));
};

export const getMediaQuery = () => {
  if (typeof window !== 'undefined' && window.document) {
    if (window.innerWidth <= 768) {
      return MOBILE;
    }
    if (window.innerWidth <= 1000) {
      return TABLET;
    }
  }
  return DESKTOP;
};
