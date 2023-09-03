import ATM_Finding from "../Page_object_model/atm finding";    
describe('Social Media Check', function(){
    this.beforeEach(()=>{
        
        cy.visit("https://www.hsbc.co.in/");
        cy.log("enter into test case")
    })
    afterEach(()=>{
        cy.log("Completed test case")})
    it('Social Media Check',function()
       { 
        cy.xpath("//a[@class='social-image social-icon-instagram']").should("be.visible")
        cy.xpath("//a[@class='social-image social-icon-facebook']").should("be.visible")
        cy.xpath("//a[@class='social-image social-icon-twitter']").should("be.visible")
        cy.xpath("//a[@class='social-image social-icon-youtube']").should("be.visible")
       
    
    //Privacy Policy
    {
        cy.xpath("/html/body/footer/div[2]/div/div/nav/ul/li[3]/a").click({force: true})
        cy.get("h1").contains("Privacy Statement")
    }
    // HSBC LOGO
    {
        cy.xpath("/html/body/div[1]/div/header/div[4]/div/div[3]/div/div[2]/a/img").click({force: true})
        cy.title().should('eql',"HSBC India - Credit Cards, NRI Services, Saving and Deposit")
    }
    })
})
    

