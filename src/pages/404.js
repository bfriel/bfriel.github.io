import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1 className="text-center">
        Page Not Found{" "}
        <span role="img" aria-label="thinking">
          🤔
        </span>
      </h1>

      <p className="text-center">
        Sorry about that... Let&#39;s get you <Link to="/">home</Link>
      </p>
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
  }
`
