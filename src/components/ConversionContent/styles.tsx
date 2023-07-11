import styled from 'styled-components'

import { default as CurrencyField } from 'react-currency-input-field'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const TaxesContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const CurrencyInput = styled(CurrencyField)`
  max-width: 168px;
  border: 1px solid #d7e0eb;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
  outline: none;

  font-size: 1rem;

  &:focus {
    border-color: #8c9cad;
  }

  &::placeholder {
    color: #8c9cad;
  }
`

export const RadioContainer = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 0.4rem;
`

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const Text = styled.span`
  line-height: 1.5rem;
  font-weight: 400;
`

export const RadioBox = styled.div`
  cursor: pointer;

  height: 1rem;
  width: 1rem;

  border: 2px solid #8c9cad;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.5rem;
  transition: 0.2s ease-in-out;

  &::after {
    content: '';

    cursor: pointer;

    width: 0.75rem;
    height: 0.75rem;

    display: block;

    background: #008b57;
    border-radius: 50%;

    transform: scale(0);
    transition: 0.2s ease-in-out;
  }
`

export const RadioInput = styled.input`
  display: none;

  &:checked + ${RadioBox} {
    border-color: #008b57;

    &::after {
      transform: scale(1);
    }
  }
`
