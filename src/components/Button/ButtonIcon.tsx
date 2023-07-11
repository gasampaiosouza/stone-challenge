import type { LucideProps } from 'lucide-react'

interface IButtonProps extends LucideProps {
  icon: React.ElementType
}

const ButtonIcon: React.FC<IButtonProps> = ({ icon: Icon, ...rest }) => {
  return <Icon size={24} {...rest} />
}

export default ButtonIcon
