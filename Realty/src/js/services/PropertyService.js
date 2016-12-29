import * as h from './h';

export let filterFoundProperties = (result) => {
    let records = result.records;
    for (var i = 0; i < records.length; i++) {
        records[i].property_id = records[i].Id;
        records[i].address = records[i].Address__c;
        records[i].city = records[i].City__c;
        records[i].state = records[i].State__c;
        records[i].zip = records[i].Zip__c;
        records[i].bedrooms = records[i].Bedrooms__c;
        records[i].bathrooms = records[i].Bathrooms__c;
        records[i].price = records[i].Price__c;
        records[i].pic = records[i].Pic__c;
        records[i].teaser = records[i].Teaser__c;
        records[i].size = records[i].Size__c;
        records[i].lot_size = records[i].LotSize__c;
        records[i].description = records[i].Description__c;
    }
    return records;
}

export let filterFoundProperty = (result) => {
    let filteredResult = filterFoundProperties(result);
    if (filteredResult.length == 1) {
        return filteredResult[0];
    }
    else {
        return null;
    }
};

export let filterProperty = (property) => {
    let filteredProperty = {};
    filteredProperty.Id = property.property_id;
    filteredProperty.Address__c = property.address;
    filteredProperty.City__c = property.city;
    filteredProperty.State__c = property.state;
    filteredProperty.Zip__c = property.zip;
    filteredProperty.City__c = property.city;
    filteredProperty.Bedrooms__c = property.bedrooms;
    filteredProperty.Bathrooms__c = property.bathrooms;
    filteredProperty.Price__c = property.price;
    filteredProperty.Pic__c = property.pic;
    filteredProperty.Teaser__c = property.teaser;
    filteredProperty.Size__c = property.size;
    filteredProperty.LotSize__c = property.lot_size;
    filteredProperty.Description__c = property.description;
    return filteredProperty;
}

export let findAll = sort => {
    if (sort === "property_id") {
        sort = "Id";
    }
    else if (sort) {
        sort = sort + "__c"; // FIX THIS
    }
    let q = "SELECT Id, Address__c, City__c, State__c, Zip__c, Bedrooms__c, Bathrooms__c, Price__c, Pic__c, Teaser__c, Size__c, LotSize__c, Description__c FROM Property__c";
    if (sort) {
        q = q + " ORDER BY " + sort
    }
    return h.query(q);
};

export let findByName = name => {
    let q = "SELECT Id, Address__c, City__c, State__c, Zip__c, Bedrooms__c, Bathrooms__c, Price__c, Pic__c, Teaser__c, Size__c, LotSize__c, Description__c FROM Property__c WHERE Name = '" + name + "'";
    return h.query(q);
};

export let findByBroker = brokerId => {
    let q = "SELECT Id, Address__c, City__c, State__c, Zip__c, Bedrooms__c, Bathrooms__c, Price__c, Pic__c, Teaser__c, Size__c, LotSize__c, Description__c FROM Property__c " +
            "WHERE Id IN " +
            "(SELECT Property__c FROM PropertyBroker__c WHERE Broker__c = '" + brokerId + "') "
            "ORDER BY Address__c";
    return h.query(q);
};

export let findById = id => {
    let q = "SELECT Id, Address__c, City__c, State__c, Zip__c, Bedrooms__c, Bathrooms__c, Price__c, Pic__c, Teaser__c, Size__c, LotSize__c, Description__c FROM Property__c WHERE Id = '" + id + "'";
    return h.query(q);
};

export let updateItem = property => {
    return h.update("Property__c", property);
}

export let createItem = property => {
    delete property.Id;
    return h.create("Property__c", property);
}

export let deleteItem = id => {
    return h.del("Property__c", id);
}