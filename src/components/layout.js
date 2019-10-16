import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "./layout.css";

import { rhythm } from "../utils/typography";

export default function Layout({location, title, children}) {
  // const rootPath = `${__PATH_PREFIX__}/`;
  // console.log(location)

  const [headerScrollClass, setHeaderScrollClass] = useState(`show`);
  const [headerBoxShadowClass, setHeaderBoxShadowClass] = useState(`no-shadow`);

  useEffect(() => {
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    // let navbarHeight = document.getElementById('header').outerHeight();
    let navbarHeight = document.getElementById('header').offsetHeight;
    // console.log(navbarHeight)
    
    const handleScroll = () => didScroll = true;

    const checkScrollInterval = setInterval(() => {
      if (didScroll) {
        console.log('hey you scrolled');
        hasScrolled();
        didScroll = false;
      };
    }, 250);

    const hasScrolled = () => {
      const scrollTop = window.scrollY;

      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      };

      if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        setHeaderScrollClass(`hide`);
      } else {
        setHeaderScrollClass(`show`);
      }

      scrollTop > delta ? setHeaderBoxShadowClass(`shadow`) : setHeaderBoxShadowClass(`no-shadow`);

      
      lastScrollTop = scrollTop;
      // console.log(window.scrollY, navbarHeight)
      // const st = window.scrollTop();
      // console.log(st - delta, lastScrollTop)
      // var st = $(this).scrollTop();

      // // Make sure they scroll more than delta
      // if (Math.abs(lastScrollTop - st) <= delta)
      //   return;

      // // If they scrolled down and are past the navbar, add class .nav-up.
      // // This is necessary so you never see what is "behind" the navbar.
      // if (st > lastScrollTop && st > navbarHeight) {
      //   // Scroll Down
      //   $('header').removeClass('nav-down').addClass('nav-up');
      // } else {
      //   // Scroll Up
      //   if (st + $(window).height() < $(document).height()) {
      //     $('header').removeClass('nav-up').addClass('nav-down');
      //   }
      // }

      // lastScrollTop = st;
    }


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(checkScrollInterval);
    }
  }, []);
  // Hide Header on on scroll down
  // var didScroll;
  // var lastScrollTop = 0;
  // var delta = 5;
  // var navbarHeight = $('header').outerHeight();

  // $(window).scroll(function (event) {
  //   didScroll = true;
  // });

  // setInterval(function () {
  //   if (didScroll) {
  //     hasScrolled();
  //     didScroll = false;
  //   }
  // }, 250);

  // function hasScrolled() {
  //   var st = $(this).scrollTop();

  //   // Make sure they scroll more than delta
  //   if (Math.abs(lastScrollTop - st) <= delta)
  //     return;

  //   // If they scrolled down and are past the navbar, add class .nav-up.
  //   // This is necessary so you never see what is "behind" the navbar.
  //   if (st > lastScrollTop && st > navbarHeight) {
  //     // Scroll Down
  //     $('header').removeClass('nav-down').addClass('nav-up');
  //   } else {
  //     // Scroll Up
  //     if (st + $(window).height() < $(document).height()) {
  //       $('header').removeClass('nav-up').addClass('nav-down');
  //     }
  //   }

  //   lastScrollTop = st;
  // }


  // console.log('nav scroll class is: ', headerScrollClass);
  return (
    <div
      // style={{
      //   marginLeft: `auto`,
      //   marginRight: `auto`,
      //   maxWidth: rhythm(24),
      //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      // }}
    >
      <header id={`header`} className={`header ${headerScrollClass} ${headerBoxShadowClass}`}>
        <nav 
          className={`nav`} 
          // style={{marginBottom: rhythm(1.5)}}
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.0)} ${rhythm(3 / 4)}`,
            // marginBottom: rhythm(1.5),
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