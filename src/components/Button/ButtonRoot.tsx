import { Container } from './styles'

type ButtonAttrs = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

interface IButtonProps extends ButtonAttrs {
  children: React.ReactNode[] | React.ReactNode
  theme?: 'primary' | 'secondary'
}

const ButtonRoot: React.FC<IButtonProps> = ({ children, theme, ...rest }) => {
  return (
    <Container $theme={theme || 'primary'} {...rest}>
      {children}
    </Container>
  )
}

export default ButtonRoot
