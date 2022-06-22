import { PrimaryButton } from 'components/Button/Primary';
import { TextButton } from 'components/Button/Text';
import { Checkbox } from 'components/Checkbox';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { Panel } from 'components/Panel';
import { Option, Select } from 'components/Select';
import { useState, FormEvent } from 'react';

import {
  ButtonsContainer,
  CheckboxesContainer,
  Form,
  Main,
  NewJobContainer,
  Title,
} from './styles';

interface FormType {
  role: string;
  level: string;
  workingTime: string;
  location: string;
  languages: string[];
  tools: string[];
  new: boolean;
  featured: boolean;
  link: string;
}

const roleOptions = [
  { value: 'Fullstack' },
  { value: 'Frontend' },
  { value: 'Backend' },
];

const levelOptions = [
  { value: 'Junior' },
  { value: 'Midweight' },
  { value: 'Senior' },
];

const languagesOptions = [
  { value: 'HTML' },
  { value: 'CSS' },
  { value: 'JavaScript' },
  { value: 'Python' },
  { value: 'Java' },
  { value: 'Ruby' },
];

const toolsOptions = [
  { value: 'Angular' },
  { value: 'Django' },
  { value: 'Sass' },
  { value: 'React' },
  { value: 'RoR' },
  { value: 'Vue' },
];

export const NewJob = () => {
  const [form, setForm] = useState<FormType>();

  const handleChange = (
    newValue: Option | (EventTarget & HTMLInputElement),
    key:
      | 'role'
      | 'level'
      | 'workingTime'
      | 'location'
      | 'languages'
      | 'tools'
      | 'new'
      | 'featured'
      | 'link'
  ) => {
    const updatedValue = {
      [key]: newValue.value,
    };
    setForm(
      (prevForm) =>
        ({
          ...prevForm,
          ...updatedValue,
        } as FormType)
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <NewJobContainer>
      <Header paddingTop="60px" />
      <Main>
        <Title>Register job</Title>
        <Panel padding="36px 30px" width="80%">
          <Form onSubmit={handleSubmit}>
            <Select
              options={roleOptions}
              onChange={(selectedOption: Option) =>
                handleChange(selectedOption, 'role')
              }
              placeholder="Role"
            />
            <Select
              options={levelOptions}
              onChange={(selectedOption: Option) =>
                handleChange(selectedOption, 'level')
              }
              placeholder="Level"
            />

            <Input
              onChange={(event) => handleChange(event.target, 'workingTime')}
              placeholder="Working time"
            />
            <Input
              onChange={(event) => handleChange(event.target, 'location')}
              placeholder="Location"
            />
            <Select
              options={languagesOptions}
              onChange={(selectedOption: Option) =>
                handleChange(selectedOption, 'languages')
              }
              placeholder="Languages"
            />
            <Select
              options={toolsOptions}
              onChange={(selectedOption: Option) =>
                handleChange(selectedOption, 'tools')
              }
              placeholder="Tools"
            />
            <Input
              onChange={(event) => handleChange(event.target, 'location')}
              placeholder="Link to apply"
              type="url"
            />
            <CheckboxesContainer>
              <Checkbox>Featured</Checkbox>
              <Checkbox>New</Checkbox>
            </CheckboxesContainer>
            <ButtonsContainer>
              <PrimaryButton width="126px" padding="15px 25px" type="submit">
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
