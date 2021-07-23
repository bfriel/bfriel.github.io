import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./layout.css"

import { rhythm } from "../utils/typography"

export default function Layout({ location, title, children }) {
  // const rootPath = `${__PATH_PREFIX__}/`;
  const [headerScrollClass, setHeaderScrollClass] = useState(`show`)
  const [headerBoxShadowClass, setHeaderBoxShadowClass] = useState(`no-shadow`)

  useEffect(() => {
    let didScroll
    let lastScrollTop = 0
    let delta = 5
    let navbarHeight = document.getElementById("header").offsetHeight * 3

    const handleScroll = () => (didScroll = true)

    const checkScrollInterval = setInterval(() => {
      if (didScroll) {
        hasScrolled()
        didScroll = false
      }
    }, 250)

    const hasScrolled = () => {
      const scrollTop = window.scrollY
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return
      }
      scrollTop > lastScrollTop && scrollTop > navbarHeight
        ? setHeaderScrollClass("hide")
        : setHeaderScrollClass("show")
      scrollTop > delta
        ? setHeaderBoxShadowClass("shadow")
        : setHeaderBoxShadowClass("no-shadow")
      lastScrollTop = scrollTop
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(checkScrollInterval)
    }
  }, [])

  return (
    <div>
      <header id="header">
        <div
          className={`inner-header ${headerScrollClass} ${headerBoxShadowClass}`}
        >
          <nav
            className="nav"
            style={{
              maxWidth: rhythm(24),
              padding: `${rhythm(1 / 2)} ${rhythm(3 / 4)}`,
            }}
          >
            <Link to="/" className="small-font grey-color no-link">
              {title}
            </Link>
          </nav>
        </div>
      </header>
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </main>
      <footer className="main-footer">
        <div
          className="inner-footer"
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <div className="hide-xs small-font">Made in San Francisco, CA</div>
          <div style={{ display: "flex" }}>
            <a
              href="https://twitter.com/brianfriel_"
              className="no-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                className="social-icon twitter"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                title=""
                aria-labelledby="svg-inline--twitter"
              >
                <title id="svg-inline--twitter"></title>
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/brian-friel-49a231103/"
              className="no-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                className="social-icon linkedin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448.1 512"
                title=""
                aria-labelledby="svg-inline--linkedin"
              >
                <title id="svg-inline--linkedin"></title>
                <path d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"></path>
              </svg>
            </a>
          </div>
          <div className="show-xs small-font">Made in San Francisco, CA</div>
        </div>
      </footer>
    </div>
  )
}
