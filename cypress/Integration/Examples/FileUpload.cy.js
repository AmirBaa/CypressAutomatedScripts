/// <reference types ="cypress" />
import 'cypress-file-upload';
describe('Upload testing', () => {
  it('tests single file upload', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile('witcher.jpeg')
    cy.get('#file-submit').click()
    cy.wait(5000)
    cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')

  })
  /*it ('tests renaming file', () => {
   cy.visit('https://the-internet.herokuapp.com/upload')
   cy.get('#file-upload').attachFile({filepath: 'witcher.jpeg', fileName:'witcherNewName'}) 
   cy.get('#file-submit').click()
   cy.wait(5000)
   cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')
 }) */
  it('uploads with Drag and drop', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#drag-drop-upload').attachFile('witcher.jpeg', { subjectType: 'drag-n-drop' })
    cy.wait(5000)
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').
      contains('witcher.jpeg')
    cy.get('#file-submit').click()
    cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')
  })
  it('uploads multiple Files', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#drag-drop-upload').attachFile(['witcher.jpeg', 'witcher2.jpeg', 'witcher3.jpeg'])
    cy.wait(5000)
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').
      contains('witcher.jpeg')
    cy.get('#file-submit').click()
    cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')
  })
  it('Uploads file with Shadow dom', () => {
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
    cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile('witcher.jpeg')
    cy.wait(4000)
    cy.get('.smart-item-name', { includeShadowDom: true }).contains('witcher.jpeg')
    cy.get('.smart-upload-all-button', { includeShadowDom: true }).click()
  })
})