import styled from 'styled-components';

interface FlexProps {
  gap?: string;
  color?: string;
}

export const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.dark};

  transition: color 0.3s;

  cursor: pointer;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.color.lightCard};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: ${({ theme }) => theme.boxShadow};

  padding: 20px 35px;

  width: 80%;
  min-height: 130px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-left: 5px solid transparent;
  transition: border-left 0.3s;

  &:hover {
    border-left: 5px solid ${({ theme }) => theme.color.primary};
  }

  &:hover ${JobTitle} {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const CompanyImage = styled.img``;

export const JobDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CompanyName = styled.span`
  color: ${({ theme }) => theme.color.primary};

  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding-right: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style-type: none;
`;

export const Item = styled.li``;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : '10px')};
  color: ${({ color, theme }) => (color ? color : theme.color.text)};
`;
