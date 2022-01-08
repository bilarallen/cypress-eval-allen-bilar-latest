export default class elementsObjects{
   
    //TEXT BOX ELEMENTS
    txtFullName(){
        return cy.xpath('//input[@id=\'userName\']')
    }

    txtEmail(){
        return cy.xpath('//input[@id=\'userEmail\']')
    }

    txtCurrentAddress(){
        return cy.xpath('//textarea[@id=\'currentAddress\']')
    }

    txtPermanentAddress(){
        return cy.xpath('//textarea[@id=\'permanentAddress\']')
    }

    btnSubmit(){
        return cy.xpath('//button[@id=\'submit\']')
    }

    lblResultName(){
        return cy.xpath('//p[@id=\'name\']')
    }

    lblResultEmail(){
        return cy.xpath('//p[@id=\'email\']')
    }

    lblResultCurrentAddress(){
        return cy.xpath('//p[@id=\'currentAddress\']')
    }

    lblResultPermanentAddress(){
        return cy.xpath('//p[@id=\'permanentAddress\']')
    }

    //CHECK BOX ELEMENTS
    cbHome(){
        return cy.xpath('//label[@for=\'tree-node-home\']')
    }

    lblCbResult(){
        return cy.xpath('//div[@id=\'result\']')
    }

    //RADIO BUTTON ELEMENTS
    rbYes(){
        return cy.xpath('//input[@id=\'yesRadio\']')
    }

    rbImpressive(){
        return cy.xpath('//input[@id=\'impressiveRadio\']')
    }

    
    lblRbResult(){
        return cy.xpath('//span[@class=\'text-success\']')
    }

    //WEB TABLES ELEMENTS
    btnAddNewRecord(){
        return cy.xpath('//button[@id=\'addNewRecordButton\']')
    }

    mdlHeader(){
        return cy.xpath('//div[@class=\'modal-header\']')
    }

    mdlHeader(){
        return cy.xpath('//div[@class=\'modal-header\']')
    }

    tblTextFirstName(){
        return cy.xpath('//input[@id=\'firstName\']')
    }

    tblTextEmail(){
        return cy.xpath('//input[@id=\'userEmail\']')
    }

    tblTextLastName(){
        return cy.xpath('//input[@id=\'lastName\']')
    }

    tblTextAge(){
        return cy.xpath('//input[@id=\'age\']')
    }

    tblTextSalary(){
        return cy.xpath('//input[@id=\'salary\']')
    }

    tblTextDepartment(){
        return cy.xpath('//input[@id=\'department\']')
    }

    tblTxtSearch(){
        return cy.xpath('//input[@id=\'searchBox\']')
    }
}