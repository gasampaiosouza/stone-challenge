import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: #00ab63;
    font-size: 4rem;
    font-weight: 600;
    line-height: 5rem;
  }

  h3 {
    color: #45505e;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 2rem;
  }
`

export const TaxesInfo = styled.div`
  line-height: 2rem;
  font-size: 0.875rem;
  color: #45505e;

  p {
    font-weight: 400;
  }

  strong {
    font-weight: 500;
  }
`
