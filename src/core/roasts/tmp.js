export const database = {
    data: {
        users: {
            'user|1': {
                beans: {

                },
                roasts: {

                },
                recent_roasts: []
            }
        },
        beans: {
            'bean|1': {
                id: 'bean|1',
                name: 'Ethiopia Celinga Yirgacheffe',
                origin: 'Ethiopia',
                region: 'Yirgacheffe, Gedeo Zone',
                wash_process: 'Natural',
                roast_suggestion: 'City+',
                variety: 'Ethiopian Heirloom Varieties',
                altitude: '1200-1800 meters',
                description: 'Cherry, bergamot tea, white sugar sweetness',
                roasts: {
                    'roast|1': true,
                    'roast|4': true
                }
            },
            'bean|2': {
                id: 'bean|2',
                name: 'Colombia Finca La Estrella - El Higueron, Huila',
                origin: 'Colombia',
                region: 'El Higueron, Huila',
                wash_process: 'Washed',
                roast_suggestion: 'City',
                variety: 'Caturra',
                altitude: '1200-1800 meters',
                description: 'Light cashew, graham cracker, light apricot, light orange. Balanced.',
                roasts: {
                    'roast|2': true
                }
            },
            'bean|3': {
                id: 'bean|3',
                name: 'El Salvador Chalatenango Peaberry',
                origin: 'El Salvador',
                region: 'Chalatenango',
                wash_process: 'Washed',
                roast_suggestion: 'City+',
                variety: 'Pacamara, Pacas, and Bourbon',
                altitude: '1200-1800 meters',
                description: 'Brown sugar, oranges, graham, honey, slightest walnut skin, cocoa',
                roasts: {
                    'roast|3': true
                }
            }
        },
        roasts: {
            'roast|1': {
                id: 'roast|1',
                date: '2017-01-28T03:45:32+00:00',
                bean_id: 'bean|1',
                start_temp: 270,
                end_temp: 300,
                roast_duration: '09:59',
                notes: 'Great roast, a bit dark.',
                weight_in: 250,
                weight_out: 200,
                shrink_percentage: '22%',
                roast_temp: [
                    {
                        'time_stamp': '',
                        temperature: 270// number in fahrenheit
                    },
                    {
                        'time_stamp': '',
                        temperature: 275// number in fahrenheit
                    }
                ],
                roast_events: {
                    'TIMESTAMP_ID': {
                        // event type
                    },
                    'TIMESTAMP_ID': {
                        // event type
                    }
                }
            },
            'roast|2': {
                id: 'roast|2',
                date: '2017-01-27T03:45:32+00:00',
                bean_id: 'bean|2',
                start_temp: 300,
                end_temp: 305,
                roast_duration: '07:45',
                notes: 'Awesome roast. Definitely try again.',
                weight_in: 250,
                weight_out: 200,
                shrink_percentage: '22%',
                roast_data: {
                    'TIMESTAMP_ID': {
                        // event type
                    },
                    'TIMESTAMP_ID': {
                        // event type
                    }
                }
            },
            'roast|3': {
                id: 'roast|3',
                date: '2017-01-27T03:45:32+00:00',
                bean_id: 'bean|3',
                start_temp: 300,
                end_temp: 305,
                roast_duration: '10:01',
                notes: 'Awesome roast. Definitely try again.',
                weight_in: 250,
                weight_out: 200,
                shrink_percentage: '22%',
                roast_data: {
                    'TIMESTAMP_ID': {
                        // event type
                    },
                    'TIMESTAMP_ID': {
                        // event type
                    }
                }
            },
            'roast|4': {
                id: 'roast|4',
                date: '2017-01-27T03:45:32+00:00',
                bean_id: 'bean|1',
                start_temp: 300,
                end_temp: 305,
                roast_duration: '09:05',
                notes: 'Awesome roast. Definitely try again.',
                roast_data: {
                    'TIMESTAMP_ID': {
                        // event type
                    },
                    'TIMESTAMP_ID': {
                        // event type
                    }
                }
            }
        }
    }
}

export const event_types = {
    'event|fan': {
        event_type: 'event|fan',
        setting: 50 // number and one of 0, 25, 50, 75, 100
    },
    'event|temp': {
        event_type: 'event|temp',
        setting: 50 // number in fahrenheit
    },
    'event|roast_start': {
        event_type: 'event|start'
    },
    'event|roast_end': {
        event_type: 'event|end',
        setting: 300 // number in fahrenheit
    },
    'event|first_crack_start': {
        event_type: 'first_crack_start'
    },
    'event|first_crack_end': {
        event_type: 'first_crack_end'
    },
    'event|second_crack_start': {
        event_type: 'second_crack_start'
    },
    'event|second_crack_end': {
        event_type: 'second_crack_end'
    },
    'event|development_start': {
        event_type: 'development_start'
    },
    'event|turning_point': {
        event_type: 'turning_point'
    },
}
