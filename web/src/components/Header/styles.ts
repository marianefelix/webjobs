import styled from 'styled-components';
import bgHeader from 'assets/images/bg-header-desktop.svg';

interface HeaderContainerType {
  paddingTop?: string;
}

export const HeaderContainer = styled.header<HeaderContainerType>`
  width: 100%;
  height: 156px;

  display: flex;
  justify-content: flex-start;

  position: relative;

  background-color: ${({ theme }) => theme.color.primary};
  background-image: url(${bgHeader});
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '40px')};

  svg {
    margin-left: 10%;
  }
`;
