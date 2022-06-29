import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from 'components/Button/Primary';
import { TextButton } from 'components/Button/Text';
import { Input } from 'components/Input';
import { Panel } from 'components/Panel';
import { Footer } from 'components/Footer';

import {
  Form,
  ImageSection,
  LoginContainer,
  Main,
  WelcomeText,
} from './styles';

import { ReactComponent as Logo } from 'assets/images/logo-colors.svg';
import { ReactComponent as GirlImage } from 'assets/images/login.svg';
import { UserCredentials } from 'models/user';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from 'contexts/AuthContext';

type FormType = {
  [key in keyof UserCredentials]: string;
};

const formDefaultValue = {
  email: '',
  password: '',
};

export const Login = () => {
  const [form, setForm] = useState<FormType>(formDefaultValue);
  const { authenticateUser, isAuthenticateUserLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { success, error } = await authenticateUser(form);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success(success);
    navigate('/list');
  };

  const handleFormOnChange = (key: keyof UserCredentials, value: string) => {
    setForm({ ...form, [key]: value });
  };

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
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Input
              required
              type="email"
              placeholder="Email"
              name={'email'}
              value={form['email']}
              onChange={(event) =>
                handleFormOnChange('email', event.target.value)
              }
            />
            <Input
              required
              type="password"
              placeholder="Password"
              name={'password'}
              value={form['password']}
              onChange={(event) =>
                handleFormOnChange('password', event.target.value)
              }
            />

            <PrimaryButton
              padding="15px"
              type="submit"
              isLoading={isAuthenticateUserLoading}
            >
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
