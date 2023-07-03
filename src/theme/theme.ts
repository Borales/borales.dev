'use client'

import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import GoogleFont from '../font'

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: GoogleFont.style.fontFamily,
    body1: { fontFamily: GoogleFont.style.fontFamily },
    body2: { fontFamily: GoogleFont.style.fontFamily },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
