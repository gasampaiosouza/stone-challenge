import { ReactComponent as StoneLogo } from '../../assets/stone.svg';
import { Container, Logo, UpdatedChangeDate } from './styles';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

const Header = () => {
  const formatedDate = dayjs().format('DD [de] MMMM YYYY');
  const formatedTime = dayjs().format('HH:mm [UTC]');

  return (
    <Container>
      <Logo>
        <StoneLogo />
      </Logo>

      <UpdatedChangeDate>
        <strong>
          {formatedDate} | {formatedTime}
        </strong>
        
        <span>Dados de câmbio disponibilizados pela Morningstar.</span>
      </UpdatedChangeDate>
    </Container>
  );
};

export default Header;
