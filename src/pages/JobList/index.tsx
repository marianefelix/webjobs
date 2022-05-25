import { Card } from 'components/Card';
import jobs from '../../data.json';
import { Header } from './Header';
import { Main } from './styled';

const mockJob = {
  id: 1,
  company: 'Photosnap',
  logo: 'https://user-images.githubusercontent.com/52718710/168858265-561b8022-86a6-4cc9-93a8-e5aedb28c021.svg',
  new: true,
  featured: true,
  position: 'Senior Frontend Developer',
  role: 'Frontend',
  level: 'Senior',
  postedAt: '1d ago',
  contract: 'Full Time',
  location: 'USA Only',
  languages: ['HTML', 'CSS', 'JavaScript'],
  tools: [],
};

export const JobList = () => {
  return (
    <>
      <Header />
      <Main>
        {jobs.map((job) => (
          <Card job={job} />
        ))}
      </Main>
    </>
  );
};
