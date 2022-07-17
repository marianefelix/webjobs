import {useState, FormEvent, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {JobContext, JobRequest} from 'contexts/JobContext';
import {AuthContext} from 'contexts/AuthContext';
import {PrimaryButton} from 'components/Button/Primary';
import {TextButton} from 'components/Button/Text';
import {Checkbox} from 'components/Checkbox';
import {Footer} from 'components/Footer';
import {Header} from 'components/Header';
import {Input} from 'components/Input';
import {Panel} from 'components/Panel';
import {Option, Select} from 'components/Select';
import {languageTypes, levelTypes, roleTypes, toolTypes} from '../../constants';
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

const roleOptions = roleTypes.map((role) => ({value: role}));

const levelOptions = levelTypes.map((level) => ({value: level}));

const languagesOptions = languageTypes.map((language) => ({
  value: language,
}));

const toolsOptions = toolTypes.map((tool) => ({value: tool}));

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
  const {isRegisterNewJobLoading, registerNewJob} = useContext(JobContext);
  const {userId} = useContext(AuthContext);
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
    const formattedNewValues = newValues.map((newValueItem) => {
      return newValueItem.value;
    });

    const updatedValue = {
      [key]: formattedNewValues,
    };
    setForm(
      (prevForm) =>
        ({
          ...prevForm,
          ...updatedValue,
        } as FormType)
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formattedData = {...form} as JobRequest;
    formattedData.companyId = userId;

    const {success, error} = await registerNewJob(formattedData);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success(success);

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
              <PrimaryButton
                width="126px"
                padding="15px 25px"
                type="submit"
                isLoading={isRegisterNewJobLoading}
              >
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
