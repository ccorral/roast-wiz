export const Events = {
    'event|fan': {
        event_type: 'event|fan',
        event_name: 'Fan',
        setting: 50 // number and one of 0, 25, 50, 75, 100
    },
    'event|temp': {
        event_type: 'event|temp',
        event_name: 'Temp',
        setting: 50 // number in fahrenheit
    },
    'event|roast_start': {
        event_type: 'event|roast_start',
        event_name: 'Roast Start',
    },
    'event|roast_end': {
        event_type: 'event|roast_end',
        event_name: 'Roast End',
        setting: 300 // number in fahrenheit
    },
    'event|first_crack_start': {
        event_type: 'event|first_crack_start',
        event_name: 'First Crack Start',
    },
    'event|first_crack_end': {
        event_type: 'event|first_crack_end',
        event_name: 'First Crack End',
    },
    'event|second_crack_start': {
        event_type: 'event|second_crack_start',
        event_name: 'Second Crack Start',
    },
    'event|second_crack_end': {
        event_type: 'event|second_crack_end',
        event_name: 'Second Crack End',
    },
    'event|development_start': {
        event_type: 'event|development_start',
        event_name: 'Development Start',
    },
    'event|turning_point': {
        event_type: 'event|turning_point',
        event_name: 'Turning Point',
    }
}
