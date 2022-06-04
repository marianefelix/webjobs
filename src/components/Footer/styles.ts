import styled from 'styled-components';

interface FooterContainerType {
  justifyContent: 'start' | 'center' | 'end';
}

export const FooterContainer = styled.footer<FooterContainerType>`
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: lighter;
`;
