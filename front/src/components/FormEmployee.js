import React from 'react';
import { State } from '../utils/state';
import { useDispatch, useSelector } from 'react-redux';
import { addFirstName } from '../utils/store';

const FormEmployee = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.newEmployee.firstName);
  console.log(firstName);
  function handleSubmit(e) {
    e.preventDefault();

    console.log(e.target);

    console.log(e.target.firstName.value);

    dispatch(addFirstName(e.target.firstName.value));
  }

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

      <div className="address-group">
        <p className="address">Address</p>
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
          <select className="form-control" id="state">
            {State.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input type="text" name="zip" id="zip" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <select className="form-control" id="department">
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Ressources">Human Ressources</option>
          <option value="Legal">Legal</option>
        </select>
      </div>
      <input type="submit" className="save-button" value="Save" />
    </form>
  );
};

export default FormEmployee;
