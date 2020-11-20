import axios from 'axios';

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

export const fetchData = URL => {
  const request = axios
    .get(URL)
    .then(resp => resp.data)
    .catch(error => console.error(`Failed to get data from ${URL}. ${error}.`));
  return request;
};
