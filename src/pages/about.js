import React from 'react';
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styles from './index-css-modules.module.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About({ data, location }) {
    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <SEO title="About" />
            <h1 className={styles.title}>👋 Hi, I'm Brian</h1>
            <section>
              <BackgroundImage
                Tag="div"
                fluid={data.avatar.childImageSharp.fluid}
                style={{ height: `200px`, width: `100%`, maxWidth: `200px`, float: `left`, marginBottom: `10px`, marginRight: `10px`}}
                backgroundColor={`#040e18`}
              />
              <p>I'm a product manager with a background in software engineering and an interest in big, futuristic ideas.</p>
            <p>Currently, I lead product at <a className="link" href="https://castlefunds.io/" target="_blank" rel="noopener noreferrer">Castle Funds</a>, a cryptoasset investment firm in the San Francisco Bay Area. At Castle, I focus on building institutional-grade investment products around assets like Bitcoin and emerging DeFi protocols.</p>
              <p>In past lives, I worked as a whitewater raft guide, led backpacking trips across four European countries, and <a className="link" href="https://www.sagehens.com/sports/fball/2014-15/bios/friel_brian_ar4p" target="_blank" rel="noopener noreferrer">played football at Pomona College.</a></p>
            </section>
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