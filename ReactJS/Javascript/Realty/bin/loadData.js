var jsforce = require("jsforce");
var path = require("path");
var fs = require("fs");
var commander = require("commander");

function loadContacts(conn) {
    conn.sobject("Contact").upsert([
        {
            "ExternalId__c": 1,
            "FirstName": "Tanya",
            "LastName": "Sharma",
            "Address__c": "18 Henry st",
            "City__c": "Cambridge",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Medical Doctor",
            "MobilePhone": "617-985-6955",
            "HomePhone": "617-666-5555",
            "Email": "tsharma@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/tanya_sharma.jpg"
        },
        {
            "ExternalId__c": 2,
            "FirstName": "Miriam",
            "LastName": "Aupont",
            "Address__c": "56 Broad st",
            "City__c": "Cambridge",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Software Engineer",
            "MobilePhone": "617-123-4567",
            "HomePhone": "617-987-6543",
            "Email": "maupont@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
        },
        {
            "ExternalId__c": 3,
            "FirstName": "Jonathan",
            "LastName": "Bradley",
            "Address__c": "52 Elm st",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Architect",
            "MobilePhone": "617-123-4567",
            "HomePhone": "617-987-6543",
            "Email": "jbradley@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
        },
        {
            "ExternalId__c": 4,
            "FirstName": "Anup",
            "LastName": "Gupta",
            "Address__c": "101 Massachusetts Avenue",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Software Engineer",
            "MobilePhone": "617-123-4567",
            "HomePhone": "617-987-6543",
            "Email": "agupta@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
        },
        {
            "ExternalId__c": 5,
            "FirstName": "Kenneth",
            "LastName": "Sato",
            "Address__c": "3 Oak st",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Software Engineer",
            "MobilePhone": "617-123-4567",
            "HomePhone": "617-987-6543",
            "Email": "ksato@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/kenneth_sato.jpg"
        },
        {
            "ExternalId__c": 6,
            "FirstName": "James",
            "LastName": "Kennedy",
            "Address__c": "56 Chestnut st",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Software Engineer",
            "MobilePhone": "617-123-4567",
            "HomePhone": "617-987-6543",
            "Email": "jkennedy@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/james_kennedy.jpg"
        },
        {
            "ExternalId__c": 7,
            "FirstName": "Amy",
            "LastName": "Taylor",
            "Address__c": "24 Belmont st",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Software Engineer",
            "MobilePhone": "617-123-4567",
            "HomePhone": "617-987-6543",
            "Email": "ataylor@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
        },
        {
            "ExternalId__c": 8,
            "FirstName": "Olivia",
            "LastName": "Green",
            "Address__c": "85 Boylston st",
            "City__c": "Cambridge",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Software Engineer",
            "MobilePhone": "617-123-4567",
            "HomePhone": "617-987-6543",
            "Email": "ogreen@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        },
        {
            "ExternalId__c": 9,
            "FirstName": "Michael",
            "LastName": "Jones",
            "Address__c": "184 Gloucester st",
            "City__c": "Cambridge",
            "State__c": "MA",
            "Zip__c": "01742",
            "Occupation__c": "Medical Doctor",
            "MobilePhone": "617-985-6955",
            "HomePhone": "617-666-5555",
            "Email": "mjones@fakemail.com",
            "LeadSource": "Open House",
            "Category__c": "Buyer",
            "Notes__c": "Lorem Ipsum",
            "MemberSince__c": "2015-01-15",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        }
    ],
    "ExternalId__c",
    function(err, rets) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Upserted " + rets.length + " Contact records successfully");
        }
    });
}

function loadBrokers(conn) {
    conn.sobject("Broker__c").upsert([
        {
            "ExternalId__c": 1,
            "FirstName__c": "Caroline",
            "LastName__c": "Kingsley",
            "Title__c": "Senior Broker",
            "Address__c": "1 Federal street",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "02180",
            "MobilePhone__c": "617-985-6955",
            "OfficePhone__c": "617-666-5555",
            "Email__c": "caroline@lightningrealty.com",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        },
        {
            "ExternalId__c": 2,
            "FirstName__c": "Brad",
            "LastName__c": "Moretti",
            "Title__c": "Senior Broker",
            "Address__c": "1 Federal street",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "02180",
            "MobilePhone__c": "617-985-6955",
            "OfficePhone__c": "617-666-5555",
            "Email__c": "brad@lightningrealty.com",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/brad_moretti.jpg"
        }
    ],
    "ExternalId__c",
    function(err, rets) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Upserted " + rets.length + " Broker records successfully");
        }
    });
}

function loadPropertyActivityTypes(conn) {
    conn.sobject("PropertyActivityType__c").upsert([
        {
            "ExternalId__c": 1,
            "Name": "Listed"
        },
        {
            "ExternalId__c": 2,
            "Name": "Open House"
        },
        {
            "ExternalId__c": 3,
            "Name": "Inquiry"
        },
        {
            "ExternalId__c": 4,
            "Name": "Price Reduction"
        },
        {
            "ExternalId__c": 5,
            "Name": "Offer"
        }
    ],
    "ExternalId__c",
    function(err, rets) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Upserted " + rets.length + " PropertyActivityType records successfully");
        }
    });
}

function loadProperties(conn) {
    conn.sobject("Property__c").upsert([
        {
            "ExternalId__c": 1,
            "Address__c": "18 Henry st",
            "City__c": "Cambridge",
            "State__c": "MA",
            "Zip__c": "01742",
            "Price__c": "975000",
            "Teaser__c": "Stunning Victorian",
            "Bedrooms__c": "4",
            "Bathrooms__c": "3",
            "Size__c": "3800",
            "LotSize__c": "7",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 2,
            "Address__c": "24 Pearl st",
            "City__c": "Cambridge",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "1200000",
            "Teaser__c": "Ultimate Sophistication",
            "Bedrooms__c": "5",
            "Bathrooms__c": "4",
            "Size__c": "4000",
            "LotSize__c": "8",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 3,
            "Address__c": "72 Francis st",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "825000",
            "Teaser__c": "Modern City Living",
            "Bedrooms__c": "5",
            "Bathrooms__c": "4",
            "Size__c": "4000",
            "LotSize__c": "8",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 4,
            "Address__c": "32 Prince st",
            "City__c": "Cambridge",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "930000",
            "Teaser__c": "Stunning Colonial",
            "Bedrooms__c": "5",
            "Bathrooms__c": "4",
            "Size__c": "4000",
            "LotSize__c": "8",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 5,
            "Address__c": "110 Baxter street",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "850000",
            "Teaser__c": "Waterfront in the City",
            "Bedrooms__c": "3",
            "Bathrooms__c": "2",
            "Size__c": "4000",
            "LotSize__c": "8",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 6,
            "Address__c": "448 Hanover st",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "725000",
            "Teaser__c": "Quiet Retreat",
            "Bedrooms__c": "4",
            "Bathrooms__c": "2",
            "Size__c": "4000",
            "LotSize__c": "8",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 7,
            "Address__c": "127 Endicott st",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "450000",
            "Teaser__c": "City Living",
            "Bedrooms__c": "3",
            "Bathrooms__c": "1",
            "Size__c": "1500",
            "LotSize__c": "8",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 8,
            "Address__c": "48 Brattle st",
            "City__c": "Cambridge",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "450000",
            "Teaser__c": "Heart of Harvard Square",
            "Bedrooms__c": "5",
            "Bathrooms__c": "4",
            "Size__c": "2000",
            "LotSize__c": "8",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 9,
            "Address__c": "121 Harborwalk",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "450000",
            "Teaser__c": "Seaport District Retreat",
            "Bedrooms__c": "3",
            "Bathrooms__c": "3",
            "Size__c": "1500",
            "LotSize__c": "2",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "ExternalId__c": 10,
            "Address__c": "640 Harrison Ave",
            "City__c": "Boston",
            "State__c": "MA",
            "Zip__c": "02420",
            "Price__c": "650000",
            "Teaser__c": "City Living",
            "Bedrooms__c": "2",
            "Bathrooms__c": "2",
            "Size__c": "950",
            "LotSize__c": "0",
            "Pic__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08.jpg",
            "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ],
    "ExternalId__c",
    function(err, rets) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Upserted " + rets.length + " Property records successfully");
        }
    });
}

function loadPropertyActivities(conn) {
    conn.sobject("PropertyActivity__c").create([
        {
            "Property__r": {"ExternalId__c": "1"},
            "Contact__r": {"ExternalId__c": "1"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "975000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "2"},
            "Contact__r": {"ExternalId__c": "2"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "1200000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "3"},
            "Contact__r": {"ExternalId__c": "3"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "825000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "4"},
            "Contact__r": {"ExternalId__c": "4"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "930000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "5"},
            "Contact__r": {"ExternalId__c": "5"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "850000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "6"},
            "Contact__r": {"ExternalId__c": "6"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "725000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "7"},
            "Contact__r": {"ExternalId__c": "7"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "450000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "8"},
            "Contact__r": {"ExternalId__c": "8"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "450000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "9"},
            "Contact__r": {"ExternalId__c": "9"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "450000",
            "ActivityDate__c": "2015-07-12"
        },
        {
            "Property__r": {"ExternalId__c": "10"},
            "Contact__r": {"ExternalId__c": "9"},
            "ActivityType__r": {"ExternalId__c": "1"},
            "Comment__c": "Officially on the market as of today",
            "Price__c": "450000",
            "ActivityDate__c": "2015-07-12"
        }
    ],
    function(err, rets) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Created " + rets.length + " PropertyActivity records successfully");
        }
    });

    conn.sobject("PropertyActivity__c").create([
        {
            "Property__r": {"ExternalId__c": "1"},
            "Contact__r": {"ExternalId__c": "1"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "975000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "2"},
            "Contact__r": {"ExternalId__c": "2"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "1200000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "3"},
            "Contact__r": {"ExternalId__c": "3"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "825000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "4"},
            "Contact__r": {"ExternalId__c": "4"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "930000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "5"},
            "Contact__r": {"ExternalId__c": "5"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "850000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "6"},
            "Contact__r": {"ExternalId__c": "6"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "725000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "7"},
            "Contact__r": {"ExternalId__c": "7"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "450000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "8"},
            "Contact__r": {"ExternalId__c": "8"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "450000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "9"},
            "Contact__r": {"ExternalId__c": "9"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "450000",
            "ActivityDate__c": "2015-07-19"
        },
        {
            "Property__r": {"ExternalId__c": "9"},
            "Contact__r": {"ExternalId__c": "9"},
            "ActivityType__r": {"ExternalId__c": "2"},
            "Comment__c": "First open house",
            "Price__c": "450000",
            "ActivityDate__c": "2015-07-19"
        }
    ],
    function(err, rets) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Created " + rets.length + " PropertyActivity records successfully");
        }
    });
}

function loadPropertyBrokers(conn) {
    conn.sobject("PropertyBroker__c").create([
        {
            "Property__r": {"ExternalId__c": "1"},
            "Broker__r": {"ExternalId__c": "1"}
        },
        {
            "Property__r": {"ExternalId__c": "2"},
            "Broker__r": {"ExternalId__c": "1"}
        },
        {
            "Property__r": {"ExternalId__c": "3"},
            "Broker__r": {"ExternalId__c": "1"}
        },
        {
            "Property__r": {"ExternalId__c": "3"},
            "Broker__r": {"ExternalId__c": "2"}
        },
        {
            "Property__r": {"ExternalId__c": "4"},
            "Broker__r": {"ExternalId__c": "1"}
        },
        {
            "Property__r": {"ExternalId__c": "5"},
            "Broker__r": {"ExternalId__c": "1"}
        },
        {
            "Property__r": {"ExternalId__c": "5"},
            "Broker__r": {"ExternalId__c": "2"}
        },
        {
            "Property__r": {"ExternalId__c": "6"},
            "Broker__r": {"ExternalId__c": "2"}
        },
        {
            "Property__r": {"ExternalId__c": "7"},
            "Broker__r": {"ExternalId__c": "1"}
        },
        {
            "Property__r": {"ExternalId__c": "7"},
            "Broker__r": {"ExternalId__c": "2"}
        }
    ],
    function(err, rets) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Created " + rets.length + " PropertyBroker records successfully");
        }
    });

    conn.sobject("PropertyBroker__c").create([
        {
            "Property__r": {"ExternalId__c": "8"},
            "Broker__r": {"ExternalId__c": "2"}
        },
        {
            "Property__r": {"ExternalId__c": "9"},
            "Broker__r": {"ExternalId__c": "1"}
        },
        {
            "Property__r": {"ExternalId__c": "10"},
            "Broker__r": {"ExternalId__c": "1"}
        },
        {
            "Property__r": {"ExternalId__c": "10"},
            "Broker__r": {"ExternalId__c": "2"}
        }
    ],
    function(err, rets) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Created " + rets.length + " PropertyBroker records successfully");
        }
    });
}

function load() {
    var program = new commander.Command();
    program.option("-l, --loginUrl [loginUrl]", "Salesforce login url")
            .option("-u, --username [username]", "Salesforce username")
            .option("-p, --password [password]", "Salesforce password (and security token, if necessary)")
            .parse(process.argv);

    if (!program.loginUrl || !program.username || !program.password) {
        console.error("loadData: loginUrl, username and password all must be specified");
        return;
    }

    var conn = new jsforce.Connection({loginUrl: program.loginUrl});
    conn.login(program.username, program.password, function(err, userInfo) {
        if (err) {
            return console.error(err);
        }

        loadContacts(conn);
        loadBrokers(conn);
        loadPropertyActivityTypes(conn);
        loadProperties(conn);
        loadPropertyActivities(conn);
        loadPropertyBrokers(conn);
    });
}

load();

