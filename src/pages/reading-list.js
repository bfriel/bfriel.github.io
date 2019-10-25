import React from 'react';
import { graphql } from "gatsby";
import styles from './index-css-modules.module.css';
import { rhythm } from "../utils/typography"

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ReadingList({ data, location }) {
  const allBooksImReadingNow = data.allBooksImReadingNow.edges;
  const allBooksThatChangedTheWayIThink = data.allBooksThatChangedTheWayIThink.edges;

  const showBooks = books => books.map(book => 
    <a 
      key={book.node.id} 
      className={styles.book}
      href={book.node.volumeInfo.link}
      target={`_blank`}
      rel={`noopener noreferrer`}
      style={{ 
        display: `block`,
        height: `200px`, 
        width: `130px`, 
        margin: `10px`, 
        backgroundImage: `url(${book.node.volumeInfo.thumbnail})`, 
        backgroundSize: `cover`, 
        position: `relative`,
        cursor: `pointer`,
        color: `#000`,
      }}>
      <div className={styles.bookDetails}>
        <p className={styles.bookTitle}>{book.node.volumeInfo.title}</p>
        <p className={styles.bookAuthors}>{book.node.volumeInfo.authors.join(` & `)}</p>
      </div>
    </a>
  );

  return (
      <Layout location={location} title={data.site.siteMetadata.title}>
          <SEO title="Reading List" />
          <h1 className={styles.title}>Currently Reading</h1>
          <section style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `space-evenly` }}>
            {showBooks(allBooksImReadingNow)}
          </section>
          <h1 style={{marginTop: rhythm(2)}} className={styles.title}>Changed the Way I Think</h1>
          <section style={{display: `flex`, flexWrap: `wrap`, justifyContent: `space-evenly`}}>
            {showBooks(allBooksThatChangedTheWayIThink)}
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