/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '../styles/layers.css'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'wolfDark',
    utilities: false,
    themes: {
      wolfDark: {
        dark: true,
        colors: {
          'background': '#050505',
          'surface': '#0B0B0B',
          'surface-variant': '#111111',
          'on-background': '#F9F9F9',
          'on-surface': '#F9F9F9',
          'on-surface-variant': '#A6A6A6',

          'primary': '#C9A34E',
          'secondary': '#0F0F0F',

          'outline': '#262626',

          'success': '#4ADE80',
          'info': '#60A5FA',
          'warning': '#FBBF24',
          'error': '#F87171',
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1145,
      xl: 1545,
      xxl: 2138,
    },
  },
})
