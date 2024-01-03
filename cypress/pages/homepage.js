class HomePage {

    element = {

        getQuoteButtonElement: () => cy.get('a[class= "get-quote-button"]')

    }

    getQuoteButton() {

        this.element.getQuoteButtonElement().click();

    }


}

export default HomePage;