import React from 'react';
import styles from '../modules/CustomSelect.module.css';
import Select from 'react-select';
import OptionTypeBase from 'react-select'

interface CustomSelectProps {
    options: OptionTypeBase[];
    defaultValue?: OptionTypeBase;
    onChange: (value: OptionTypeBase) => void;
    placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, defaultValue, onChange, placeholder }) => {
    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            border: state.isFocused ? '0px' : '0px',
            borderRadius: '5px',
            boxShadow: state.isFocused ? 'none' : 'none',
            '&:hover': {
                border: '0',
            },

        }),
        menu: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: '#FFFBF5',
            borderRadius: '24px',
            padding: '8px',
            zIndex: '100',
            height: '250px'

        }),

        menuList: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: '#FFFBF5',
            borderRadius: '24px',
            padding: '8px',
            zIndex: '100',
            height: '250px'
        }),
        indicatorSeparator: (provided: any, state: any) => ({
            ...provided,
            display: 'none'

        }),
        dropdownIndicator: (provided: any, state: any) => ({
            ...provided,
            color: '#000',

        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#E8E4DE' : '#FFFBF5',
            color: state.isSelected ? 'inherit' : 'inherit',
            borderRadius: '12px',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#E8E4DE',
            },
        }),
    };

    return (
        <div className={styles.customSelect}>
            <Select
                options={options}
                defaultValue={defaultValue}
                onChange={onChange}
                styles={customStyles}
                placeholder={placeholder}
            />
        </div>
    );
};

export default CustomSelect;
