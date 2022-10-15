describe("Dado que acesso a página da VR", () => {
  context("Quando clico em Para Você e Onde usar meu cartão VR?", () => {
    it("Então devo visualizar o mapa", () => {
      cy.visit("/");
      cy.get('a[href="/onde-aceita.htm"]').click();
      cy.get('a[href="#rede-credenciada"]:first').click();
      cy.get('div[id="rede-credenciada"]').should("be.visible");
    });
  });
});
