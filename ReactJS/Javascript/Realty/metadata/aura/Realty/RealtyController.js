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
            component.set("v.messageReceived", messageToUser);
        }
    },

    handleError: function(component, error, helper) {
        var e = error;
    }
})