import React from 'react';
import { Link, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styles from './index-css-modules.module.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ReadingList({ data, location }) {
    const currentlyReadingReviews = data.shelves.edges.filter(shelf => shelf.node.name === "currently-reading")[0].node.reviews;
    const changedTheWayIThinkReviews = data.shelves.edges.filter(shelf => shelf.node.name === "changed-the-way-i-think")[0].node.reviews;
    console.log('currentlyReadingReviews', currentlyReadingReviews)
    console.log('changedTheWayIThinkReviews', changedTheWayIThinkReviews)
    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <SEO title="Reading List" />
            <h1 className={styles.title}>Currently Reading</h1>
        {currentlyReadingReviews.map(review => <img width={`200px`} key={review.id} src={review.book.image_url} />)}

            {/* {currentlyReadingReviews.map(review =>  <BackgroundImage
              Tag="div"
              // fluid={data.avatar.childImageSharp.fluid}
              style={{ height: `200px`, width: `100%`, maxWidth: `200px`, float: `left`, marginBottom: `10px`, marginRight: `10px`}}
              backgroundColor={`#040e18`}
            />)} */}
            <h1 className={styles.title}>Changed the Way I Think</h1>
            {changedTheWayIThinkReviews.map(review => <img key={review.id} src={review.book.image_url} />)}
            {/* {changedTheWayIThinkReviews.map(review => <p>{review.book.title}</p>)} */}
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
    shelves: allGoodreadsShelf {
      edges {
        node {
          id
          name
          exclusive
          review_shelf_id
          reviews {
            id
            rating
            votes
            spoiler_flag
            spoilers_state
            recommended_by
            recommended_for
            started_at
            read_at
            date_added
            date_updated
            read_count
            body
            comments_count
            url
            link
            owned
            book {
              id, 
              isbn, 
              isbn13, 
              text_reviews_count, 
              uri, 
              title, 
              title_without_series, 
              image_url, 
              small_image_url, 
              large_image_url, 
              link, 
              num_pages, 
              format, 
              edition_information, 
              publisher, 
              publication_day, 
              publication_month, 
              publication_year, 
              average_rating, 
              ratings_count, 
              description,
              published,            
            }
          }
        }
      }
    }
  }
`;
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//     books: allGoodreadsShelf {
//       edges {
//         node {
//           id
//           shelfName
//           reviews {
//             reviewID
//             rating
//             votes
//             spoilerFlag
//             spoilersState
//             dateAdded
//             dateUpdated
//             book {
//               bookID
//               textReviewsCount
//               isbn
//               isbn13
//               uri
//               title
//               titleWithoutSeries
//               imageUrl
//               smallImageUrl
//               largeImageUrl
//               description
//             }
//           }
//         }
//       }
//     }
//   }
// `;