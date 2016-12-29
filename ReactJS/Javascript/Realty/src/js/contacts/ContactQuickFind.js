import React from 'react';

import QuickFind from '../components/QuickFind';

import * as contactService from '../services/ContactService';

export default React.createClass({

    getInitialState() {
        return {
            searchKey: undefined,
            list: []
        };
    },

    searchKeyChangeHandler(key) {
        contactService.findByName(key).then(list => {
            let filteredList = contactService.filterFoundContacts(list);
            this.setState({searchKey: key, list: filteredList});
        });
    },

    render() {
        return (
            <QuickFind label="Select a contact..."
                       searchKey={this.state.searchKey}
                       valueField="contact_id"
                       labelField="name"
                       list={this.state.list}
                       onSearchKeyChange={this.searchKeyChangeHandler}
                       onChange={this.props.onChange}/>
        );
    }

});