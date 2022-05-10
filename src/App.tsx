import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';

import { GlobalStyle } from './styles/global';
import { light } from './styles/theme';

const mockJob = {
  id: 1,
  company: 'Photosnap',
  logo: 'photosnap.svg',
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
