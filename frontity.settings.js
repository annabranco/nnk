const settings = {
  name: 'nnk',
  state: {
    frontity: {
      url: 'https://www.nonamekitchen.org',
      title: 'No Name Kitchen',
      description: 'Supporting People on the Move'
    }
  },
  packages: [
    {
      name: '@frontity/nnk',
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: true,
            showOnPost: false
          }
        }
      }
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api:
            'https://public-api.wordpress.com/wp/v2/sites/threebunniesfc.wordpress.com'
          // api: 'https://c0560251.ferozo.com/wp-json/'
        }
      }
    },
    '@frontity/tiny-router',
    '@frontity/html2react'
  ]
};

export default settings;
