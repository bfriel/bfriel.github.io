import Typography from "typography";
import StowLake from "typography-theme-stow-lake";

StowLake.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1, h2, h3, h4, h5": {
      fontWeight: 500,
    },
  }
}

delete StowLake.googleFonts;

const typography = new Typography(StowLake);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
};

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
