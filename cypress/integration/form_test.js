//tests
describe('Tests', () => {
    beforeEach(() => {
        // Each test needs fresh state!
        // Never rely on state left over from previous tests
        // Every test should work in isolation (MUST)
        cy.visit('http://localhost:3000')
    })

    //Helpers to grab elements
    const fname = () => cy.get('input[name=fname]');
    const lname = () => cy.get('input[name=lname]');
    const email = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name=password]');
    const terms = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    it('sanity check to make sure tests work', () => {
        // 'it' is a test
        // expect is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5); // Strict equality ===
        expect({}).not.to.equal({}); // Strict equality {} !== {}
        expect({}).to.eql({}); // not strict ==
    })

    it('the proper elements are showing', () => {
        fname().should('exist');
        lname().should('exist');
        email().should('exist');
        password().should('exist');
        terms().should('exist')
        submitBtn().should('exist');
    })

    describe('Passing values', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('can type in the input', () => {
            fname()
                .should('have.value', '')
                .type('Darrion')
                .should('have.value', 'Darrion')

            lname()
                .should('have.value', '')
                .type('White')
                .should('have.value', 'White')

            email()
                .should('have.value', '')
                .type('Hello@hello.com')
                .should('have.value', 'Hello@hello.com')

            password()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')

            terms()
                .should('have.value', 'false')
                .check()
                .should('have.value', 'true')
        })

        it('the submit button enables when inputs are filled out', () => {
            fname().type('Darrion');
            lname().type('White');
            email().type('email@email.com');
            password().type('Password')
            submitBtn().should('not.be.disabled');
        })

        it('can submit and delete data', () => {
            fname().type('Darrion');
            lname().type('White');
            email().type('email@email.com');
            password().type('Password');
            submitBtn().click();
        })
    })
})