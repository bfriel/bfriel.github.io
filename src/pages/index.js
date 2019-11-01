import React from "react";
import { Link, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import clsx from 'clsx';

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
      <h1 className={clsx(styles.title, `text-center`, `show-xs`)}>Writings</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid;
        return (
          <Link style={{ boxShadow: `none`, color: 'initial' }} to={node.fields.slug} key={node.fields.slug}>
            <article className={`article`} style={{ marginBottom: rhythm(2)}}>
              <section className={styles.articleMain}>
                <header>
                  <h3 className={styles.articleTitle}>
                    {title}
                  </h3>
                  <small>{node.frontmatter.date} | {node.timeToRead} Min Read</small>
                </header>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                  className="article-preview"
                />
              </section>
              <BackgroundImage
                Tag="section"
                fluid={featuredImgFluid}
                style={{ height: `186px`, width: `100%`, maxWidth: `200px` }}
                backgroundColor={`#040e18`}
              />
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
`;
