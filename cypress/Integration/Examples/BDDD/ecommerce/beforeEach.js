beforeEach(() => {
    cy.fixture('example').then((data) => { //it takes data using fixture from fixture folder and then json script
        testData = data  //SO data can be accessed in whole script
    })
})