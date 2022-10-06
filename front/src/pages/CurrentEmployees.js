import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const CurrentEmployees = () => {
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
  ];

  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
    },
  ];

  // make search input for first name and last name

  return (
    <section className="current-employee">
      <DataTable columns={columns} data={data} pagination />
    </section>
  );
};

export default CurrentEmployees;
