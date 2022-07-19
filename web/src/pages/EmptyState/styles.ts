import styled from 'styled-components';

export const EmptyStateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    width: 80%;
  }

  ${({theme}) => theme.device.desktop()} {
    height: auto;

    footer {
      justify-content: center;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  ${({theme}) => theme.device.desktop()} {
    button {
      font-size: ${({theme}) => theme.font.size.medium};
    }
  }

  ${({theme}) => theme.device.mobile()} {
    svg {
      width: 100%;
    }
  }
`;

export const EmptyText = styled.h2`
  color: ${({theme}) => theme.color.darkText};
  font-weight: ${({theme}) => theme.font.weight.semiBold};
  font-size: 30px;
  text-align: center;
  line-height: 1;

  max-width: 400px;

  margin: 40px 20px 30px;
`;
