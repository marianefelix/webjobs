import { ReactNode, useContext } from 'react';
import ReactSelect, { StylesConfig } from 'react-select';
import { ThemeContext } from 'styled-components';

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
  const { color, font, borderRadius } = useContext(ThemeContext);

  const styles: StylesConfig<Option> = {
    control: (styles) => ({
      ...styles,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '7px 15px',
      borderColor: 'white',
      ':focus': {
        borderColor: color.primary,
      },
      cursor: 'pointer',
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      fontSize: font.size.medium,
      fontWeight: font.weight.medium,
      color: isSelected ? 'white' : color.darkText,
      paddingLeft: '25px',
      cursor: 'pointer',
    }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: font.size.medium,
      fontWeight: font.weight.medium,
      color: color.text,
    }),
    input: (styles) => ({
      ...styles,
      fontSize: font.size.medium,
      fontWeight: font.weight.medium,
      color: color.darkText,
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: font.size.medium,
      fontWeight: font.weight.medium,
      color: color.darkText,
    }),
    multiValue: (styles) => ({
      ...styles,
      background: color.lightTag,
      borderRadius: borderRadius.tag,
      margin: '2px 4px',
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      fontSize: font.size.small,
      fontWeight: font.weight.bold,
      color: color.primary,
      padding: '4px 10px',
      paddingLeft: '10px',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      padding: '4px',
      background: color.primary,
      borderRadius: `0px ${borderRadius.tag} ${borderRadius.tag} 0px`,
      color: color.lightTag,
      ':hover': {
        backgroundColor: color.dark,
        color: color.lightTag,
      },
    }),
  };

  return (
    <ReactSelect
      getOptionLabel={(option) => option.value}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      isMulti={isMulti}
      closeMenuOnSelect={!isMulti}
      styles={styles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary25: color.lightTag,
          primary50: color.lightTag,
          primary: color.primary,
        },
      })}
    />
  );
};
