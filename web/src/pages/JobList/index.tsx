import { Card } from 'components/Card';
import { FilterBox } from 'components/FilterBox';
import jobs from '../../data.json';
import { Header } from 'components/Header';
import { AbsoluteBox, Main } from './styles';
import { AddJobButton } from 'components/Button/AddJob';

import { useNavigate } from 'react-router-dom';

export const JobList = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Main>
        <AbsoluteBox>
          <FilterBox />
        </AbsoluteBox>
        {jobs.map((job) => (
          <Card job={job} />
        ))}
        <AddJobButton onClick={() => navigate('/new-job')} />
      </Main>
    </>
  );
};
