# REALly Frontend

This is the REALly app powered by React.

The tech stacks are

1. [React](https://reactjs.org/)
2. [Next.js](https://nextjs.org/)
3. [Neutrino](http://master.neutrinojs.org)
4. ~~[MobX](https://mobx.js.org/)~~ [Redux-Saga](https://redux-saga.js.org/)
5. [GraphQL](https://graphql.org/) with Apollo (?)
6. [Jest](https://jestjs.io/)
7. [ESLint](https://eslint.org/)
8. [Storybook](https://storybook.js.org/)
9. [Material-UI](https://react-material-kit.devias.io/)
10. [Babel](https://babeljs.io/)
11. [webpack](https://webpack.js.org/)
12. typescript (?) (come with next.js)
13. [Prettier](https://prettier.io/)

## Get Started

### Installation

Fork https://gitlab.com/really.sg/really-frontend to your own repo, then

```
git clone git@gitlab.com:<your-name>/really-frontend.git
cd really-frontend
yarn install
```

### Commands

```
# To start developing
yarn dev

# Create optimized production build
yarn build

# Start production server
yarn start

# Testing
yarn test

# Linting
yarn lint

# Linting and fix
yarn lint:fix [pages/**/.jsx]

# Start storybook
yarn storybook

# Code format with prettier
yarn prettier

# Deploy to now.sh
now

# Deploy to now.sh and push to PRODUCTION (doesn't mean NODE_ENV=production)
now --prod
```

### Environments

`now.json` - will only be used by now.sh, since we are using now.sh as our staging, use this file to config staging env.

`.env` - local environment variables, do not commit this file to git.

`.env.example` - Rename this file to `.env` and change the variables inside the file.
#### For production

Use command line to set enviroment variables

```
export ENV_VAR=variable
```

For `docker-compose`, use `environment` to set the variables

---

We need `API_URL` and `API_ROOT` env variables to be set.



## Features

### Babel

- Support ES modules
- Able to configure browser versions support (how?)
- async function (?)
- dynamic imports (?)
- object rest spread syntax (?)
- class properties (?)
- Write JSX in .js or .jsx files

### Next.js

- Zero configuration for many features like _automatic code splitting_, _filesystem based routing_, _hot code reloading_ and _universal rendering_.
- ~~Server Side Rendering~~ (Disabled)
- Static exporting
- ~~CSS-in-JS~~ (use Material UI styled-component)

### Material UI

Material UI not only provides the UI components, it also gives tools for styling and theming.

[@material-ui/styles](https://material-ui.com/styles/basics/)

- Hook API

- Styled Components API
- ~~Higher-order Component API~~
- Theming with `ThemeProvider`

[`@material-ui/system`](https://material-ui.com/system/basics/) provides low-level utility functions called "*style functions*" for building powerful design systems. Some of the key features:

### Neutrino

Neutrino provides zero-config quick start presets to start development and production build. Using the [`@neutrinojs/react`](https://master.neutrinojs.org/packages/react/) will get you started with many features too. But since most of these features are already handled by Next.js, we will only use the **linting** and **Jest testing** features.

`@neutrinojs/airbnb`is a Neutrino preset that supports linting React projects with Airbnb's ESLint config, following the [Airbnb styleguide](https://github.com/airbnb/javascript).

`@neutrinojs/jest` is a Neutrino preset that supports testing JavaScript projects with the Jest test runner.

### Storybook

Storybook is a playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

This will be useful for Component Driven Development.

### ESLint

We will follow [`@airbnb/javascript`](https://github.com/airbnb/javascript) styleguide strictly.

### Jest (Testing)

To do

###

## Folder structure

```
.
├── components/                  # Components folder
│   └─── theme/                  # theme related files
├── lib/                         # Custom functions or libraries
├── pages/                       # All the pages based on routes
├── public/                      # All the public files, e.g. images/fonts/favicon/pdf etc
├── test/                        # Other testing files not related to components
└── README.md                    # README
```



## Component Driven Development

- Start development with a component.
- All UI is a component.
- A container is also a component.
- Breakdown the page and all its UIs into smallest possible component.
- And then build the page with the components you have built.
- All components should be a [dump component](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43).
- Use storybook to render your component.

A component live in the `/components/<Example>/` folder with the following folder structure.

```
.
├── components/                  # Components folder
│   └── Button/                  # Name of component
│       ├── Button.jsx           # Component file (including the styled-component)
│       ├── Button.stories.jsx   # Component's stories for storybook
│       ├── Button.test.jsx 		 # Component's test for jest
│       └── index.jsx            #
│ ...
```

