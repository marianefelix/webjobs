import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import { Job } from 'models/job';
import { useRequest } from 'hooks/useRequest';
import { toast } from 'react-toastify';
import { Filter } from 'models/filters';

import { Card } from 'components/Card';
import { FilterBox } from 'components/FilterBox';
import { Header } from 'components/Header';
import { AddJobButton } from 'components/Button/AddJob';

import { AbsoluteBox, Main } from './styles';

export const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>();
  const [filters, setFilters] = useState<Filter[]>([]);
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

  const handleFilterSelection = (targetFilter: Filter) => {
    const result = filters.find((filter) => filter === targetFilter);

    let updatedFilters: Filter[];

    if (!result) {
      updatedFilters = [...filters, targetFilter];
    } else {
      updatedFilters = filters.filter((filter) => filter !== targetFilter);
    }

    setFilters(updatedFilters);
  };

  const matchesAllFilters = useCallback(
    (job: Job) => {
      const jobProperties = [
        ...Object.values(job),
        ...job.tools,
        ...job.languages,
      ];

      for (let filter of filters) {
        if (!jobProperties.includes(filter)) {
          return false;
        }
      }

      return true;
    },
    [filters]
  );

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (jobs) {
      setFilteredJobs(jobs.filter((job) => matchesAllFilters(job)));
    }
  }, [filters, jobs, matchesAllFilters]);

  return (
    <>
      <Header />
      <Main>
        <AbsoluteBox>
          <FilterBox
            filters={filters}
            onChange={(newFilters) => setFilters(newFilters)}
          />
        </AbsoluteBox>
        {filteredJobs &&
          filteredJobs.map((job) => (
            <Card
              job={job}
              key={job.id}
              selectedTags={filters}
              onChangeTagSelect={handleFilterSelection}
            />
          ))}
        {hasUser && <AddJobButton onClick={() => navigate('/new-job')} />}
      </Main>
    </>
  );
};
