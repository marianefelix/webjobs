import { ReactComponent as LogoWhite } from 'assets/images/logo-white.svg';
import { HeaderContainer } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoWhite aria-labelledby="title" />
    </HeaderContainer>
  );
};
