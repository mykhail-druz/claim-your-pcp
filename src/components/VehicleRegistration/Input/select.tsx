import React from "react";
import styles from "../modules/CustomSelect.module.css";
import Select, { ActionMeta } from "react-select";
import OptionTypeBase from "react-select";

interface CustomSelectProps {
  options: any;
  defaultValue?: any;
  onChange: any;
  placeholder?: string;
  props?: any;
  padding?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = (
  props,
  { options, defaultValue, onChange, placeholder, padding }
) => {
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: state.isFocused ? "0px" : "0px",
      borderRadius: "5px",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        border: "0",
      },
      padding: padding,
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#FFFBF5",
      borderRadius: "24px",
      padding: "8px",
      zIndex: "100",
      height: "250px",
    }),

    menuList: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#FFFBF5",
      borderRadius: "24px",
      padding: "8px",
      zIndex: "100",
      height: "250px",
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: "#000",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#E8E4DE" : "#FFFBF5",
      color: state.isSelected ? "inherit" : "inherit",
      borderRadius: "12px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#E8E4DE",
      },
    }),
  };

  return (
    <div
      className={
        padding ? styles.customSelect : styles.customSelectRegistration
      }
    >
      <Select
        defaultValue={defaultValue}
        styles={customStyles}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default CustomSelect;
