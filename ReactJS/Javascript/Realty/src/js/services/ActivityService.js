import * as h from './h';

export let filterFoundActivities = (result) => {
    let records = result.records;
    for (var i = 0; i < records.length; i++) {
        records[i].activity_id = records[i].Id;
        records[i].property_id = records[i].Property__c;
        records[i].address = records[i].Property__r.Address__c;
        records[i].contact_id = records[i].Contact__c;
        records[i].contact = records[i].Contact__r ? (records[i].Contact__r.FirstName + " " + records[i].Contact__r.LastName) : undefined;
        records[i].activity_name = records[i].ActivityType__r.Name;
        records[i].activity_date = records[i].ActivityDate__c;
        records[i].price = records[i].Price__c;
        records[i].comment = records[i].Comment__c;
    }
    return records;
}

export let filterFoundActivity = (result) => {
    let filteredResult = filterFoundActivities(result);
    if (filteredResult.length == 1) {
        return filteredResult[0];
    }
    else {
        return null;
    }
};

export let filterActivity = (activity) => {
    let filteredActivity = {};
    filteredActivity.Id = activity.activity_id;
    filteredActivity.Property__c = activity.property_id;
    filteredActivity.Contact__c = activity.contact_id;
    filteredActivity.ActivityType__c = activity.activity_name;
    filteredActivity.ActivityDate__c = activity.activity_date;
    filteredActivity.Price__c = activity.price;
    filteredActivity.Comment__c = activity.comment;
    return filteredActivity;
}

export let findAll = sort => {
    let q = "SELECT Id, Property__c, Property__r.Address__c, Contact__c, Contact__r.FirstName, Contact__r.LastName, ActivityType__r.Name, ActivityDate__c, Price__c, Comment__c FROM PropertyActivity__c " +
            "ORDER BY ActivityDate__c";
    return h.query(q);
}

export let findByName = name => {
    let q = "SELECT Id, Property__c, Property__r.Address__c, Contact__c, Contact__r.FirstName, Contact__r.LastName, ActivityType__r.Name, ActivityDate__c, Price__c, Comment__c FROM PropertyActivity__c " +
            "WHERE Name = '" + name + "'";
    return h.query(q);
}

export let findByProperty = propertyId => {
    let q = "SELECT Id, Property__c, Property__r.Address__c, Contact__c, Contact__r.FirstName, Contact__r.LastName, ActivityType__r.Name, ActivityDate__c, Price__c, Comment__c FROM PropertyActivity__c " +
            "WHERE Property__c = '" + propertyId + "'";
    return h.query(q);
}

export let findByContact = contactId => {
    let q = "SELECT Id, Property__c, Property__r.Address__c, Contact__c, Contact__r.FirstName, Contact__r.LastName, ActivityType__r.Name, ActivityDate__c, Price__c, Comment__c FROM PropertyActivity__c " +
            "WHERE Contact__c = '" + contactId + "'";
    return h.query(q);
}

export let findById = id => {
    let q = "SELECT Id, Property__c, Property__r.Address__c, Contact__c, Contact__r.FirstName, Contact__r.LastName, ActivityType__r.Name, ActivityDate__c, Price__c, Comment__c FROM PropertyActivity__c " +
            "WHERE Id = '" + id + "'";
    return h.query(q);
}

export let updateItem = activity => {
    return h.update("PropertyActivity__c", activity);
}

export let createItem = activity => {
    delete activity.Id;
    return h.create("PropertyActivity__c", activity);
}

export let deleteItem = id => {
    return h.del("PropertyActivity__c", id);
}