import { DARK } from '../constants/theme';
import { THEMES } from './themes';

export default {
  defaultLanguage: 'en',
  theme: DARK,
  mainPadding: '10px',
  buttonsBackground: THEMES[DARK].purewWhite,
  buttonsText: THEMES[DARK].primary,
  buttonsHighlight: THEMES[DARK].terciary,
  latestReportsNum: 9,
  dateFormat: 'mMmm D yyyy', // mMm keeps the default month format
  socialLinks: [
    {
      type: 'Facebook',
      link: 'https://www.facebook.com/NoNameKitchenBelgrade'
    },
    {
      type: 'Twitter',
      link: 'https://www.twitter.com/NoNameKitchen1'
    },
    {
      type: 'Instagram',
      link: 'https://www.instagram.com/no_name_kitchen/'
    },
    {
      type: 'Youtube',
      link: 'https://www.youtube.com/channel/UCfhpNwjUjUxnN1ala_lKlYQ',
      hide: false
    },
    {
      type: 'Email',
      link: 'mailto:info@nonamekitchen.org',
      hide: false
    }
  ],
  subscriptionEndpoint:
    'https://docs.google.com/forms/d/e/1FAIpQLSfDAwap34je_R2Kt-H3QvK6tLAxRB3TMNGFmmo3_Yn5Xd3IPg/viewform?embedded=true',
  volunteerForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSe4TmEylSelfV1GJQLBURdP2Swp0mYTWAVZuehZzK6bgffbXg/viewform?embedded=true',
  partnersEmail: 'partners@nonamekitchen.org',
  account: {
    name: 'NO NAME KITCHEN',
    address: 'C/ Jovellanos 8 – Gijon (Spain)',
    iban: 'ES90 0081 5155 7100 0198 4102',
    swift: 'BSABESBBXXX'
  }
};
