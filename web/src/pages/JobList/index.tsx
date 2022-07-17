import {useCallback, useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from 'contexts/AuthContext';
import {Job} from 'models/job';
import {toast} from 'react-toastify';
import {Filter} from 'types';

import {Card} from 'components/Card';
import {FilterBox} from 'components/FilterBox';
import {Header} from 'components/Header';
import {AddJobButton} from 'components/Button/AddJob';

import {AbsoluteBox, Main} from './styles';
import {JobContext} from 'contexts/JobContext';
import {EmptyState} from 'pages/EmptyState';

export const JobList = () => {
  const {getJobs, isGetJobsLoading} = useContext(JobContext);
  const {hasUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const [jobs, setJobs] = useState<Job[]>();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>();
  const [filters, setFilters] = useState<Filter[]>([]);

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

  const handleGetJobs = async () => {
    const {success: response, error} = await getJobs();

    if (error) {
      toast.error(error.message);
      return;
    }

    setJobs(response);
  };

  useEffect(() => {
    handleGetJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (jobs) {
      setFilteredJobs(jobs.filter((job) => matchesAllFilters(job)));
    }
  }, [filters, jobs, matchesAllFilters]);

  if (!isGetJobsLoading && (jobs === undefined || jobs?.length === 0)) {
    return <EmptyState />;
  }

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
