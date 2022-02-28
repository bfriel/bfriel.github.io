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
        <p>I'm a Developer Relations Evangelist at{" "}
          <a
            className="blue-link"
            href="https://phantom.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phantom
          </a>{", "} where I help teams build applications on Solana. If you're building something that interacts with Phantom, I'd love to{" "}<a
            className="blue-link"
            href="https://twitter.com/bfriel_"
            target="_blank"
            rel="noopener noreferrer"
          >
            hear from you!
          </a></p>
        <p>Prior to Phantom, I worked as a frontend engineer and product manager at{" "}
          <a
            className="blue-link"
            href="https://castlefunds.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Castle Funds
          </a>{". "}In a previous life, I worked in the outdoor industry at
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
            Pomona College
          </a>{"."}
        </p>
        <p>
          I'm currently based in San Francisco. The best way to get in touch with me is via{" "}
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
    avatar: file(absolutePath: { regex: "/winnie.jpeg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
