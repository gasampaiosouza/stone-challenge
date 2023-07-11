import { useEffect, useState } from 'react'

import { ArrowLeft } from 'lucide-react'
import { Button } from '../Button'
import { Container, ResultContainer, TaxesInfo } from './styles'
import { useCurrency } from '../../contexts/CurrencyContext'

interface IConversionContent {}

const ConversionResult: React.FC<IConversionContent> = () => {
  const [result, setResult] = useState(0)
  const { format } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const {
    currencyData,
    currencies,
    type,
    handlePageChange,
    setCurrencies,
    handleTypeChange,
  } = useCurrency()

  function handlePageReturning() {
    setCurrencies({ currency: '1', taxes: '' })
    handleTypeChange('money')

    handlePageChange('content')
  }

  useEffect(() => {
    const MONEY_IOF = 1.1 / 1000
    const CARD_IOF = 6.4 / 100

    const { currency, taxes } = currencies
    const { ask } = currencyData

    if (type == 'money') {
      const value = (Number(currency) + Number(taxes)) * (Number(ask) + MONEY_IOF)

      return setResult(value)
    }

    const value = (Number(currency) + Number(taxes) * CARD_IOF) * Number(ask)
    setResult(value)
  }, [])

  return (
    <Container>
      <Button.Root theme="secondary" onClick={handlePageReturning}>
        <Button.Icon color="#8C9CAD" icon={ArrowLeft} />
        <Button.Content>Voltar</Button.Content>
      </Button.Root>

      <ResultContainer>
        <h3>O resultado do cálculo é</h3>
        <h1>{format(result)}</h1>
      </ResultContainer>

      <TaxesInfo>
        <p>
          <strong>Compra no dinheiro e taxa de</strong> {format(Number(currencies.taxes))}
        </p>

        <p>
          <strong>Cotação do dólar:</strong> $1,00 = {format(Number(currencyData.ask))}
        </p>
      </TaxesInfo>
    </Container>
  )
}

export default ConversionResult
