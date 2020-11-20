import { LIGHT } from '../constants/theme';
import { THEMES } from './themes';

export default {
  defaultLanguage: 'en',
  theme: LIGHT,
  mainPadding: '10px',
  buttonsBackground: THEMES[LIGHT].purewWhite,
  buttonsText: THEMES[LIGHT].primary,
  buttonsHighlight: THEMES[LIGHT].terciary,
  latestReportsNum: 2,
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
      link: 'https://www.youtube.com/no_name_kitchen/',
      hide: false
    },
    {
      type: 'Email',
      link: 'mailto:nnk@nnk.org',
      hide: false
    }
  ]
};
