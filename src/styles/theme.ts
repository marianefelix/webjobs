import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  title: 'light',
  color: {
    primary: '#5BA4A4',
    lightTag: '#EEF6F6',
    dark: '#2C3A3A',
    lightCard: '#FFFFFF',
    lightBackground: '#F5F5F5',
    lightGrey: 'rgba(217, 217, 217, 0.18)',
    text: '#7B8E8E',
    darkText: '#687575',
  },
  boxShadow: '9px 9px 20px rgba(91, 164, 164, 0.2)',
  font: {
    size: {
      xSmall: '10px',
      small: '12px',
      medium: '14px',
      large: '18px',
    },
    family: 'Source Sans Pro',
    weight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  borderRadius: {
    tag: '4px',
    badge: '12px',
    card: '5px',
    filterBox: '5px',
    shareButton: '24px',
  },
  breakpoints: {
    sm: '576px',
    lg: '992px',
  },
};
