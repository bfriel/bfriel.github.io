import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

deckDeckGoHighlightElement()

export default function BlogPostTemplate({ data, pageContext, location }) {
  const { previous, next } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.featuredImage.childImageSharp.resize.src}
      />
      <article>
        <header>
          <BackgroundImage
            Tag="section"
            fluid={featuredImgFluid}
            style={{ height: "300px", width: "100%" }}
            backgroundColor="#040e18"
          />
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: "block",
              marginBottom: rhythm(0.2),
            }}
          >
            {post.frontmatter.date} | {post.timeToRead} Min Read
          </p>
          <p
            style={{
              display: "block",
              fontStyle: "italic",
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.description}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          className="divider"
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
            marginLeft: 0,
          }}
        >
          <li>
            {previous && (
              <div>
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  className="no-underline"
                >
                  <h5 className="light-subheader">Previous Post</h5>←{" "}
                  {previous.frontmatter.title}
                </Link>
              </div>
            )}
          </li>
          <li>
            {next && (
              <div>
                <Link to={next.fields.slug} rel="next" className="no-underline">
                  <h5 className="light-subheader">Next Post</h5>
                  {next.frontmatter.title} →
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 900, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`
