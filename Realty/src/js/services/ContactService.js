import * as h from './h';

export let filterFoundContacts = (result) => {
    let records = result.records;
    for (var i = 0; i < records.length; i++) {
        records[i].contact_id = records[i].Id;
        records[i].first_name = records[i].FirstName;
        records[i].last_name = records[i].LastName;
        records[i].name = records[i].Name;
        records[i].address = records[i].Address__c;
        records[i].city = records[i].City__c;
        records[i].state = records[i].State__c;
        records[i].zip = records[i].Zip__c;
        records[i].occupation = records[i].Occupation__c;
        records[i].home_phone = records[i].HomePhone;
        records[i].mobile_phone = records[i].MobilePhone;
        records[i].email = records[i].Email;
        records[i].lead_source = records[i].LeadSource;
        records[i].category = records[i].Category__c;
        records[i].member_since = records[i].MemberSince__c;
        records[i].notes = records[i].Notes__c;
        records[i].pic = records[i].Pic__c;
    }
    return records;
}

export let filterFoundContact = (result) => {
    let filteredResult = filterFoundContacts(result);
    if (filteredResult.length == 1) {
        return filteredResult[0];
    }
    else {
        return null;
    }
};

export let filterCreateOrUpdateInput = (contact) => {
    let filteredContact = {};
    filteredContact.Id = contact.contact_id;
    filteredContact.FirstName = contact.first_name;
    filteredContact.LastName = contact.last_name;
    filteredContact.Name = contact.name;
    filteredContact.Address__c = contact.address;
    filteredContact.City__c = contact.city;
    filteredContact.State__c = contact.state;
    filteredContact.Zip__c = contact.zip;
    filteredContact.Occupation__c = contact.occupation;
    filteredContact.HomePhone = contact.home_phone;
    filteredContact.MobilePhone = contact.mobile_phone;
    filteredContact.Email = contact.email;
    filteredContact.LeadSource = contact.lead_source;
    filteredContact.Category__c = contact.category;
    filteredContact.MemberSince__c = contact.member_since;
    filteredContact.Notes__c = contact.notes;
    filteredContact.Pic__c = contact.pic;
    return filteredContact;
}

export let findAll = sort => {
    if (sort) {
        sort = sort + "__c"; // FIX THIS
    }
    else {
        sort = "FirstName";
    }
    let q = "SELECT Id, FirstName, LastName, Name, HomePhone, MobilePhone, Email FROM Contact ORDER BY " + sort;
    return h.query(q);
}

export let findByName = name => {
    let q = "SELECT Id, FirstName, LastName, Name, Address__c, City__c, State__c, Zip__c, Occupation__c, HomePhone, MobilePhone, Email, LeadSource, Category__c, MemberSince__c, Notes__c, Pic__c FROM Contact WHERE Name = '" + name + "'";
    return h.query(q);
}

export let findById = id => {
    let q = "SELECT Id, FirstName, LastName, Name, Address__c, City__c, State__c, Zip__c, Occupation__c, HomePhone, MobilePhone, Email, LeadSource, Category__c, MemberSince__c, Notes__c, Pic__c FROM Contact WHERE Id = '" + id + "'";
    return h.query(q);
}

export let updateItem = contact => {
    return h.update("Contact", contact);
}

export let createItem = contact => {
    delete contact.Id;
    return h.create("Contact", contact);
}

export let deleteItem = id => {
    return h.del("Contact", id);
}