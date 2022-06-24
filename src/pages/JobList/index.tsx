import { Card } from 'components/Card';
import { FilterBox } from 'components/FilterBox';
import jobs from '../../data.json';
import { Header } from 'components/Header';
import { AbsoluteBox, Main } from './styles';

export const JobList = () => {
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
      </Main>
    </>
  );
};
