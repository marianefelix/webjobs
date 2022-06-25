import { ReactComponent as LogoWhite } from 'assets/images/logo-white.svg';
import { HeaderContainer } from './styles';
interface HeaderProps {
  paddingTop?: string;
}

export const Header = ({ paddingTop }: HeaderProps) => {
  return (
    <HeaderContainer paddingTop={paddingTop}>
      <LogoWhite aria-labelledby="title" />
    </HeaderContainer>
  );
};
