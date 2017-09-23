global with sharing class ApexController {

    public String accountName {get; set;}
    
    public static Account account {get; set;}
    
    public ApexController() {}
    
    @RemoteAction
    global static Account getAccount(String accountName) {
        account = [SELECT Id, Name, Phone, Type, NumberOfEmployees FROM Account WHERE Name = :accountName];
        return account;
    }
}