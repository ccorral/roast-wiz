import React, { Component, PropTypes } from 'react';

import TemperatureControls from './TemperatureControls';
import EventControls from './EventControls';

const RoastControls = ({ time }) => {
    return (
        <div>
            <TemperatureControls time={time} />
            <EventControls time={time} />
        </div>
    );
};

RoastControls.propTypes = {

};

export default RoastControls;
