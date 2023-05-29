/// <reference types="cypress" />

describe("Testes na aplicação", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });

    it("Adicionando contatos", () => {
        //     // Adiciona um contato
        cy.get("input[type=text]").type("Monkey D. Luffy");
        cy.get("input[type=email]").type("kaizokuoni@gmail.com");
        cy.get("input[type=tel]").type("12345678901");
        cy.get("button[type=submit]").click();

        //Adiciona o contato que será alterado e apagado
        cy.get("input[type=text]").type("Marshall D. Teach");
        cy.get("input[type=email]").type("negrabarba@gmail.com");
        cy.get("input[type=tel]").type("09876543211");
        cy.get("button[type=submit]").click();
        cy.get(".sc-iAEyYk > :nth-child(6)")
            .should("be.visible")
            .should("contain.text", "Marshall D. Teach");
    });

    it("Editando contato", () => {
        cy.get(":nth-child(6) > .sc-gueYoa > .edit").click();
        cy.get("input[type=text]")
            .should("have.value", "Marshall D. Teach")
            .clear()
            .type("Barba Negra");
        cy.get(".alterar").click();
        cy.get(".sc-iAEyYk > :nth-child(6)")
            .should("be.visible")
            .should("contain.text", "Barba Negra");
    });

    it("Apagando o contato", () => {
        cy.get(":nth-child(6) > .sc-gueYoa > .delete").click();
        cy.get(".sc-iAEyYk > :nth-child(6)").should("not.exist");
    });
});
