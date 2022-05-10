import styled from 'styled-components';

export const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  transition: color 0.3s;

  cursor: pointer;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.color.lightCard};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: ${({ theme }) => theme.boxShadow};

  padding: 20px 40px;

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
`;

export const CompanyName = styled.span`
  color: ${({ theme }) => theme.color.primary};

  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Tags = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;
