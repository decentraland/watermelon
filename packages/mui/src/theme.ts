import { base, neutral } from '@dcl/watermelon-types/src/colors';
import { createTheme, ThemeOptions } from '@mui/material/styles';

function theme(type: "light" | "dark"): ThemeOptions {
  const isDark = type === "dark";
  const textColor = isDark ? neutral.white : neutral.black;
  return {
    palette: {
      mode: type,
      primary: {
        main: base.primary,
      },
      secondary: {
        main: neutral.white,
      },
      background: {
        default: isDark ? neutral.softBlack2 : neutral.softWhite,
        paper: isDark ? neutral.softBlack1 : neutral.white,
      },
      text: {
        primary: base.primary
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
      h1: {
        fontSize: 96,
        fontWeight: 600,
        marginBlock: '0.5em',
        color: textColor,
      },
      h2: {
        fontSize: 60,
        fontWeight: 600,
        marginBlock: '0.5em',
        color:textColor,
      },
      h3: {
        fontSize: 48,
        fontWeight: 500,
        marginBlock: '0.5em',
        color:textColor,
      },
      h4: {
        fontSize: 34,
        fontWeight: 600,
        marginBlock: '0.5em',
        color:textColor,
      },
      h5: {
        fontSize: 20,
        fontWeight: 600,
        marginBlock: '0.5em',
        color:textColor,
      },
      button: {
        textTransform: 'uppercase',
        fontWeight: 600,
      },
      body1: {
        color: textColor,
      },
      body2: {
        color: textColor,
      }
    }
  }
}

export const light = createTheme(theme("light"));
export const dark = createTheme(theme("dark"));