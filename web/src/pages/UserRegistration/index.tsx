import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  ButtonsContainer,
  Description,
  Form,
  FormGroup,
  Header,
  ImageSection,
  Main,
  RegistrationSection,
  UserRegistrationContainer,
} from './styles';

import { ReactComponent as Logo } from 'assets/images/logo-colors.svg';
import { ReactComponent as CodeGirlImage } from 'assets/images/user-registration.svg';

import { Panel } from 'components/Panel';
import { Input } from 'components/Input';
import { PrimaryButton } from 'components/Button/Primary';
import { TextButton } from 'components/Button/Text';
import { Footer } from 'components/Footer';

import { User } from 'models/user';
import { AuthContext } from 'contexts/AuthContext';

type FormType = {
  [key in keyof User]: string;
};

const formDefaultValue = {
  companyName: '',
  logoUrl: '',
  email: '',
  password: '',
};

export const UserRegistration = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormType>(formDefaultValue);
  const { registerUser, isRegisterUserLoading } = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { success, error } = await registerUser(form);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success(success);
    navigate('/login');
  };

  const handleFormOnChange = (key: keyof User, value: string) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <UserRegistrationContainer>
      <Header>
        <Logo />
      </Header>
      <Main>
        <ImageSection>
          <CodeGirlImage />
        </ImageSection>
        <RegistrationSection>
          <Panel
            display="flex"
            flexDirection="column"
            gap="3rem"
            padding="50px 70px"
          >
            <Description>
              Are you a technology company and do you have available web jobs?
              Register in our system to spread them around the world.
            </Description>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <FormGroup>
                <Input
                  required
                  type="text"
                  placeholder="Company's name"
                  name="companyName"
                  value={form['companyName']}
                  onChange={(event) =>
                    handleFormOnChange('companyName', event.target.value)
                  }
                />
                <Input
                  required
                  type="url"
                  placeholder="Logo url"
                  name="logoUrl"
                  value={form['logoUrl']}
                  onChange={(event) =>
                    handleFormOnChange('logoUrl', event.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Input
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={form['email']}
                  onChange={(event) =>
                    handleFormOnChange('email', event.target.value)
                  }
                />
                <Input
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={form['password']}
                  onChange={(event) =>
                    handleFormOnChange('password', event.target.value)
                  }
                />
              </FormGroup>
              <ButtonsContainer>
                <PrimaryButton
                  width="150px"
                  padding="15px 25px"
                  type="submit"
                  isLoading={isRegisterUserLoading}
                >
                  Sign Up
                </PrimaryButton>
                <TextButton onClick={() => navigate(-1)} type="button">
                  back
                </TextButton>
              </ButtonsContainer>
            </Form>
          </Panel>
        </RegistrationSection>
      </Main>
      <Footer justifyContent="end" />
    </UserRegistrationContainer>
  );
};
