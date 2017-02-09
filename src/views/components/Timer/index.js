import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import SecondsTohhmmss from './SecondsTohhmmss'

import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';

let offset = null, interval = null

export default class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = { clock: 0, time: '00:00:00' }
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.reset = this.reset.bind(this)
        this.update = this.update.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.reset()
    }

    pause() {
        if (interval) {
            clearInterval(interval)
            interval = null
        }
    }

    play() {
        console.log(interval);
        if (!interval) {
            offset = Date.now()
            interval = setInterval(this.update, 1000)
        }
    }

    reset() {
        let clockReset = 0
        this.setState({clock: clockReset, time: '00:00:00' })
        // let time = SecondsTohhmmss(clockReset / 1000)
        // this.setState({time: time })
        clearInterval(interval)
        interval = null
    }

    update() {
        let clock = this.state.clock
        clock += this.calculateOffset()
        this.setState({clock: clock })
        let time = SecondsTohhmmss(clock / 1000)
        this.setState({time: time })
    }

    calculateOffset() {
        let now = Date.now()
        let newOffset = now - offset
        offset = now
        return newOffset
    }

    render() {
        const { time } = this.state
        const childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child, {
            time: time
        }))
        return (
                <Box align='center'>
                    <Value value={time}
                        colorIndex='brand'
                        size='medium'
                    />
                    <Box align='center' direction='row' margin='small'>
                        <Button label='Reset' style={{margin:'4px'}}
                          onClick={this.reset}
                         />
                        <Button label='Start' style={{margin:'4px'}}
                          onClick={this.play}
                         />
                        <Button label='Pause' style={{margin:'4px'}}
                          onClick={this.pause}
                         />
                    </Box>
                    {childrenWithProps}
                </Box>
        )
    }
}

const timerStyle = {
    margin: "0px",
    padding: "2em"
};

const buttonStyle = {
    background: "#fff",
    color: "#666",
    border: "1px solid #ddd",
    margin: "0.25em",
    padding: "0.75em",
    fontWeight: "200"
};

const secondsStyles = {
    fontSize: "200%",
    fontWeight: "200",
    lineHeight: "1.5",
    margin: "0px",
    color: "#666"
};

Timer.propTypes = {

}
