// eslint-disable-next-line import/no-extraneous-dependencies
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
    if (window.innerWidth < 1200) {
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
      return value.length >= 4 && !/\d/.exec(value);
    case 'message':
    default:
      return value.length > 2;
  }
};

export const allValidated = form =>
  Object.keys(form).every(field => form[field].isValid);

const MONTHS = {
  es: {
    1: 'enero',
    2: 'febrero',
    3: 'marzo',
    4: 'abril',
    5: 'mayo',
    6: 'junio',
    7: 'julio',
    8: 'agosto',
    9: 'septiembre',
    10: 'octubre',
    11: 'noviembre',
    12: 'diciembre'
  },
  en: {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  },
  pt: {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro'
  },
  ru: {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь'
  },
  de: {
    1: 'Januar',
    2: 'Februar',
    3: 'März',
    4: 'April',
    5: 'Mai',
    6: 'Juni',
    7: 'Juli',
    8: 'August',
    9: 'September',
    10: 'Oktober',
    11: 'November',
    12: 'Dezember'
  }
};

export const getFormatedDate = (rawDate, language) => {
  const date = new Date(rawDate);
  let format = config.dateFormat;

  const monthForm = format.match(/M+/i)[0];

  const toOriginalCase = month => {
    if (monthForm.match(/mM/)) {
      return month;
    }
    if (monthForm.match(/Mm/)) {
      return `${month.charAt(0).toUpperCase()}${month.substr(1).toLowerCase()}`;
    }
    if (monthForm.match(/mm/)) {
      return month.toLowerCase();
    }
    if (monthForm.match(/MM/)) {
      return month.toUpperCase();
    }
    return month;
  };

  if (language === 'en' && format.charAt(0).match(/d/i)) {
    const dayForm = format.match(/D+/i);
    format = format
      .replace(monthForm, 'dayForm')
      .replace(dayForm, 'monthForm')
      .replace('monthForm', monthForm)
      .replace('dayForm', dayForm);
  } else if (language !== 'en' && format.charAt(0).match(/m/i)) {
    const dayForm = format.match(/D+/i);
    format = format
      .replace(monthForm, 'dayForm')
      .replace(dayForm, 'monthForm')
      .replace('monthForm', monthForm)
      .replace('dayForm', dayForm);
  }
  format = format
    .replace(/DD/i, date.getDate().toString().padStart(2, '0'))
    .replace(/D/i, date.getDate())
    .replace(/MMMM/i, toOriginalCase(MONTHS[language][date.getMonth() + 1]))
    .replace(
      /MMM/i,
      toOriginalCase(MONTHS[language][date.getMonth() + 1].substring(0, 3))
    )
    .replace(/MM/i, date.getMonth().toString().padStart(2, '0'))
    .replace(/M[^a-zA-Z]/i, date.getMonth() + 1)
    .replace(/AAAA/i, date.getFullYear())
    .replace(/AA/i, date.getFullYear().toString().slice(-2))
    .replace(/YYYY/i, date.getFullYear())
    .replace(/YY/i, date.getFullYear().toString().slice(-2));

  return format;
};

export const updatedReadPosts = id => {
  const postsRead = JSON.parse(localStorage.getItem('nnk-read') || '[]');
  if (id) {
    postsRead.push(id);
    localStorage.setItem('nnk-read', JSON.stringify(postsRead));
  }
  return postsRead;
};
