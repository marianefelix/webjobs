import { FooterContainer, Text } from './styles';

interface FooterProps {
  justifyContent: 'start' | 'center' | 'end';
}

export const Footer = ({ justifyContent }: FooterProps) => {
  return (
    <FooterContainer justifyContent={justifyContent}>
      <Text>Made by Lorena and Mariane</Text>
    </FooterContainer>
  );
};
