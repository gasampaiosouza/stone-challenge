import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import GlobalStyle from './styles/global.style.ts'
import { CurrencyContextProvider } from './contexts/CurrencyContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />

    <CurrencyContextProvider>
      <App />
    </CurrencyContextProvider>
  </React.StrictMode>
)
