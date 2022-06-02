import {
  Box,
  BoxDescription,
  ButtonsContainer,
  Description,
  Divider,
  Header,
  HomeContainer,
  Main,
} from './styles';
import { ReactComponent as Logo } from 'assets/images/logo-colors.svg';
import { TextButton } from 'components/Button/Text';
import { SecondaryButton } from 'components/Button/Secondary';
import { PanelContainer } from 'components/Panel/styles';
import { PrimaryButton } from 'components/Button/Primary';

export const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <Logo />
        <ButtonsContainer>
          <TextButton onClick={() => {}}>Sign In</TextButton>
          <SecondaryButton width="126px" padding="15px 25px" onClick={() => {}}>
            Sign Up
          </SecondaryButton>
        </ButtonsContainer>
      </Header>
      <Main>
        <Description>Find or register a web development job here.</Description>
        <PanelContainer display="flex" gap="5rem" padding="33px 36px">
          <Box>
            <BoxDescription>
              Register jobs available at your company
            </BoxDescription>
            <PrimaryButton padding="25px 55px" onClick={() => {}}>
              I'M A COMPANY
            </PrimaryButton>
          </Box>
          <Divider />
          <Box>
            <BoxDescription>
              Search and see the jobs available to you
            </BoxDescription>
            <TextButton onClick={() => {}}>See jobs</TextButton>
          </Box>
        </PanelContainer>
      </Main>
    </HomeContainer>
  );
};
