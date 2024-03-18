//your code here
it('should have audio element with src attribute', () => {
  cy.visit('your_page_with_audio.html');

  // Use cy.get() to wait for the audio element to be present
  cy.get('audio').should('have.attr', 'src');
});
