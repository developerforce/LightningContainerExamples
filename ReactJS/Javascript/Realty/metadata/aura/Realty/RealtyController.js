({ 
    handleMessage: function(component, message, helper) {
        var payload = message.getParams().payload;
        var name = payload.name;
        if (name === "PropertyCreated") {
            var value = payload.value;
            var messageToUser;
            if (value.price > 1000000) {
                messageToUser = "Big Real Estate Opportunity in " + value.city + ", " + value.state + " : $" + value.price;
            }
            else {
                messageToUser = "Small Real Estate Opportunity in " + value.city + ", " + value.state + " : $" + value.price;
            }
            var log = component.get("v.log");
            log.push(messageToUser);
            component.set("v.log", log);
            //component.set("v.messageReceived", messageToUser);
            //$A.get('e.force:refreshView').fire();
        }
    },

    handleError: function(component, error, helper) {
        var e = error;
    }
})