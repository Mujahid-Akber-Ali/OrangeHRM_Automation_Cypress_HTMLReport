describe('template spec', () => {
  it('passes', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get(':nth-child(1) > .oxd-main-menu-item').click();
      cy.get('.orangehrm-header-container > .oxd-button').click();

      // Entering UserRole
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{downArrow}');
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{downArrow}');
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{enter}');

      // Entering Employee Name
      cy.get('.oxd-autocomplete-text-input > input').type('a');
      cy.wait(3000);
      cy.get('.oxd-autocomplete-text-input > input').type('{downArrow}');
      cy.get('.oxd-autocomplete-text-input > input').type('{downArrow}');
      cy.get('.oxd-autocomplete-text-input > input').type('{enter}');

      // Entering Password
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{downArrow}');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').type('{enter}');

      // Entering Confirm Password
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Mujahid');
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Mujahid123');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Mujahid123');
      cy.get('.oxd-button--secondary').click();

      // Searching Employee
      cy.wait(6000);
      cy.get(':nth-child(2) > .oxd-input').type('Mujahid');
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });

      cy.get('.oxd-table-cell-actions > :nth-child(2)').click();
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
      cy.get(':nth-child(2) > .oxd-input').type('Mujahid Akber Ali');
      cy.get('.oxd-form-actions > .oxd-button--secondary').click();



      // To Delete Employee
      cy.wait(6000);
      cy.get(':nth-child(2) > .oxd-input').type('Mujahid Akber Ali');
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });
      cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
      cy.get('.oxd-button--label-danger').click();

  })
})