import { FilterBox } from 'components/FilterBox';
import { ReactComponent as LogoWhite } from 'assets/images/logo-white.svg';
import { AbsoluteBox, HeaderContainer } from './styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <AbsoluteBox>
        <LogoWhite />
        <FilterBox />
      </AbsoluteBox>
    </HeaderContainer>
  );
};
