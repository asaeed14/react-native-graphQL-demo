const resolvers = {
  Query: {
    universitiesOfCountry: (_, { countryName }, { dataSources }) =>
      dataSources.universitiesAPI.getUniversities(countryName),
  },
};

module.exports = resolvers;
