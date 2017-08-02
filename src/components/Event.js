import React from 'react';

export function Event(props) {
    const {
        artist,
        ageLimit,
        location,
        startTime,
        endTime,
        day,
        gig,
    } = props;

    return (
        <p>
            {artist}<br/>
            {startTime} - {endTime}<br/>
            Gig: {gig}
        </p>
    )
}
