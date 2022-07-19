import { ReactNode } from 'react';
import { PanelContainer } from './styles';

interface PanelProps {
  padding: string;
  display?: string;
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'start' | 'end';
  flexDirection?: 'row' | 'column';
  gap?: string;
  width?: string;
  children: ReactNode;
}

export const Panel = ({
  padding,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  width,
  children,
}: PanelProps) => {
  return (
    <PanelContainer
      padding={padding}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      width={width}
    >
      {children}
    </PanelContainer>
  );
};
