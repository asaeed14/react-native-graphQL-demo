const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const UniversitiesAPI = require('./datasources/universities-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    universitiesAPI: new UniversitiesAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
