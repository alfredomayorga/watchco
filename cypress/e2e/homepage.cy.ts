describe('Home Page', () => {
  before(() => {
    cy.visit('/')
  })

  it('should have a hero image', () => {
    cy.getByData('hero-image').should('exist')
  })
  it('shows the text intro', () => {
    cy.getByData('hero-text').should('exist')
  })
  it('should have a features section', () => {
    cy.getByData('featured-section').should(
      'exist'
    )
  })
  it('needs to have 3 featured watches', () => {
    cy.getByData('feature-section')
      .children()
      .should('have.length', 3)
  })
  it('needs to have a mens section', () => {
    cy.getByData('mens-section').should('exist')
  })

  it('needs to have a womens section', () => {
    cy.getByData('womens-section')
  })
})

export {}
