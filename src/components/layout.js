import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "./layout.css";

import { rhythm } from "../utils/typography";

export default function Layout({location, title, children}) {
  // const rootPath = `${__PATH_PREFIX__}/`;

  const [headerScrollClass, setHeaderScrollClass] = useState(`show`);
  const [headerBoxShadowClass, setHeaderBoxShadowClass] = useState(`no-shadow`);

  useEffect(() => {
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = document.getElementById('header').offsetHeight * 3;
    
    const handleScroll = () => didScroll = true;

    const checkScrollInterval = setInterval(() => {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      };
    }, 250);

    const hasScrolled = () => {
      const scrollTop = window.scrollY;

      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      };

      (scrollTop > lastScrollTop && scrollTop > navbarHeight) ? setHeaderScrollClass(`hide`) : setHeaderScrollClass(`show`);
      (scrollTop > delta) ? setHeaderBoxShadowClass(`shadow`) : setHeaderBoxShadowClass(`no-shadow`);

      
      lastScrollTop = scrollTop;
    }


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(checkScrollInterval);
    }
  }, []);
  return (
    <div>
      <header id={`header`}>
        <div className={`inner-header ${headerScrollClass} ${headerBoxShadowClass}`}>
          <nav 
            className={`nav`} 
            style={{
              maxWidth: rhythm(24),
              padding: `${rhythm(1.0)} ${rhythm(3 / 4)}`,
            }}
          >
            <Link to={`/`} className={`link`} >
              <h2 className={`title`}>
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

        </div>
      </header>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
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