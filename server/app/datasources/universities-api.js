const { RESTDataSource } = require('apollo-datasource-rest');

class UniversitiesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://universities.hipolabs.com/';
  }

  getUniversities(countryName) {
    return this.get(`search?country=${countryName}`);
  }
}

module.exports = UniversitiesAPI;
