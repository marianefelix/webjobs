import { PrimaryButton } from 'components/Button/Primary';
import { TextButton } from 'components/Button/Text';
import { Checkbox } from 'components/Checkbox';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { Panel } from 'components/Panel';
import { useState } from 'react';
import {
  ButtonsContainer,
  CheckboxesContainer,
  Form,
  Main,
  NewJobContainer,
  Title,
} from './styles';

interface CheckboxControlType {
  [key: string]: boolean;
}

export const NewJob = () => {
  const [checkboxControl, setCheckboxControl] = useState<CheckboxControlType>({
    featured: false,
    new: false,
  });

  const toggleCheckboxControl = (key: string) => {
    setCheckboxControl((prevState) => ({
      key: !checkboxControl[key],
      ...prevState,
    }));
  };

  return (
    <NewJobContainer>
      <Header paddingTop="60px" />
      <Main>
        <Title>Register job</Title>
        <Panel padding="36px 30px" width="80%">
          <Form>
            <Input placeholder="Role" required />
            <Input placeholder="Level" />
            <Input placeholder="Working time" />
            <Input placeholder="Location" />
            <Input placeholder="Languages" />
            <Input placeholder="Tools" />
            <Input placeholder="Link to apply" type="url" />
            <CheckboxesContainer>
              <Checkbox>Featured</Checkbox>
              <Checkbox>New</Checkbox>
            </CheckboxesContainer>
            <ButtonsContainer>
              <PrimaryButton
                width="126px"
                padding="15px 25px"
                onClick={() => {}}
                type="submit"
              >
                Save
              </PrimaryButton>
              <TextButton onClick={() => {}} type="button">
                back
              </TextButton>
            </ButtonsContainer>
          </Form>
        </Panel>
      </Main>
      <Footer justifyContent="start" />
    </NewJobContainer>
  );
};
