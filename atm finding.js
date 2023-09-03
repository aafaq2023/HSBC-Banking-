class ATM_Finding{
    ATM_LINK(){
        cy.xpath("//*[@id='sidebar']/div/div[3]/ul[1]/li[2]/div/h2").should('have.text','Find a branch or ATM')
            cy.xpath("/html/body/footer/div[1]/div/div/nav/ul/li[2]/a").click()
            cy.url().should("contains","/ways-to-bank/branches/")
            cy.get("h1").contains("Branches & ATMs")   
    }
    ATM_Locator(){
        cy.get("h1").contains("Branches & ATMs")   
        cy.xpath("//a[@class='A-BTNP-RW-ALL']").click()
        cy.xpath("//input[@id='searchInput']").should('be.visible').type("India").type("{enter}")
       
        cy.wait(4000)
        cy.get("h2[class='_1521gYSzrNIMk9R-rS4Hur']").contains("Rajbhavan Road")
        cy.xpath("//button[@aria-label='Show more results']").click()
        cy.xpath("/html/body/main/div[2]/div/div[2]/div/div/div[1]/div/ul/li[2]/button/p[1]/span/span").should("have.text",'2')  
    }
    Social_Media_check(){
        cy.xpath("//a[@class='social-image social-icon-instagram']").should("be.visible")
        cy.xpath("//a[@class='social-image social-icon-facebook']").should("be.visible")
        cy.xpath("//a[@class='social-image social-icon-twitter']").should("be.visible")
        cy.xpath("//a[@class='social-image social-icon-youtube']").should("be.visible")
    }
    HSBC_Logo(){
        cy.xpath("/html/body/div[1]/div/header/div[4]/div/div[3]/div/div[2]/a/img").click({force: true})
        cy.title().should('eql',"HSBC India - Credit Cards, NRI Services, Saving and Deposit")
    }
    Privacy_open(){
        cy.xpath("/html/body/footer/div[2]/div/div/nav/ul/li[3]/a").click({force: true})
        cy.get("h1").contains("Privacy Statement")
    }
    }
    export default ATM_Finding;
    