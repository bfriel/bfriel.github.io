import React from 'react';
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About({ data, location }) {
    const siteTitle = data.site.siteMetadata.title;
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="About" />
            <h1>Hello from About</h1>
            <div style={{width: `100%`}}>
            <Img fluid={data.avatar.childImageSharp.fluid}/>
            </div>
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;