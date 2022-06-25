import { BadgeContainer, Text } from './styles';

interface BadgeProps {
  type: 'new' | 'featured';
}

export const Badge = ({ type }: BadgeProps) => {
  return (
    <BadgeContainer type={type}>
      <Text>{type === 'new' ? 'new!' : 'featured'}</Text>
    </BadgeContainer>
  );
};
