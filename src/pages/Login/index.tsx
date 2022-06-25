import { ReactComponent as Logo } from 'assets/images/logo-colors.svg';
import { ReactComponent as GirlImage } from 'assets/images/login.svg';

import { PrimaryButton } from 'components/Button/Primary';
import { TextButton } from 'components/Button/Text';
import { Input } from 'components/Input';
import { Panel } from 'components/Panel';
import {
  Form,
  ImageSection,
  LoginContainer,
  Main,
  WelcomeText,
} from './styles';
import { Footer } from 'components/Footer';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
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
          <Form>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />

            <PrimaryButton padding="15px" type="submit">
              Login
            </PrimaryButton>
            <TextButton
              onClick={() => navigate('/user-registration')}
              type="button"
            >
              or sign up
            </TextButton>
          </Form>
        </Panel>
      </Main>
      <Footer justifyContent="center" />
    </LoginContainer>
  );
};
