import * as h from './h';

export let filterFoundActivityTypes = (result) => {
    let records = result.records;
    for (var i = 0; i < records.length; i++) {
        records[i].activity_type_id = records[i].Id;
        records[i].name = records[i].Name;
    }
    return records;
}

export let findAll = sort => {
    let q = "SELECT Id, Name FROM PropertyActivityType__c ";
    return h.query(q);
}