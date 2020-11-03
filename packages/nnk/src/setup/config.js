import { LIGHT } from '../constants/theme';
import { THEMES } from './themes';

export default {
  defaultLanguage: 'en',
  theme: LIGHT,
  mainPadding: '10px',
  headerPadding: '80px',
  buttonsBackground: THEMES[LIGHT].primary,
  buttonsText: THEMES[LIGHT].secondary,
  buttonsHighlight: THEMES[LIGHT].terciary,
  socialLinks: [
    {
      type: 'Facebook',
      link: 'https://www.facebook.com/NoNameKitchenBelgrade'
    },
    {
      type: 'Twitter',
      link: 'https://www.twitter.com/nonamekitchen1'
    },
    {
      type: 'Instagram',
      link: 'https://www.instagram.com/no_name_kitchen/'
    },
    {
      type: 'Youtube',
      link: 'https://www.youtube.com/no_name_kitchen/'
    },
    {
      type: 'Email',
      link: 'mailto:nnk@nnk.org',
      hide: true
    }
  ]
};
