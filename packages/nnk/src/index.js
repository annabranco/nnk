import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import App from './components/controllers/App';
import config from './setup/config';
import { THEMES } from './setup/themes';

const newsListHandler = {
  name: 'newsList',
  priority: 1,
  pattern: '/news/',
  func: async ({ link, state, libraries, force }) => {
    const { page } = libraries.source.parse(link);
    const response = await libraries.source.api.get({
      endpoint: 'posts',
      // params: { page }
      params: { page, per_page: 10, categories: 262 }
      // params: { categories: 262 }
    });

    const items = await libraries.source.populate({
      response,
      state,
      force
    });

    const totalItems = await libraries.source.getTotal(response, items.length);
    const totalPages = await libraries.source.getTotalPages(response, 0);

    const hasNewerPosts = page < totalPages;
    const hasOlderPosts = page > 1;

    Object.assign(state.source.data[link], {
      // id: 262,
      isNewsList: true,
      isCategory: true,
      items,
      totalItems,
      totalPages,
      ...(hasOlderPosts && { previous: `/news/page/${page - 1}` }),
      ...(hasNewerPosts && { next: `/news/page/${page + 1}` })
    });
  }
};

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
      postsRead: [],
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
        },
        '/join-us/': {
          isReady: true,
          isFetching: false
        },
        '/help-us/': {
          isReady: true,
          isFetching: false
        }
        // '/store/': {
        //   isReady: true,
        //   isFetching: false
        // },
      }
    }
  },
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(newsListHandler);
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      changeTheme: ({ state }) => newTheme => {
        state.theme.colors = THEMES[newTheme];
      },
      updateRead: ({ state }) => postsArray => {
        state.theme.postsRead = postsArray;
      },
      changeLanguage: ({ state }) => activeLanguage => {
        state.theme.language = activeLanguage;
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
