# Compose and deploy to Vercel your apps and packages storybooks in a turborepo monorepo

![Compose and deploy to Vercel your apps and packages storybooks in a turborepo monorepo](./cover.png)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSeb-L%2Fturborepo-storybook-composition-starter&build-command=yarn%20storybook%3Abuild%20%26%26%20yarn%20storybook%3Amove&output-directory=storybook-static)

## Install

```
yarn
```

## Dev env

For all

```
yarn storybook:dev
```

For a specific workspace

```
yarn storybook:dev --filter=web
```

## Build

```
yarn storybook:build
```

## Moving the files to root

```
yarn storybook:move
```
