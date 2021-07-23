const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
const axios = require("axios")
const crypto = require("crypto")
// -----

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Many thanks to: https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
// This is a one-off implementation for my specific use case. In the future, I may rewrite this to preserve the original Google Books data and turn this into an open-source plugin.
// If I were to do that, I would want to make sure that the security is much better than what I have here (i.e. apiKey in source code)
// I'm not concerned for this implementation since it's restrictred to just my Google Books API.

// Future work could also be done to pre-process external images. Neat idea, but a bit overkill given the scope of my project

// exports.sourceNodes = async ({ boundActionCreators }) => {
//   const { createNode } = boundActionCreators;

//   const fetchBooksImReadingNow = () => axios.get(`https://www.googleapis.com/books/v1/users/111402020683239666542/bookshelves/3/volumes?key=AIzaSyAmv-EtRWvkeTQuec7JkgYxRqnd32duE3o`);
//   const fetchBooksThatChangedTheWayIThink = () => axios.get(`https://www.googleapis.com/books/v1/users/111402020683239666542/bookshelves/1001/volumes?key=AIzaSyAmv-EtRWvkeTQuec7JkgYxRqnd32duE3o`);

//   const nowRes = await fetchBooksImReadingNow();
//   const changedRes = await fetchBooksThatChangedTheWayIThink();

//   // map into these results and create nodes
//   nowRes.data.items.map((book) => {
//     // Create your node object
//     // console.log(`book ${i}: `, book);
//     const readingNowNode = {
//       // Required fields
//       id: book.id,
//       parent: `__SOURCE__`,
//       internal: {
//         type: `BooksImReadingNow`, // name of the graphQL query --> allBooksImReadingNow {}
//         // contentDigest will be added just after
//         // but it is required
//       },
//       children: [],

//       // Other fields that you want to query with graphQl
//       volumeInfo: {
//         title: book.volumeInfo.title,
//         authors: book.volumeInfo.authors,
//         thumbnail: book.volumeInfo.imageLinks.thumbnail,
//         link: book.volumeInfo.infoLink,
//       },
//     }

//     // Get content digest of node. (Required field)
//     const contentDigest = crypto
//       .createHash(`md5`)
//       .update(JSON.stringify(readingNowNode))
//       .digest(`hex`);
//     // add it to readingNowNode
//     readingNowNode.internal.contentDigest = contentDigest;

//     // Create node with the gatsby createNode() API
//     createNode(readingNowNode);
//   });

//   changedRes.data.items.map((book) => {
//     // Create your node object
//     // console.log(`book ${i}: `, book);
//     const changedTheWayIThinkNode = {
//       // Required fields
//       id: book.id,
//       parent: `__SOURCE__`,
//       internal: {
//         type: `BooksThatChangedTheWayIThink`, // name of the graphQL query --> allBooksThatChangedTheWayIThink {}
//         // contentDigest will be added just after
//         // but it is required
//       },
//       children: [],

//       // Other fields that you want to query with graphQl
//       volumeInfo: {
//         title: book.volumeInfo.title,
//         authors: book.volumeInfo.authors,
//         thumbnail: book.volumeInfo.imageLinks.thumbnail,
//         link: book.volumeInfo.infoLink,
//       },
//     }

//     // Get content digest of node. (Required field)
//     const contentDigest = crypto
//       .createHash(`md5`)
//       .update(JSON.stringify(changedTheWayIThinkNode))
//       .digest(`hex`);
//     // add it to changedTheWayIThinkNode
//     changedTheWayIThinkNode.internal.contentDigest = contentDigest;

//     // Create node with the gatsby createNode() API
//     createNode(changedTheWayIThinkNode);
//   });

//   return;
// }

// --
