describe('Shop page', () => {
  before(() => {
    cy.visit('/shop')
  })
  it('should have 2 categories on the main page', () => {
    cy.getByData('category-section')
      .children()
      .should('have.length', 2)
  })
  it('should include the featured section', () => {
    cy.getByData('featured-section').should(
      'exist'
    )
  })
})

export {}
