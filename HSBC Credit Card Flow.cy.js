import creditcard from "../Page_object_model/credit_Card";
describe("Credit card banking functionality",function(){
    this.beforeEach(()=>{
        cy.log("enter into test case")
    })
    afterEach(()=>{
        cy.log("Completed test case")})
    it("credit card validation",function(){
const ln=new creditcard();
ln.visit()
ln.banking()
ln.creditcard()
ln.comparecards()
ln.compare_Creditcard()
ln.comparsion_button()
ln.validating_selected_Cards()
ln.validating_remove_cards_inComparing()
ln.Addcard()
ln.validating_selected_Cards_new()
ln.validating_remove_Cards_new()
ln.remove_card()
 })
})
