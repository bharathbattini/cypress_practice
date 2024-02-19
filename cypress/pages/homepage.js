class HomePage {

    element = {
        getHeadingofHomePage: () => cy.get('.lqd-highlight-txt'),
        getQuoteButtonElement: () => cy.get('a > span[data-text="Get Quote"]'),
        getReadMoreButtonElement: () => cy.get('span[data-text="Read More"]'),

    }

    headings = {

        aboutUs: 'ABOUT US ATRINA',
        aboutUsSubHeading: ' Center of Excellence for Business Transformation',

    }
}

export default HomePage;