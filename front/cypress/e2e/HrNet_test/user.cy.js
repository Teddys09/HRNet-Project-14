describe('HRNet', () => {
  it('user can add a new employee and see it in the list', () => {
    cy.visit('http://localhost:3000/');
    // click on the add employee button
    cy.findByRole('link', { name: /add new employee/i }).click();
    // fill all inputs in the form
    cy.findByRole('textbox', { name: /first name/i }).type('John');
    cy.findByRole('textbox', { name: /last name/i }).type('Doe');
    cy.findByLabelText(/date of birth/i).type('1990-01-01');
    cy.findByLabelText(/start date/i).type('2022-01-01');
    cy.findByRole('textbox', { name: /street/i }).type('123 Main St');
    cy.findByRole('textbox', { name: /city/i }).type('New York');
    cy.findByRole('combobox', { name: /state/i }).select('Florida');
    cy.findByRole('textbox', { name: /zip/i }).type('12345');
    cy.findByRole('combobox', { name: /department/i }).select('Engineering');

    // click on the submit button
    cy.findByRole('button', { name: /save/i }).click();
    // click on the home button
    cy.findByRole('link', { name: /home/i }).click();
    // click on current employee
    cy.findByRole('link', { name: /current employees/i }).click();
    // check if the new employee is in the list
    cy.findByText(/john/i);
    // click on the home button
    cy.findByRole('link', { name: /home/i }).click();
  });
});
