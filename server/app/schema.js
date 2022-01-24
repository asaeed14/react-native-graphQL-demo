const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    universitiesOfCountry(countryName: String): [Universities]
  }

  "A list of universes that exists in particular country"
  type Universities {
    "The domains names of university"
    domains: [String]
    "The name of the university"
    name: String
    "The website name of the university"
    web_pages: [String]
  }
`;

module.exports = typeDefs;
