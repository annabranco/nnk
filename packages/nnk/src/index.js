import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import App from './components/controllers/App';
import config from './setup/config';
import { THEMES } from './setup/themes';

const nnkTheme = {
  name: '@frontity/nnk-theme',
  roots: {

    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */

    theme: App
  },
  state: {
    theme: {
      language: config.defaultLanguage,
      colors: THEMES.dark,
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: true,
        showOnPost: true
      }
    },
    source: {
      data: {
        '/what/': {
          isReady: true,
          isFetching: false
        },
        '/where/': {
          isReady: true,
          isFetching: false
        },
        '/why/': {
          isReady: true,
          isFetching: false
        }
      }
    }
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      changeTheme: ({ state }) => newTheme => {
        state.theme.colors = THEMES[newTheme];
      }
    }
  },
  libraries: {
    html2react: {
      processors: [image, iframe]
    }
  }
};

export default nnkTheme;
