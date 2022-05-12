import styled from 'styled-components';

export const Box = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 15px 35px;

  background-color: ${({ theme }) => theme.color.lightCard};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius.filterBox};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  list-style-type: none;
`;

export const Item = styled.li``;

export const ClearButton = styled.button`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  text-decoration: underline;
  text-decoration-color: transparent;

  background-color: transparent;
  transition: all 0.3s;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.color.primary};
  }
`;
