import { Content } from './styles';

interface IButtonProps {
  children: React.ReactNode;
}

const ButtonContent: React.FC<IButtonProps> = ({ children }) => {
  return <Content>{children}</Content>;
};

export default ButtonContent;
