import { useContext } from 'react';
import { PrimaryButton } from 'components/Button/Primary';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EmptyImage } from 'assets/images/empty.svg';
import { EmptyStateContainer, EmptyText, Main } from './styles';
import { AuthContext } from 'contexts/AuthContext';

export const EmptyState = () => {
  const { hasUser } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <EmptyStateContainer>
      <Header paddingTop="60px" />
      <Main>
        <EmptyText>
          {hasUser
            ? 'You have not registered any job vacancies yet.'
            : 'No job found. Please, try again.'}
        </EmptyText>
        {hasUser && (
          <PrimaryButton
            width="150px"
            padding="15px 25px"
            onClick={() => navigate('/new-job')}
          >
            Start here
          </PrimaryButton>
        )}
        <EmptyImage />
      </Main>

      <Footer justifyContent="start" />
    </EmptyStateContainer>
  );
};
