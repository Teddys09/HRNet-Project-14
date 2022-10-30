import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-section">
      <Link to="/employees" data-test="link-employee">
        Current Employees
      </Link>
      <Link to="/createEmployee" data-test="link-create-employee">
        Add New Employee
      </Link>
    </section>
  );
};

export default Home;
