import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterEmployee } from '../utils/store';

const SearchBar = () => {
  const employee = useSelector((state) => state.employees.employee);
  console.log(employee);
  const dispatch = useDispatch();

  function handleInput(e) {
    console.log(e.target.value);
    if (e.target.value.length >= 2) {
      const filteredEmployee = employee.filter(
        (employee) =>
          employee.firstName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(filteredEmployee);
      if (filteredEmployee.length > 0) {
        dispatch(filterEmployee(filteredEmployee));
      }
    } else {
      dispatch(filterEmployee([]));
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Employee"
        onInput={(e) => handleInput(e)}
      />
    </div>
  );
};

export default SearchBar;
