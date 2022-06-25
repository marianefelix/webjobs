import { PrimaryButton } from 'components/Button/Primary';
import { TextButton } from 'components/Button/Text';
import { Checkbox } from 'components/Checkbox';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { Panel } from 'components/Panel';
import { Option, Select } from 'components/Select';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

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

const initialForm: FormType = {
  role: '',
  level: '',
  workingTime: '',
  location: '',
  languages: [],
  tools: [],
  new: false,
  featured: false,
  link: '',
};
export const NewJob = () => {
  const [form, setForm] = useState<FormType>(initialForm);

  const navigate = useNavigate();

  const handleChange = (
    newValue: Option | (EventTarget & HTMLInputElement),
    key:
      | 'role'
      | 'level'
      | 'workingTime'
      | 'location'
      | 'new'
      | 'featured'
      | 'link',
    checkbox = false
  ) => {
    const updatedValue = {
      [key]: checkbox ? (newValue as HTMLInputElement).checked : newValue.value,
    };
    setForm(
      (prevForm) =>
        ({
          ...prevForm,
          ...updatedValue,
        } as FormType)
    );
  };

  const handleChangeMulti = (
    newValues: Option[],
    key: 'languages' | 'tools'
  ) => {
    const updatedValue = {
      [key]: newValues,
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
    navigate('/list');
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
              required
            />
            <Input
              onChange={(event) => handleChange(event.target, 'location')}
              placeholder="Location"
              required
            />
            <Select
              options={languagesOptions}
              onChange={(selectedOption: Option[]) =>
                handleChangeMulti(selectedOption, 'languages')
              }
              placeholder="Languages"
              isMulti
            />
            <Select
              options={toolsOptions}
              onChange={(selectedOption: Option[]) =>
                handleChangeMulti(selectedOption, 'tools')
              }
              placeholder="Tools"
              isMulti
            />
            <Input
              onChange={(event) => handleChange(event.target, 'link')}
              placeholder="Link to apply"
              required
              type="url"
            />
            <CheckboxesContainer>
              <Checkbox
                onChange={(event) =>
                  handleChange(event.target, 'featured', true)
                }
              >
                Featured
              </Checkbox>
              <Checkbox
                onChange={(event) => handleChange(event.target, 'new', true)}
              >
                New
              </Checkbox>
            </CheckboxesContainer>
            <ButtonsContainer>
              <PrimaryButton width="126px" padding="15px 25px" type="submit">
                Save
              </PrimaryButton>
              <TextButton onClick={() => navigate(-1)} type="button">
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
