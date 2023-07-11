import styled from 'styled-components'

type IContainer = { $theme: 'primary' | 'secondary' }

const getColor = (theme: string, primary: string, secondary: string) => {
  return theme === 'primary' ? primary : secondary
}

export const Container = styled.button<IContainer>`
  cursor: pointer;
  padding: 1rem;

  border-radius: 0.5rem;
  max-width: 9rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
  transition: all 0.2s ease-in-out;

  color: ${({ $theme: t }) => getColor(t, '#fff', '#2E3742')};
  border: 1px solid ${({ $theme: t }) => getColor(t, '#008B57', '#D7E0EB')};
  background: ${({ $theme: t }) => getColor(t, '#00AB63', '#fff')};

  &:hover {
    background: ${({ $theme: t }) => getColor(t, '#008B57', '#D7E0EB')};
  }

  &:disabled {
    cursor: not-allowed;
    background: #8c9cad;

    &:hover {
      background: #8c9cad;
    }
  }
`

// export const IconContainer = styled.button``;

export const Content = styled.span`
  font-size: 1rem;
  font-weight: 600;
`
