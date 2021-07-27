import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

export default function Homepage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <p style={{ marginBottom: rhythm(0.5) }}>
        SF-based Product Manager and Software Engineer. More{" "}
        <Link className="blue-link" to="/about">
          about me
        </Link>
        .
      </p>
      <hr className="divider" />
      <h4>Posts</h4>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const featuredImgFluid =
          node.frontmatter.featuredImage.childImageSharp.fluid
        return (
          <Link
            className="no-link"
            to={node.fields.slug}
            key={node.fields.slug}
          >
            <article className="article" style={{ marginBottom: rhythm(2) }}>
              <section className="article-main">
                <header>
                  <h3 className="article-title">{title}</h3>
                  <small className="hide-xs">
                    {node.frontmatter.date} | {node.timeToRead} Min Read
                  </small>
                </header>
                <small
                  className="show-xs"
                  style={{
                    textDecoration: "underline",
                    marginTop: rhythm(0.5),
                  }}
                >
                  Read More
                </small>
              </section>
              <BackgroundImage
                Tag="section"
                fluid={featuredImgFluid}
                style={{ height: "186px", width: "100%", maxWidth: "200px" }}
                backgroundColor="#040e18"
              />
            </article>
          </Link>
        )
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
          timeToRead
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
`
