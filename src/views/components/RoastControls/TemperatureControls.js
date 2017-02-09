import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import NextIcon from 'grommet/components/icons/base/Next';
import PrevIcon from 'grommet/components/icons/base/Previous';

import Label from 'grommet/components/Label';
import Section from 'grommet/components/Section';

import DownIcon from 'grommet/components/icons/base/Down';
import UpIcon from 'grommet/components/icons/base/Up';

class EventControls extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            targetTemp: 241,
            temperatures: [0,1,2,3,4,5,6,7,8]
        }
        this.resetTemperatures = this.resetTemperatures.bind(this)
        this.appendTemperatures = this.appendTemperatures.bind(this)
        this.prependTemperatures = this.prependTemperatures.bind(this)
        this.registerTemperature = this.registerTemperature.bind(this)
        this.handleExpand = this.handleExpand.bind(this)
    }

    componentDidMount() {
        this.resetTemperatures()
    }

    resetTemperatures() {
        const { targetTemp, temperatures } = this.state
        const resetTemps = temperatures.map((temp, i) => {
            if (i < 4) {
                return targetTemp - (5 - i)
            } else if (i === 4) {
                return targetTemp
            } else {
                return targetTemp + (i - 4)
            }
        })
        this.setState({ temperatures: resetTemps })
    }

    appendTemperatures() {
        const { temperatures } = this.state
        const additionalTemp = [ ...temperatures ]
        additionalTemp.push(temperatures[temperatures.length -1 ] + 1)
        additionalTemp.shift()
        this.setState({ temperatures: additionalTemp })
    }

    prependTemperatures() {
        const { temperatures } = this.state
        const additionalTemp = [ ...temperatures ]
        additionalTemp.unshift(temperatures[0] - 1)
        additionalTemp.pop()
        this.setState({ temperatures: additionalTemp })
    }

    registerTemperature(e) {
        const { targetTemp } = this.state
        const { time } = this.props
        e.preventDefault()
        const value = parseInt(e.target.innerText)
        console.log({ time_stamp: time, temperature: value });
        this.setState({ targetTemp: value }, () => {
            this.resetTemperatures()
        })
    }

    handleExpand() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { open, targetTemp, temperatures } = this.state
        const control = open ? <DownIcon size='small' onClick={this.handleExpand} /> : <UpIcon size='small' onClick={this.handleExpand} />
        const tempNodes = temperatures.map(temp => {
            let color = temp === targetTemp ? true : false
            return (
                <Button id={temp} label={temp} primary={color} type='button' onClick={this.registerTemperature} style={{fontSize: '0.75em', lineHeight: '1.5em', width: '80px', height: '80px', margin: '4px'}} />
            )
        })
        return (
            <div>
                <Section
                    direction='row'
                    justify='center'
                    align='center'
                    pad='none'
                    margin='none'
                >
                    <Label margin='small' style={{paddingRight: '8px'}}>Temperatures</Label>
                    {control}
                </Section>
                {open &&
                    <Box
                        direction='row'
                        justify='center'
                        align='center'
                        pad='medium'
                        margin='medium'
                    >
                        <div>
                            <PrevIcon onClick={this.prependTemperatures} style={{cursor: 'pointer'}}/>
                        </div>
                            {tempNodes}
                        <div>
                            <NextIcon onClick={this.appendTemperatures} style={{cursor: 'pointer'}}/>
                        </div>
                    </Box>
                }
            </div>
        );
    }

};

EventControls.propTypes = {

};

export default EventControls;
