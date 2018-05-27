import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import {
  GALAXY_BARN,
  LUCKY_BARN,
  MT_HOOD_STAGE,
  STARLIGHT_STAGE,
  TREELINE_STAGE,
  WOOD_STAGE
} from '../constants';

export function Event(props) {
  const {
    artist,
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

  function getEventClass(isSelected) {
    let className = '';
    if (isSelected) className = ' selected-event';
    return className;
  }

  function getStageClass(stageId) {
    switch (stageId) {
      case GALAXY_BARN:
        return 'galaxy';
      case LUCKY_BARN:
        return 'lucky';
      case MT_HOOD_STAGE:
        return 'mthood';
      case STARLIGHT_STAGE:
        return 'starlight';
      case TREELINE_STAGE:
        return 'treeline';
      case WOOD_STAGE:
        return 'wood';
      default:
        return '';
    }
  }

  return (
    <Panel
      onClick={onClick}
      key={uuid}
      className={`${getStageClass(stageId)} ${getEventClass(isSelected)}`}
      header={artist}
    >
      <Row>
        <Col sm={9}>
          {day} {startTime} - {endTime}
          <br />
          {location}
          <br />
          Gig: {gig}
        </Col>
        <Col sm={3} />
      </Row>
    </Panel>
  );
}
