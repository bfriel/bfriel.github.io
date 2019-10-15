import React from "react";
import { Link } from "gatsby";
import "./layout.css";

import { rhythm } from "../utils/typography";

export default function Layout({location, title, children}) {
  // const rootPath = `${__PATH_PREFIX__}/`;
  // console.log(location)
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      // style={{
      //   marginLeft: `auto`,
      //   marginRight: `auto`,
      //   maxWidth: rhythm(36),
      //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      // }}
    >
      <header>
        <nav className={`nav`} style={{marginBottom: rhythm(1.5)}}>
          <Link to={`/`} className={`link`} >
            <h2 className={`header`}>
                {title}
            </h2>
          </Link>
          <div>
            <Link to={`/`} className={location.pathname === `/` ? `link active` : `link`}>
              Writings
            </Link>
            <Link to={`/reading-list`}className={location.pathname === `/reading-list` ? `link active` : `link`}>
              Reading List
            </Link>
            <Link to={`/about`} className={location.pathname === `/about` ? `link active` : `link`}>
              About
            </Link>
          </div>
        </nav>
      </header>
      <main
        // style={{
        //   marginLeft: `auto`,
        //   marginRight: `auto`,
        //   maxWidth: rhythm(24),
        //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        // }}
      >
        {children}
      </main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  );
};