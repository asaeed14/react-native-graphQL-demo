# React Native GraphQL Demo App

Welcome to the university search app. You can find the universities by selecting the country.


# `Actual API Response`
```
[
  {
    name: '42 FR',
    country: 'France',
    web_pages: ['http://www.42.fr/'],
    alpha_two_code: 'FR',
    'state-province': null,
    domains: ['student.42.fr'],
  },
  {
    name: "Ecole de l'Air",
    country: 'France',
    web_pages: ['http://www.aea.asso.fr/'],
    alpha_two_code: 'FR',
    'state-province': null,
    domains: ['aea.asso.fr'],
  },
  {
    name: 'AgroParisTech',
    country: 'France',
    web_pages: ['http://www.agroparistech.fr/'],
    alpha_two_code: 'FR',
    'state-province': null,
    domains: ['agroparistech.fr'],
  },
];
```

# `With GraphQL Selected API Response`
```
[
  {
    name: '42 FR',
    web_pages: ['http://www.42.fr/'],
    domains: ['student.42.fr'],
  },
  {
    name: "Ecole de l'Air",
    web_pages: ['http://www.aea.asso.fr/'],
    domains: ['aea.asso.fr'],
  },
  {
    name: 'AgroParisTech',
    web_pages: ['http://www.agroparistech.fr/'],
    domains: ['agroparistech.fr'],
  },
];
```


## How to use this repo

There are 2 main folders:

- `server`: The starting point of our GraphQL server.
- `app`: The starting point of our React-Native application.

To get started:

1. Navigate to the `server` folder.
1. Run `npm install` or `yarn`.
1. Run `npm start` or `yarn start`.

This will start the GraphQL API server.

In another Terminal window,

1. Navigate to the `root` of the project.
1. Run `npm install` or `yarn`.
1. Run `react-native run-android` or `react-native run-ios`

## Example  🚀

![GraphQL Demo](https://github.com/asaeed14/react-native-graphQL-demo/blob/master/app/images/search.gif)


