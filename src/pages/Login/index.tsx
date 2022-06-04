import { ReactComponent as Logo } from 'assets/images/logo-colors.svg';
import { ReactComponent as GirlImage } from 'assets/images/login.svg';

import { PrimaryButton } from 'components/Button/Primary';
import { TextButton } from 'components/Button/Text';
import { Input } from 'components/Input';
import { Panel } from 'components/Panel';
import { ImageSection, LoginContainer, Main, WelcomeText } from './styled';
import { Footer } from 'components/Footer';

export const Login = () => {
  return (
    <LoginContainer>
      <Main>
        <Logo aria-labelledby="title" />
        <ImageSection>
          <GirlImage />
        </ImageSection>
        <Panel
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="70px 60px"
          gap="30px"
        >
          <WelcomeText>Welcome back!</WelcomeText>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <PrimaryButton padding="15px">Login</PrimaryButton>
          <TextButton onClick={() => {}}>or sign up</TextButton>
        </Panel>
      </Main>
      <Footer justifyContent="center" />
    </LoginContainer>
  );
};
