import { useEffect, useState } from 'react'

import useSWR from 'swr'

import { Button } from '../Button'
import { ArrowLeftRight } from 'lucide-react'

import {
  Container,
  CurrencyInput,
  InputContainer,
  Label,
  RadioBox,
  RadioContainer,
  TaxesContainer,
  RadioInput,
  RadioLabel,
  Text,
} from './styles'
import fetcher from '../../utils/fetcher'
import { Currency } from '../types/currency'
import { useCurrency } from '../../contexts/CurrencyContext'
import { CurrencyInputOnChangeValues } from 'react-currency-input-field/dist/components/CurrencyInputProps'

const DEFAULT_OPTIONS = { allowNegativeValue: false, maxLength: 9, step: 1 }
const CURRENCY_OPTIONS = {
  ...DEFAULT_OPTIONS,
  prefix: '$',
  decimalScale: 2,
  defaultValue: 1,
}

const TAXES_OPTIONS = {
  ...DEFAULT_OPTIONS,
  suffix: '%',

  decimalSeparator: '.',
  groupSeparator: ',',
}

interface IConversionContent {}

const URL = 'https://economia.awesomeapi.com.br/last/USD-BRL'

const ConversionContent: React.FC<IConversionContent> = () => {
  const {
    currencies,
    setCurrencies,
    handleTypeChange,
    handleCurrencyData,
    handlePageChange,
    handleLoading,
  } = useCurrency()

  const [isValid, setIsValid] = useState(false)
  const [shouldFetch, setShouldFetch] = useState(false)

  const { data } = useSWR<Currency>(shouldFetch ? URL : null, fetcher)

  function handleCurrencyChange(
    _: string,
    __: string,
    value: CurrencyInputOnChangeValues
  ) {
    setCurrencies((prev) => ({ ...prev, currency: value.float }))
  }

  function handleTaxesChange(_: string, __: string, value: CurrencyInputOnChangeValues) {
    setCurrencies((prev) => ({ ...prev, taxes: value.float }))
  }

  function handleCurrencyFetching() {
    handleLoading('start')
    setShouldFetch(true)
  }

  useEffect(() => {
    if (!data) return

    handleCurrencyData(data.USDBRL)
    handlePageChange('result')

    handleLoading('end')
  }, [data])

  useEffect(() => {
    const { currency, taxes } = currencies

    if (currency === '0' || taxes === '') {
      setIsValid(false)
      return
    }

    setIsValid(true)
  }, [currencies])

  return (
    <Container>
      <TaxesContainer>
        <InputContainer>
          <Label htmlFor="currency">Dólar</Label>
          <CurrencyInput
            onValueChange={handleCurrencyChange}
            id="currency"
            {...CURRENCY_OPTIONS}
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="taxes">Taxa do Estado</Label>
          <CurrencyInput
            onValueChange={handleTaxesChange}
            id="taxes"
            {...TAXES_OPTIONS}
            placeholder="0%"
          />
        </InputContainer>
      </TaxesContainer>

      <InputContainer>
        <Label>Tipo de compra</Label>

        <RadioContainer>
          <RadioLabel id="money">
            <RadioInput
              onChange={(ev) => handleTypeChange(ev.target.value)}
              type="radio"
              name="type"
              id="money"
              value="money"
              defaultChecked
            />
            <RadioBox></RadioBox>
            <Text>Dinheiro</Text>
          </RadioLabel>

          <RadioLabel id="card">
            <RadioInput
              onChange={(ev) => handleTypeChange(ev.target.value)}
              type="radio"
              name="type"
              id="card"
              value="card"
            />
            <RadioBox></RadioBox>
            <Text>Cartão</Text>
          </RadioLabel>
        </RadioContainer>
      </InputContainer>

      <Button.Root disabled={!isValid} onClick={handleCurrencyFetching}>
        <Button.Icon icon={ArrowLeftRight} />
        <Button.Content>Converter</Button.Content>
      </Button.Root>
    </Container>
  )
}

export default ConversionContent
