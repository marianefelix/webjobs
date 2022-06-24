import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { TagContainer } from './styles';

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  children: ReactNode;
}

export const Tag = ({ selected = false, children, ...props }: TagProps) => {
  return (
    <TagContainer selected={selected} type="button" {...props}>
      {children}
    </TagContainer>
  );
};
