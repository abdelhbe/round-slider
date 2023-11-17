Difference – Technical specification


# Technology

The website is written entirely in React. It uses both typescript and pure javascript implementations. This is a matter of personal preferences, has no further influence.

## Dependencies

This project has the following _essential_ dependencies: 

- [`node-sass`](https://github.com/sass/node-sass)
- [`classnames`](https://github.com/JedWatson/classnames)
- [`framer-motion`](https://github.com/framer/motion)
- [`react-spring`](https://github.com/react-spring/react-spring)
- [`styled-components`](https://github.com/styled-components/styled-components)
- [`typescript`](https://github.com/microsoft/TypeScript)

## Development Environment

1. clone the repo
2. hit `npm i`
3. checkout the `dev` branch.
4. start local develoment environment by `npm run start`


## Implementation

This application is a generic CRA application, the data is loaded into the application during `render()` time, using a `GraphQL` client for the browser.

## API 

The website uses an instance of `GraphCMS`, with the following schemas: 

### Menu

```typescript
schema Menu {
  type url: string,
  type label: string,
  type navigatorPicture: assetSelector
}

```

### Content

TODO

### Footer

TODO