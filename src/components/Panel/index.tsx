import { ReactNode } from 'react';
import { PanelContainer } from './styles';

interface PanelProps {
  padding: string;
  children: ReactNode;
}

export const Panel = ({ padding, children }: PanelProps) => {
  return <PanelContainer padding={padding}>{children}</PanelContainer>;
};
