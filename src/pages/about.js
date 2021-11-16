import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About({ data, location }) {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="About" />
      <div className="about-header">
        <BackgroundImage
          Tag="div"
          fluid={data.avatar.childImageSharp.fluid}
          className="about-headshot"
        />
        <h1 className="text-center-small">
          <span role="img" aria-label="waving" style={{ marginRight: `10px` }}>
            👋
          </span>
          Hi, I'm Brian
        </h1>
      </div>
      <section>
        <p>
          I'm a product manager at{" "}
          <a
            className="blue-link"
            href="https://castlefunds.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Castle Funds
          </a>{" "}
          where I lead development of our trading systems and client-facing web
          portal.
        </p>
        <p>
          Before getting into tech, I worked in the outdoor industry at
          companies such as{" "}
          <a
            className="blue-link"
            href="https://nols.edu/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NOLS
          </a>{" "}
          and{" "}
          <a
            className="blue-link"
            href="https://www.oars.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OARS
          </a>{" "}
          and played football at{" "}
          <a
            className="blue-link"
            href="https://www.sagehens.com/sports/fball/2014-15/bios/friel_brian_ar4p"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pomona College.
          </a>
        </p>
        <p>
          Feel free to reach out to me via{" "}
          <a
            className="blue-link"
            href="https://twitter.com/bfriel_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {"."}
        </p>
      </section>
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
