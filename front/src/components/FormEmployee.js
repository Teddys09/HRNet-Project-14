import React from 'react';
import { State } from '../utils/state';
import { Department } from '../utils/department';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../utils/store';
//import SelectMenu from './SelectMenu';
//import SelectMenu from 'select_menu_teddystrumilo_oc/SelectMenu';
import SelectMenu from 'select_menu_strumilo_oc/build/index';

const FormEmployee = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.employees.employee);
  // console.log(firstName);
  // console.log(firstName);
  function handleSubmit(e) {
    e.preventDefault();
    let employeeAlreadyExists = false;

    const formValues = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      dateOfBirth: e.target.dateOfBirth.value,
      startDate: e.target.startDate.value,
      adress: {
        street: e.target.street.value,
        city: e.target.city.value,
        state: e.target.state.value,
        zip: e.target.zip.value,
      },
      department: e.target.department.value,
    };
    firstName.forEach((element) => {
      console.log(element);
      if (
        element.firstName === formValues.firstName &&
        element.lastName === formValues.lastName &&
        element.dateOfBirth === formValues.dateOfBirth
      ) {
        alert('This employee already exists');
        employeeAlreadyExists = true;
      }
    });
    if (!employeeAlreadyExists) {
      dispatch(addEmployee(formValues));
      alert('Employee added');
    }
  }

  const state = {
    name: 'state',
    id: 'state',
    options: State,
  };
  const department = {
    name: 'department',
    id: 'department',
    options: Department,
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => handleSubmit(e)}
      className="form-createEmployee"
    >
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" name="dateOfBirth" id="dateOfBirth" />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input type="date" name="startDate" id="startDate" />
      </div>
      <div className="wrapper-address">
        <p className="address">Address</p>
        <div className="address-group">
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="street" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <SelectMenu {...state} />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input type="text" name="zip" id="zip" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <SelectMenu {...department} />
      </div>
      <input type="submit" className="save-button" value="Save" />
    </form>
  );
};

export default FormEmployee;
