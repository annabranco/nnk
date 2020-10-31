import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import App from './components/controllers/App';
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
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */

    theme: {
      test: 'temp',
      colors: THEMES.dark,
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */

  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      changeTheme: ({ state }) => newTheme => {
        console.log('$$$ newTheme', newTheme);
        console.log('$$$ state', state);
        state.theme.colors = THEMES[newTheme];
      }
    }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */

      processors: [image, iframe]
    }
  }
};

export default nnkTheme;
