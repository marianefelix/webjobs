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

export const UserRegistration = () => {
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
            <Form>
              <FormGroup>
                <Input required type="text" placeholder="Company's name" />
                <Input required type="url" placeholder="Logo url" />
              </FormGroup>
              <FormGroup>
                <Input required type="email" placeholder="Email" />
                <Input required type="password" placeholder="Password" />
              </FormGroup>
              <ButtonsContainer>
                <PrimaryButton
                  width="126px"
                  padding="15px 25px"
                  onClick={() => {}}
                  type="submit"
                >
                  Sign Up
                </PrimaryButton>
                <TextButton onClick={() => {}} type="button">
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
