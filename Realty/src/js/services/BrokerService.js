import * as h from './h';

export let filterFoundBrokers = (result) => {
    let records = result.records;
    for (var i = 0; i < records.length; i++) {
        records[i].broker_id = records[i].Id;
        records[i].first_name = records[i].FirstName__c;
        records[i].last_name = records[i].LastName__c;
        records[i].name = records[i].Name;
        records[i].title = records[i].Title__c;
        records[i].office_phone = records[i].OfficePhone__c;
        records[i].mobile_phone = records[i].MobilePhone__c;
        records[i].email = records[i].Email__c;
    }
    return records;
}

export let filterFoundBroker = (result) => {
    let filteredResult = filterFoundBrokers(result);
    if (filteredResult.length == 1) {
        return filteredResult[0];
    }
    else {
        return null;
    }
};

export let filterBroker = (broker) => {
    let filteredBroker = {};
    filteredBroker.Id = broker.broker_id;
    filteredBroker.FirstName__c = broker.first_name;
    filteredBroker.LastName__c = broker.last_name;
    filteredBroker.Name = broker.name;
    filteredBroker.Title__c = broker.title;
    filteredBroker.OfficePhone__c = broker.office_phone;
    filteredBroker.MobilePhone__c = broker.mobile_phone;
    filteredBroker.Email__c = broker.email;
    return filteredBroker;
}

export let findAll = sort => {
    if (sort === "broker_id") {
        sort = "Id";
    }
    else if (sort) {
        sort = sort + "__c"; // FIX THIS
    }
    let q = "SELECT Id, FirstName__c, LastName__c, Name, Title__c, OfficePhone__c, MobilePhone__c, Email__c FROM Broker__c";
    if (sort) {
        q = q + " ORDER BY " + sort
    }
    return h.query(q);
}

export let findByProperty = propertyId => {
    let q = "SELECT Id, FirstName__c, LastName__c, Name, Title__c, OfficePhone__c, MobilePhone__c, Email__c FROM Broker__c " +
            "WHERE Id IN " +
            "(SELECT Broker__c FROM PropertyBroker__c WHERE Property__c = '" + propertyId + "') " +
            "ORDER BY LastName__c";
    return h.query(q);
}

export let findByName = name => {
    let q = "SELECT Id, FirstName__c, LastName__c, Name, Title__c, OfficePhone__c, MobilePhone__c, Email__c FROM Broker__c WHERE Name = '" + name + "'";
    return h.query(q);
}

export let findById = id => {
    let q = "SELECT Id, FirstName__c, LastName__c, Name, Title__c, OfficePhone__c, MobilePhone__c, Email__c FROM Broker__c WHERE Id = '" + id + "'";
    return h.query(q);
}

export let updateItem = broker => {
    return h.update("Broker__c", broker);
}

export let createItem = broker => {
    delete broker.Id;
    return h.create("Broker__c", broker);
}

export let deleteItem = id => {
    return h.del("Broker__c", id);
}