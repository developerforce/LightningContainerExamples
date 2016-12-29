import React from 'react';

import * as activityTypeService from '../services/ActivityTypeService';

import PickList from "../components/PickList";

export default React.createClass({

    getInitialState() {
        return {activityTypes: []};
    },

    componentDidMount() {
        activityTypeService.findAll().then(activityTypes => {
            let filteredActivityTypes = activityTypeService.filterFoundActivityTypes(activityTypes);
            this.setState({activityTypes:filteredActivityTypes});
        });
    },

    render() {
        return (
            <PickList valueField="activity_type_id" labelField="name" label="Select an activity..." items={this.state.activityTypes} onChange={this.props.onChange}/>
        );
    }

});