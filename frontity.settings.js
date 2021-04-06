const settings = {
  name: 'nnk',
  state: {
    frontity: {
      url: 'http://www.nonamekitchen.org',
      title: 'NNK',
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
          api: 'https://www.nonamekitchen.org/wp-json/'
        }
      }
    },
    '@frontity/tiny-router',
    '@frontity/html2react'
  ]
};

export default settings;
