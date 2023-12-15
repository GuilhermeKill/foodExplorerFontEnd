import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import  theme  from './styles/theme.js'

import { SingIn } from './pages/SingIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SingIn />
    </ThemeProvider>  
  </React.StrictMode>,
)
