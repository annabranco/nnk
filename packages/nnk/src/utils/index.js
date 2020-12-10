import axios from 'axios';

import { DESKTOP, MOBILE, TABLET } from '../constants/devices';
import config from '../setup/config';

export const getSocialLinks = linksToDisplay => {
  const { socialLinks } = config;
  return socialLinks.filter(link => linksToDisplay.includes(link.type));
};

export const getMediaQuery = () => {
  if (typeof window !== 'undefined' && window.document) {
    if (window.innerWidth < 768) {
      return MOBILE;
    }
    if (window.innerWidth < 1024) {
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

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateForm = (type, value) => {
  switch (type) {
    case 'email':
      return emailRegex.test(value.toLowerCase());
    case 'name':
      return value.length >= 4 && !!/\s/.exec(value);
    case 'message':
    default:
      return value.length > 2;
  }
};

export const allValidated = form =>
  Object.keys(form).every(field => {
    console.log('$$$ field', field);
    console.log('$$$ form[field]', form[field]);
    console.log('$$$ form[field]', form[field].isValid);
    return form[field].isValid;
  });
