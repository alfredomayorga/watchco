describe('Test layout', () => {
  before(() => {
    cy.visit('/')
  })
  it('has a content container', () => {
    cy.getByData('content-container').should(
      'exist'
    )
  })
  it('should have a top bar', () => {
    cy.getByData('content-top-bar').should(
      'exist'
    )
  })
  it('should have a footter', () => {
    cy.getByData('content-footer').should('exist')
  })
  it('has the company logo', () => {
    cy.getByData('company-logo').should('exist')
  })
  it('should have a user avatar', () => {
    cy.getByData('user-avatar').should('exist')
  })
  it('should have a navigation menu', () => {
    cy.getByData('navigation').should('exist')
  })
  it('needs to have a link to the home page', () => {
    cy.getByData('home-link').should(
      'have.attr',
      'href',
      '/'
    )
  })
  it('needs to have a link to the shop page', () => {
    cy.getByData('shop-link').should(
      'have.attr',
      'href',
      '/shop'
    )
  })
  it('should have a button to view cart', () => {
    cy.getByData('view-cart')
  })
})

export {}
