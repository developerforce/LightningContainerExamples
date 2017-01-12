import React from 'react';
import * as LCC from "lightning-container";
import * as QueryString from "query-string";

import * as propertyService from '../services/PropertyService';

import {HomeHeader} from '../components/PageHeader';

import PropertyList from './PropertyList';
import NewPropertyWindow from './NewPropertyWindow';

let mainTitle = "My Properties";
let queryParams = QueryString.parse(location.search);
if (queryParams && queryParams.mainTitle) {
    mainTitle = decodeURIComponent(queryParams.mainTitle).replace(/\+/g, ' ');
}

export default React.createClass({

    getInitialState() {
        return {view: "grid", sortOrder: "address", properties: []};
    },

    componentDidMount() {
        propertyService.findAll(this.state.sortOrder).then(properties => {
            let filteredProperties = propertyService.filterFoundProperties(properties);
            this.setState({properties:filteredProperties})
        });
    },

    sortHandler(sortOrder) {
        propertyService.findAll(sortOrder).then(properties => {
            let filteredProperties = propertyService.filterFoundProperties(properties);
            this.setState({sortOrder, properties:filteredProperties});
        });
    },

    deleteHandler(data) {
        propertyService.deleteItem(data.property_id).then(() => {
            propertyService.findAll(this.state.sort).then(properties => {
                let filteredProperties = propertyService.filterFoundProperties(properties);
                this.setState({properties:filteredProperties});
            });
        });
    },

    editHandler(data) {
        window.location.hash = "#property/" + data.property_id + "/edit";
    },

    viewChangeHandler(value) {
        this.setState({view: value});
    },

    newHandler() {
        this.setState({addingProperty: true});
    },

    saveHandler(property) {
        let filteredProperty = propertyService.filterProperty(property);
        propertyService.createItem(filteredProperty).then(() => {
            propertyService.findAll(this.state.sort).then(properties => {
                let filteredProperties = propertyService.filterFoundProperties(properties);
                this.setState({addingProperty: false, properties:filteredProperties});
            });

            // Send message to custom LC
            let message = {};
            message.address = property.address;
            message.price = property.price;
            message.city = property.city;
            message.state = property.state;
            message.zip = property.zip;
            message.description = property.description;
            LCC.sendMessage({name: "PropertyCreated", value: message});
        });
    },

    cancelHandler() {
        this.setState({addingProperty: false});
    },

    render() {
        let view;
        if (this.state.view === "map") {
            view = <div>Google Map removed due to CSP</div>;
        } else if (this.state.view === "split") {
            view = <div className="slds-grid slds-wrap">
                <div className="slds-col slds-size--1-of-1 slds-large-size--2-of-3">
                    <PropertyList properties={this.state.properties} onSortChange={this.sortChangeHandler} onDelete={this.deleteHandler} onEdit={this.editHandler}/>
                </div>
                <div className="slds-col--padded slds-size--1-of-1 slds-large-size--1-of-3">
                    Google Map removed due to CSP
                </div>
            </div>;
        } else {
            view = <PropertyList properties={this.state.properties} onSort={this.sortHandler} onDelete={this.deleteHandler} onEdit={this.editHandler}/>;
        }
        return (
            <div>
                <HomeHeader type="properties"
                            title={mainTitle}
                            newLabel="New Property"
                            actions={[{value:"new", label:"New Property"}]}
                            itemCount={this.state.properties.length}
                            viewOptions={[{value:"table", label:"Table", icon:"table"},{value:"map", label:"Map", icon:"location"},{value:"split", label:"Split", icon:"layout"}]}
                            sortOptions={[{value:"address", label:"Address"},{value:"city", label:"City"},{value:"price", label:"Price"}]}
                            onNew={this.newHandler}
                            onSort={this.sortHandler}
                            onViewChange={this.viewChangeHandler}/>
                {view}
                {this.state.addingProperty ? <NewPropertyWindow onSave={this.saveHandler} onCancel={this.cancelHandler}/> : ""}
            </div>
        );
    }

});