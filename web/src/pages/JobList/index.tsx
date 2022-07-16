import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import { Job } from 'models/job';
import { useRequest } from 'hooks/useRequest';
import { toast } from 'react-toastify';

import { Card } from 'components/Card';
import { FilterBox } from 'components/FilterBox';
import { Header } from 'components/Header';
import { AddJobButton } from 'components/Button/AddJob';

import { AbsoluteBox, Main } from './styles';

export const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>();
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);
  const { runRequest } = useRequest();
  const { hasUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const getJobs = async () => {
    setIsLoadingJobs(true);

    const customErrorMessage = 'Error getting job list, please try again.';

    const response = await runRequest<Job[]>(
      '/job/list',
      'get',
      undefined,
      undefined,
      customErrorMessage
    );

    setIsLoadingJobs(false);

    if (response instanceof Error) {
      toast.error(response.message);
    } else {
      setJobs(response);
    }
  };

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Main>
        <AbsoluteBox>
          <FilterBox />
        </AbsoluteBox>
        {jobs && jobs.map((job) => <Card job={job} key={job.id} />)}
        {hasUser && <AddJobButton onClick={() => navigate('/new-job')} />}
      </Main>
    </>
  );
};
