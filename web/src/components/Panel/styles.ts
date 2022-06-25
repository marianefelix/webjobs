import styled from 'styled-components';

interface PanelContainerType {
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
}

export const PanelContainer = styled.div<PanelContainerType>`
  width: ${(props) => (props.width ? props.width : 'fit-content')};
  padding: ${(props) => props.padding};

  display: ${(props) => props.display ?? 'block'};
  justify-content: ${(props) => props.justifyContent ?? 'start'};
  align-items: ${(props) => props.alignItems ?? 'start'};
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  gap: ${(props) => props.gap ?? undefined};

  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.badge};
`;
