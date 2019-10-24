import React from 'react';
import { Link, graphql } from "gatsby";
import styles from './index-css-modules.module.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ReadingList({ data, location }) {
  const allBooksImReadingNow = data.allBooksImReadingNow.edges;
  const allBooksThatChangedTheWayIThink = data.allBooksThatChangedTheWayIThink.edges;

  return (
      <Layout location={location} title={data.site.siteMetadata.title}>
          <SEO title="Reading List" />
          <h1 className={styles.title}>Currently Reading</h1>
          <section style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `space-evenly` }}>
            {allBooksImReadingNow.map(book => <div key={book.node.id} style={{ height: `200px`, width: `130px`, margin: `10px`, backgroundImage: `url(${book.node.volumeInfo.thumbnail})`, backgroundSize: `cover`, }} />)}
          </section>


          <h1 className={styles.title}>Changed the Way I Think</h1>
          <section style={{display: `flex`, flexWrap: `wrap`, justifyContent: `space-evenly`}}>
          {allBooksThatChangedTheWayIThink.map(book => <div key={book.node.id} style={{ height: `200px`, width: `130px`, margin: `10px`, backgroundImage: `url(${book.node.volumeInfo.thumbnail})`, backgroundSize: `cover`, }} />)}
          </section>
      </Layout>
  );
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
    allBooksImReadingNow {
      edges {
        node {
          id
          volumeInfo {
            authors
            link
            thumbnail
            title
          }
        }
      }
    }
    allBooksThatChangedTheWayIThink {
      edges {
        node {
          id
          volumeInfo {
            authors
            link
            thumbnail
            title
          }
        }
      }
    }
  }
`;