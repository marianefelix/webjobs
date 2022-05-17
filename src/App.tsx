import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';
import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';

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

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <h1>WebJobs</h1>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Card job={mockJob} />
      </div>
    </ThemeProvider>
  );
};
