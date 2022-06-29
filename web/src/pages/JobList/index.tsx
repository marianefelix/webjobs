import { Card } from 'components/Card';
import { FilterBox } from 'components/FilterBox';
import jobs from '../../data.json';
import { Header } from 'components/Header';
import { AbsoluteBox, Main } from './styles';
import { AddJobButton } from 'components/Button/AddJob';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

export const JobList = () => {
  const { hasUser } = useContext(AuthContext);
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
        {hasUser && <AddJobButton onClick={() => navigate('/new-job')} />}
      </Main>
    </>
  );
};
