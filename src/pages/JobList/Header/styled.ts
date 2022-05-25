import styled from 'styled-components';
import bgHeaderDesktop from 'assets/images/bg-header-desktop.svg';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 156px;

  display: flex;
  justify-content: center;

  position: relative;

  background-color: #5ba4a4;
`;

export const AbsoluteBox = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 50px;

  position: relative;
  top: 40px;
`;
