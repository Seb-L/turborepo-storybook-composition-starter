module.exports = {
  staticDirs: [
    '../../web/',
    { from: '../../web/storybook-static/', to: 'web/storybook-static' },
    { from: '../../../packages/ui/storybook-static/', to: 'ui/storybook-static' },
  ],
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  refs: [
    {
      title: 'Web',
      url: 'web/storybook-static/',
      // url: process.env.NODE_ENV === 'development'
      //   ? 'http://localhost:6006'
      //   : '../../web',
    },
    {
      title: 'Ui',
      url: 'ui/storybook-static/',
      // url: process.env.NODE_ENV === 'development'
      //   ? 'http://localhost:6006'
      //   : '../../web',
    }
  ],
  features: {
    storyStoreV7: true,
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
