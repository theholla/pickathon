import React from 'react';
import { Panel } from 'react-bootstrap'

export function Event(props) {
    const {
        artist,
        ageLimit,
        location,
        startTime,
        endTime,
        day,
        gig,
        onClick,
        isSelected
    } = props;

    function getStyles() {
        const { selectedStyle } = styles
        if (isSelected) {
            return selectedStyle
        }
    }
    return (
        <Panel
            style={getStyles(isSelected)}
            onClick={onClick}
            header={artist}
        >
            {startTime} - {endTime}<br/>
            Gig: {gig}
        </Panel>
    )
}

const styles = {
    selectedStyle: {
        backgroundColor: 'red'
    }
}
