import React, { Component, PropTypes } from 'react';
import { Events } from '../../../constants/';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';

import NextIcon from 'grommet/components/icons/base/Next';
import PrevIcon from 'grommet/components/icons/base/Previous';

import { values } from 'lodash';

class TemperatureControls extends Component {

    constructor(props) {
        super(props)
        console.log(Events);
        this.state = {
            eventList: values(Events)
        }
        this.registerEvent = this.registerEvent.bind(this)
    }

    registerEvent(e) {
        const { time } = this.props
        e.preventDefault()
        const value = e.target.id
        console.log({ time_stamp: time, temperature: value });
    }

    render() {
        const { eventList } = this.state
        console.log(eventList);
        const eventNodes = eventList.map(event => {
            return (
                <Box direction='row'
                    justify='start'
                    align='stretch'
                    wrap={true}
                    pad='small'
                    margin='small'
                    colorIndex='light-1'
                    style={{overflow: 'auto', cursor: 'pointer'}}
                    key={event.event_type}
                    id={event.event_type}
                    onClick={this.registerEvent}
                >
                    {event.event_name}
                </Box>
            )
        })
        return (
            <Box direction='row'
                justify='start'
                align='center'
                wrap={true}
                pad='medium'
                margin='medium'
                colorIndex='light-2'
            >
            {eventNodes}
            </Box>
        );
    }

};

TemperatureControls.propTypes = {

};

export default TemperatureControls;
