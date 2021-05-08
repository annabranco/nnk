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
  campaigns: {
    mainCampaing: 'weAreAllMigrantSouls',
    activeCampaigns: [
      'weAreAllMigrantSouls',
      'emergencyInNorthBosnia',
      'supportPeopleInSerbia',
      'foodHealthInGreece'
    ],
    details: {
      weAreAllMigrantSouls: {
        id: 'no-name-kitchen',
        name: 'WE ARE ALL MIGRANT SOULS',
        order: 0,
        url: 'https://donorbox.org/no-name-kitchen'
      },
      emergencyInNorthBosnia: {
        id: 'emergency-in-northern-bosnia',
        name: 'EMERGENCY IN NORTHERN BOSNIA',
        order: 1,
        url: 'https://donorbox.org/emergency-in-northern-bosnia'
      },
      supportPeopleInSerbia: {
        id: 'supportingnnkinserbia',
        name: 'SUPPORTING PEOPLE ON THE MOVE IN SERBIA',
        order: 2,
        url: 'https://donorbox.org/supportingnnkinserbia'
      },
      foodHealthInGreece: {
        id: 'food-health-for-refugees-in-patras',
        name: 'FOOD & HEALTH FOR REFUGEES IN PATRAS',
        order: 3,
        url: 'https://donorbox.org/food-health-for-refugees-in-patras'
      },
      openTheBorders: {
        id: 'open-the-borders',
        name: 'OPEN THE BORDERS',
        order: 4,
        url: 'https://donorbox.org/open-the-borders'
      }
    }
  },
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
    address: 'C/ Leopoldo Alas 11-1 Gijon (Asturias) - Spain',
    bank: 'Triodos Bank NV S.E.',
    bankAddress: 'Calle Cabo Noval, 11 - 33007 Oviedo (Asturias) - Spain',
    iban: 'ES19 1491 0001 2830 0013 6961',
    swift: 'TRIOESMMXXX'
  }
};
