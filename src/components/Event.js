import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap'
import {
    GALAXY_BARN,
    LUCKY_BARN,
    MT_HOOD_STAGE,
    STARLIGHT_STAGE,
    TREELINE_STAGE,
    WOOD_STAGE,
} from '../constants'

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
        isSelected,
        stageId
    } = props;

    function getStyles() {
        const { selectedStyle } = styles
        if (isSelected) {
            return selectedStyle
        }
    }

    function getStageClass(stageId) {
        switch (stageId) {
            case GALAXY_BARN: return 'galaxy'
            case LUCKY_BARN: return 'lucky'
            case MT_HOOD_STAGE: return 'mthood'
            case STARLIGHT_STAGE: return 'starlight'
            case TREELINE_STAGE: return 'treeline'
            case WOOD_STAGE: return 'wood'
            default: return ''
        }
    }

    return (
        <Panel
            style={getStyles(isSelected)}
            onClick={onClick}
            key={uuid}
            className={getStageClass(stageId)}
            header={artist}>
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
        border: '2px solid #43464'
    }
}
