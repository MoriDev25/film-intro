import React from "react";
import { SelectOptionWrapper } from "./style";

const SelectOption = ({
  name,
  options,
  value,
  onChange,
  className
}) => {
  return (
    <SelectOptionWrapper>
      <select
        name={name}
        value={value}
        options={options}
        onChange={onChange}
        className={className}
      >
        {options.map((item, index, array) => (
          <option value={item.title} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </SelectOptionWrapper>
  );
};

export default SelectOption;
