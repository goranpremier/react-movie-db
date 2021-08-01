const colors = {
  primary: {
    background: '#0d253f',
    text: '#fff',
  },
  secondary: {
    background: '#01b4e4',
    text: '#fff',
  },
  tertiary: {
    background: '#90cea1',
    text: '#fff',
  },
  error: {
    background: '#D23F47',
    text: '#fff',
  },
  success: {
    background: '#138849',
    text: '#fff',
  },
  warning: {
    background: '#F5C625',
    text: '#000',
  },
  gray: {
    0: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  body: {
    background: '#ffffff',
    text: '#000',
  },
}

const typography = {
  fontFamily: `'PT-Sans', sans-serif`,
  fontSize: '14px',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 500,
    fontSize: '38px',
    lineHeight: 1.23,
  },
  h2: {
    fontWeight: 500,
    fontSize: '30px',
    lineHeight: 1.35,
  },
  h3: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: 1.35,
  },
  h4: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: 1.5,
  },
  p: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.5,
  },
}

const transitions = {
  standard: 300,
}

export const defaultTheme = {
  colors,
  typography,
  transitions,
}
