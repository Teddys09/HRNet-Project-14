import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-section">
      <Link to="/employees">Current Employees</Link>
      <Link to="/createEmployee">Add New Employee</Link>
    </section>
  );
};

export default Home;
