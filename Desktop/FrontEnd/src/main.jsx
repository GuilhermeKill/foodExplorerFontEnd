import React from 'react'
import ReactDOM from 'react-dom/client'


import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.js'

import  theme  from './styles/theme.js'

import { AdminHome } from './pages/AdminHome'
import { SingIn } from './pages/SingIn'

import { IncludeButton } from './components/IncludeButton/index.jsx'
import { DescriptionSection } from './components/DescriptionSection/index.jsx'
import { AdminDetails } from './pages/AdminDetails/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AdminHome />
    </ThemeProvider>  
  </React.StrictMode>,
)
