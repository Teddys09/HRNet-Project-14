import React from 'react';

const SelectMenu = (data) => {
  return (
    <select name={data.name} id={data.id}>
      {data.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectMenu;
