import React from 'react';
import { Link, graphql } from "gatsby";
import styles from './index-css-modules.module.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ReadingList({ data, location }) {
    const siteTitle = data.site.siteMetadata.title;
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Reading List" />
            <h1 className={styles.title}>Currently Reading</h1>
            <h1 className={styles.title}>Changed the Way I Think</h1>
        </Layout>
    )
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;