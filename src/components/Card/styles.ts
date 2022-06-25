import styled from 'styled-components';

interface FlexProps {
  gap?: string;
  color?: string;
}

export const JobTitle = styled.a`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;

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
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-left: 5px solid transparent;
  transition: border-left 0.3s;

  &:hover,
  &:focus {
    border-left: 5px solid ${({ theme }) => theme.color.primary};
    outline: none;
  }

  &:hover ${JobTitle}, &:focus ${JobTitle} {
    color: ${({ theme }) => theme.color.primary};
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    padding: 30px 20px 20px;
  }
`;

export const CompanyImage = styled.img`
  @media screen and (max-width: 576px) {
    position: absolute;
    width: 48px;
    top: -24px;
  }
`;

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

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const Item = styled.li``;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : '10px')};
  color: ${({ color, theme }) => (color ? color : theme.color.text)};

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const Divider = styled.hr`
  @media screen and (min-width: 992px) {
    display: none;
  }
  width: 100%;
  margin: 16px;
  border-width: 1px 0px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
`;
