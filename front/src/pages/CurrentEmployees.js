import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';

const CurrentEmployees = () => {
  const employee = useSelector((state) => state.employees.employee);
  const filteredEmployee = useSelector(
    (state) => state.employees.filteredEmployee
  );
  console.log(filteredEmployee);
  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.adress.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.adress.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.adress.state,
      sortable: true,
    },
    {
      name: 'Zip',
      selector: (row) => row.adress.zip,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
  ];

  return (
    <section className="current-employee">
      <SearchBar />
      <DataTable
        columns={columns}
        data={filteredEmployee.length > 0 ? filteredEmployee : employee}
        pagination
      />
    </section>
  );
};

export default CurrentEmployees;
