describe('Login', () => {

    it('Login com sucesso', () => {
        //acessar aplicação
        cy.visit('https://automationpratice.com.br/')
            .get('#top_header')
        // criar os steps/ações
        //selecionar esse elemento
        //preencher um campo
        cy.get('.form-control')
            .type('teste@gmail.com')

        //click em um elemento
        cy.get('.clear .theme-btn-one.btn_md')
            .click()

        cy.get('.swal2-confirm')
            .click()

    })

})