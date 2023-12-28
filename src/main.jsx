import React from 'react'
import ReactDOM from 'react-dom/client'


import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.js'

import  theme  from './styles/theme.js'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { IncludeButton } from './components/IncludeButton/index.jsx'
import { DescriptionSection } from './components/DescriptionSection/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
      
      
    </ThemeProvider>  
  </React.StrictMode>,
)
