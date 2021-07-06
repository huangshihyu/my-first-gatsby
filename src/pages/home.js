import * as React from 'react';

import Layout from '../components/layout';
// Step 1: Import the graphql tag
import { graphql } from 'gatsby';

const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="Description Page !">
      <p>
        {/* Step 3: Use the data in your component*/}
        {data.site.siteMetadata.description}
      </p>
    </Layout>
  );
};

// Step 2: Export a page query
export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default HomePage;
