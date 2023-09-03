import HSBC_Logo from "../Page_object_model/hsbc login"
describe("validating functionalities of banking application",()=>{
    beforeEach(()=>{
cy.log("Enter into test case")
    })
  afterEach(()=>{
    cy.log("Completed test case")
  })   
it("HSBC Login Test Scenario",()=>{
const ln= new HSBC_Logo
ln.visit()
ln.log_url_check()
ln.logon_validation()
ln.continue_button_validation()
ln.rememberme_checkbox()
ln.username_popup()
    }) 
})
