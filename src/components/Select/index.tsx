import { ReactNode } from 'react';
import ReactSelect, { StylesConfig } from 'react-select';

export interface Option {
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange?: any;
  placeholder: ReactNode;
  isMulti?: boolean;
}

export const Select = ({
  options,
  onChange,
  placeholder,
  isMulti = false,
}: SelectProps) => {
  return (
    <ReactSelect
      getOptionLabel={(option) => option.value}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      isMulti={isMulti}
    />
  );
};
