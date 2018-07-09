describe('Lord of the Ripsum', () =>{
  it('displays correctly', () => {
    cy.visit('/')
    cy.get('a').click()
    cy.url().should('contain', '/generator')
    cy.get('input').type('6')
    cy.get('.ui.blue.button.Button').should('contain', 'Book').click()
    cy.get('.Blippo').should('contain', '')
  })
})