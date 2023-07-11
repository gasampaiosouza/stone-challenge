import { useState } from 'react'

import ConversionContent from './components/ConversionContent'
import Header from './components/Header'

import { Container } from './styles/styles'
import ConversionResult from './components/ConversionResult'
import { useCurrency } from './contexts/CurrencyContext'

type IPages = 'content' | 'result'

function App() {
  const { currentPage } = useCurrency()

  return (
    <Container>
      <Header />

      {currentPage == 'content' ? <ConversionContent /> : <ConversionResult />}
    </Container>
  )
}

export default App
