module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  refs: [
    {
      title: 'Web',
      url: process.env.NODE_ENV === 'development'
        ? 'http://localhost:6007/'
        : 'web/',
    },
    {
      title: 'Ui',
      url: process.env.NODE_ENV === 'development'
        ? 'http://localhost:6008/'
        : 'ui/',
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
