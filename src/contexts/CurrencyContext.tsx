import { createContext, ReactNode, useState, useContext, Dispatch, useRef } from 'react'
import { Currency } from '../components/types/currency'

import LoadingBar from 'react-top-loading-bar'

type SetState<T> = Dispatch<React.SetStateAction<T>>
type ICurrencyContext = {
  currencies: { currency: string | number; taxes: string | number }
  type: 'money' | 'card'
  currencyData: Currency['USDBRL']
  currentPage: 'content' | 'result'
  handlePageChange: (page: 'content' | 'result') => void
  handleCurrencyData: (data: Currency['USDBRL']) => void
  setCurrencies: SetState<{ currency: string | number; taxes: string | number }>
  handleTypeChange: (newType: 'money' | 'card') => void
  handleLoading: (state: 'start' | 'end') => void
}

// little bit of ts hacking
export const CurrencyContext = createContext({} as ICurrencyContext)

type ICurrencyContextProvider = {
  children: ReactNode
}

// PROVIDER with values
export function CurrencyContextProvider({ children }: ICurrencyContextProvider) {
  const [currencies, setCurrencies] = useState({ currency: '1', taxes: '' })
  const [type, setType] = useState('money' as 'money' | 'card')
  const [currencyData, setCurrencyData] = useState({} as Currency['USDBRL'])
  const [currentPage, setCurrentPage] = useState('content' as 'content' | 'result')

  const progressRef = useRef(null)

  function handleLoading(state: 'start' | 'end') {
    if (state === 'start') {
      progressRef.current.staticStart()
      return
    }

    progressRef.current.complete()
  }

  function handlePageChange(page: typeof currentPage) {
    setCurrentPage(page)
  }

  function handleTypeChange(newType: typeof type) {
    setType(newType)
  }

  function handleCurrencyData(data: Currency['USDBRL']) {
    setCurrencyData(data)
  }

  console.log(currencyData)

  return (
    <CurrencyContext.Provider
      value={{
        currencies,
        type,
        currencyData,
        currentPage,
        handlePageChange,
        handleCurrencyData,
        setCurrencies,
        handleTypeChange,
        handleLoading,
      }}
    >
      <LoadingBar color="#00AB63" height={3} ref={progressRef} />
      {children}
    </CurrencyContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrency = () => useContext(CurrencyContext)
