// import React from "react";
// import { Link, graphql } from "gatsby";
// import Img from "gatsby-image";


// // import Bio from "../components/bio";
// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import { rhythm } from "../utils/typography";
// import styles from "./index-css-modules.module.css";

// export default function Homepage({data, location}) {
//   const siteTitle = data.site.siteMetadata.title;
//   const posts = data.allMarkdownRemark.edges;
//   return(
//     <Layout location={location} title={siteTitle}>
//       <SEO title="Home" />
//       {posts.map(({ node }) => {
//         const title = node.frontmatter.title || node.fields.slug;
//         return (
//           <Link style={{ boxShadow: `none`, color: 'initial' }} to={node.fields.slug} key={node.fields.slug}>
//             <article className={styles.article} style={{ marginTop: rhythm(1) }}>
//               {/* <aside style={{ width: `150px`, height: `150px`, position: `relative` }}>
//                 <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} style={{position: `absolute`, top: 0, left: 0, right: 0, bottom: 0}}/>
//               </aside> */}
//               <aside style={{ maxWidth: `250px`, maxHeight: `200px`, width: `100%`, height: `100%`, overflow: `hidden` }}>
//                 <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} style={{}}/>
//               </aside>
//               <section className={styles.main}>
//                 <header>
//                   <h3 className={styles.title}>
//                     {title}
//                   </h3>
//                   <small>{node.frontmatter.date}</small>
//                 </header>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </section>
//             </article>
//           </Link>
//         );
//       })}
//       {/* <div>
//         hello!
//         <Link to="/reading-list/">Go to Reading List</Link>
//       </div> */}
//     </Layout>
//   )
// }

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
//             featuredImage {
//               childImageSharp {
//                 sizes(maxWidth: 630) {
//                   ...GatsbyImageSharpSizes
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;



// import React from "react";
// import { Link, graphql } from "gatsby";
// import Img from "gatsby-image";


// // import Bio from "../components/bio";
// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import { rhythm } from "../utils/typography";
// import styles from "./index-css-modules.module.css";

// export default function Homepage({data, location}) {
//   const siteTitle = data.site.siteMetadata.title;
//   const posts = data.allMarkdownRemark.edges;
//   return(
//     <Layout location={location} title={siteTitle}>
//       <SEO title="Home" />
//       {posts.map(({ node }) => {
//         const title = node.frontmatter.title || node.fields.slug;
//         const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid;
//         return (
//           <Link style={{ boxShadow: `none`, color: 'initial' }} to={node.fields.slug} key={node.fields.slug}>
//             <article className={styles.article} style={{ marginTop: rhythm(1) }}>
//               <aside style={{ width: `150px`, height: `150px`, position: `relative` }}>
//               {/* <aside style={{ width: '100%', maxWidth: '150px'}}> */}
//                 <Img fluid={featuredImgFluid} style={{position: `absolute`, top: 0, left: 0, right: 0, bottom: 0}}/>
//               </aside>
//               <section className={styles.main}>
//                 <header>
//                   <h3 className={styles.title}>
//                     {title}
//                   </h3>
//                   <small>{node.frontmatter.date}</small>
//                 </header>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </section>
//             </article>
//           </Link>
//         );
//       })}
//       {/* <div>
//         hello!
//         <Link to="/reading-list/">Go to Reading List</Link>
//       </div> */}
//     </Layout>
//   )
// }

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
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;


import React from "react";
import { Link, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";


// import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import styles from "./index-css-modules.module.css";

export default function Homepage({data, location}) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  return(
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid;
        return (
          <Link style={{ boxShadow: `none`, color: 'initial' }} to={node.fields.slug} key={node.fields.slug}>
            <article className={styles.article} style={{ marginTop: rhythm(1) }}>
              {/* <aside style={{ width: `150px`, height: `150px`, position: `relative` }}> */}
              {/* <aside style={{ width: '100%', maxWidth: '150px'}}> */}
                <BackgroundImage
                  Tag="section"
                  // className={`the-background-images`}
                  fluid={featuredImgFluid}
                  // style={{height: `100%`, width: `350px`}}
                  style={{height: `150px`, width: `100%`, maxWidth: `200px`}}
                  backgroundColor={`#040e18`}
                />
              {/* </aside> */}
              <section className={styles.main}>
                <header>
                  <h3 className={styles.title}>
                    {title}
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          </Link>
        );
      })}
    </Layout>
  )
}

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
            featuredImage {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
