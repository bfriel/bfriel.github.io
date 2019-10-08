import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

export default function Homepage({data, location}) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  return(
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div>
        hello!
        <Link to="/reading-list/">Go to Reading List</Link>
      </div>
    </Layout>
  )
}

// class HomePage extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title="All posts" />
//         <Bio />
//         <Link to="/reading-list">Reading List Link</Link>
//         {posts.map(({ node }) => {
//           const title = node.frontmatter.title || node.fields.slug
//           return (
//             <article key={node.fields.slug}>
//               <header>
//                 <h3
//                   style={{
//                     marginBottom: rhythm(1 / 4),
//                   }}
//                 >
//                   <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                     {title}
//                   </Link>
//                 </h3>
//                 <small>{node.frontmatter.date}</small>
//               </header>
//               <section>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </section>
//             </article>
//           )
//         })}
//       </Layout>
//     )
//   }
// }

// export default HomePage

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
