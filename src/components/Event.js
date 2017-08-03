import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap'

export function Event(props) {
    const {
        artist,
        ageLimit,
        uuid,
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
            key={uuid}
        >
            <Row>
                <Col md={9}>
                    {day} {startTime} - {endTime}<br/>
                    {location}<br/>
                    Gig: {gig}
                </Col>
                <Col md={3}></Col>
            </Row>
        </Panel>
    )
}

const styles = {
    selectedStyle: {
        fontWeight: 'bold'
    }
}
