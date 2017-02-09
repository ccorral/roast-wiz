import React, { Component, PropTypes } from 'react';
import { Events } from '../../../constants/';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Section from 'grommet/components/Section';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';

import DownIcon from 'grommet/components/icons/base/Down';
import UpIcon from 'grommet/components/icons/base/Up';

import { values, pickBy } from 'lodash';

class TemperatureControls extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            eventList: values(Events),
            data: {
                'event|fan': '',
                'event|heat': ''
            }
        }
        this.handleExpand = this.handleExpand.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmitSelectEvent = this.handleSubmitSelectEvent.bind(this)
        this.registerEvent = this.registerEvent.bind(this)
    }

    handleExpand() {
        this.setState({ open: !this.state.open })
    }

    handleSelect(e) {
        console.log(e);
        let newData = { ...this.state.data }
        newData[e.target.id] = e.value
        this.setState({ data: newData })
    }

    handleSubmitSelectEvent(e) {
        const { data } = this.state
        const { time } = this.props
        console.log({ time_stamp: time, event_type: e.target.id, setting: data[e.target.id] });
    }

    registerEvent(e) {
        const { time } = this.props
        const eventObj = values(pickBy(Events, obj => obj.event_name === e.target.innerText))[0]
        let value = eventObj.event_type
        console.log({ time_stamp: time, event_type: value });
    }

    render() {
        const { open, eventList, data } = this.state
        const control = open ? <DownIcon size='small' onClick={this.handleExpand} /> : <UpIcon size='small' onClick={this.handleExpand} />
        let staticEventNodes = eventList.map(event => {
            return (
                <Button id={event.event_type} key={event.event_type} label={event.event_name} type='button' primary={true} onClick={this.registerEvent} style={{fontSize: '0.75em', lineHeight: '1.5em', width: '80px', height: '80px', margin: '8px', zIndex: 3}} />
            )
        })
        staticEventNodes = staticEventNodes.slice(2)
        return (
            <div>
                <Section
                    direction='row'
                    justify='center'
                    align='center'
                    pad='none'
                >
                    <Label margin='small' style={{paddingRight: '8px'}}>Events</Label>
                    {control}
                </Section>
                {open &&
                    <div>
                        <Box direction='row' justify='center' align='center' pad='small' margin='small' colorIndex='light-1'>
                            <Select
                                id='event|fan'
                                label='Fan'
                                placeHolder='Fan Speed'
                                inline={false}
                                multiple={false}
                                options={['25%', '50%', '75%', '100%']}
                                value={data['event|fan']}
                                onChange={this.handleSelect}
                                style={{marginRight: '8px'}}
                             />
                             <Button id='event|fan' label='Fan' type='submit' primary={true} onClick={this.handleSubmitSelectEvent} style={{fontSize: '0.75em', margin: '8px'}} />
                            <Select
                                id='event|heat'
                                label='Heat'
                                placeHolder='Heat'
                                inline={false}
                                multiple={false}
                                options={['25%', '50%', '75%', '100%']}
                                value={data['event|heat']}
                                onChange={this.handleSelect}
                                style={{marginRight: '8px'}}
                             />
                             <Button id='event|heat' label='Heat' type='submit' primary={true} onClick={this.handleSubmitSelectEvent} style={{fontSize: '0.75em', margin: '8px'}}  />
                        </Box>
                        <Box direction='row' justify='center' align='center' pad='small' margin='small' colorIndex='light-1'>
                            {staticEventNodes}
                        </Box>
                    </div>
                }
            </div>
        );
    }

};

TemperatureControls.propTypes = {

};

export default TemperatureControls;
