import styled from 'styled-components';

interface PanelContainerType {
  padding: string;
}

export const PanelContainer = styled.div<PanelContainerType>`
  width: fit-content;
  padding: ${(props) => props.padding};
  background-color: ${({ theme }) => theme.color.lightGrey};

  border-radius: ${({ theme }) => theme.borderRadius.badge};
`;
