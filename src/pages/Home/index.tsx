import {
  Box,
  BoxDescription,
  ButtonsContainer,
  Description,
  DescriptionSection,
  Divider,
  Header,
  HomeContainer,
  ImageSection,
  Main,
} from './styles';

import { ReactComponent as Logo } from 'assets/images/logo-colors.svg';
import { ReactComponent as CodeGirlImage } from 'assets/images/home.svg';

import { TextButton } from 'components/Button/Text';
import { SecondaryButton } from 'components/Button/Secondary';
import { PanelContainer } from 'components/Panel/styles';
import { PrimaryButton } from 'components/Button/Primary';
import { Footer } from 'components/Footer';

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
        <DescriptionSection>
          <Description>
            Find or register a web development job here.
          </Description>
          <PanelContainer display="flex" gap="3.5rem" padding="33px 36px">
            <Box>
              <BoxDescription>
                Register jobs available at your company
              </BoxDescription>
              <PrimaryButton padding="20px 45px" onClick={() => {}}>
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
        </DescriptionSection>
        <ImageSection>
          <CodeGirlImage />
        </ImageSection>
      </Main>
      <Footer justifyContent="start" />
    </HomeContainer>
  );
};
