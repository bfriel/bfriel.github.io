import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { rhythm } from "../utils/typography";

export default function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);
  const { author } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <div style={{ width: `100%`, maxWidth: `80px` }}>
        <Img fluid={data.avatar.childImageSharp.fluid} style={{ borderRadius: `100px` }} />
      </div>
      <div>
        <p
          style={{
            fontFamily: `medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif`,
            lineHeight: `20px`,
            color: `rgba(0,0,0,0.54)`,
            fontWeight: 300,
            fontSize: `15px`,
            textTransform: `uppercase`,
            letterSpacing: `0.5px`,
            margin: 0,
          }}
        >
          Written by
        </p>
        <h3
          style={{
            margin: 0,
            fontSize: `28px`,
            lineHeight: `36px`,
          }}
        >
          {author}
        </h3>
        <p>Head of Product at Castle Funds, a cryptoasset investment firm.</p>
      </div>
    </div>
  );
};