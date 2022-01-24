import { gql } from '@apollo/client';
export const GET_UNIVERSITIES = gql`
  query GetUniversities($countryName: String) {
    universitiesOfCountry(countryName: $countryName) {
      name
      domains
      web_pages
    }
  }
`;
