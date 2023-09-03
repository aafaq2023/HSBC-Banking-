import ATM_Finding from "../Page_object_model/atm finding";
describe('HSBC ATM Search Test Scenario', function(){
    this.beforeEach(()=>{
        
        cy.visit("https://www.hsbc.co.in/");
        cy.log("enter into test case")
    })
    afterEach(()=>{
        cy.log("Completed test case")})
    it('Find a branch or ATM',function()
    //Find a Branch or ATM:
    {
        {
            cy.xpath("//*[@id='sidebar']/div/div[3]/ul[1]/li[2]/div/h2").should('have.text','Find a branch or ATM')
                cy.xpath("/html/body/footer/div[1]/div/div/nav/ul/li[2]/a").click()
                cy.url().should("contains","/ways-to-bank/branches/")
                cy.get("h1").contains("Branches & ATMs")   
        }
        //Branch Finder
      {
        cy.get("h1").contains("Branches & ATMs")   
        cy.xpath("//a[@class='A-BTNP-RW-ALL']").click()
       
      }
{
    cy.wait(4000)

        cy.xpath("//input[@id='searchInput']").should('be.visible').type("Rajbhavan Road").type("{enter}")
        cy.get("h2[class='_1521gYSzrNIMk9R-rS4Hur']").contains("Rajbhavan Road Branch")
    
}

})  
})  

       
