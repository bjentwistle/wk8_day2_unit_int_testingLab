describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click(); //id = "number2"
    cy.get('.display').should('contain', '2') //class = display shows 2
  })

  it("do the number buttons update the display of the running total", () => {
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '37')
  })

  it("Do the arithmetical operations update the display with the result of the operation", () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('.display').should('contain', '20')
  })

  it("Can multiple operations be chained together", () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '13')
  })

  it("Is the output as expected for positive numbers", () => {
    cy.get("#number8").click();
    cy.get('.display').should("contain", "8")
  })

  it("Is the output as expected for negative numbers", () => {
    cy.get("#number8").click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should("contain", "-1")
  })

  it("Is the output as expected for decimals", () => {
    cy.get("#number8").click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should("contain", "1.6")
  })
  
  it("Is the output as expected for very large numbers", () => {
    cy.get("#number8").click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should("contain", "720000000")
  })

  it("should be able to to tell the user that an exceptional error has occurred", () => {
    cy.get("#number1").click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get(".display").should("contain", "Error") 
    //Would expect an error however JS returns Infinity or -Infinity if divide by zero!
    //cy.get(".display").should("contain", "Infinity")
    //This doesn't work either, Infinity is typeof number!
  })

})