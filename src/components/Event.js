import React from 'react';
import {
  GALAXY_BARN,
  LUCKY_BARN,
  MT_HOOD_STAGE,
  STARLIGHT_STAGE,
  TREELINE_STAGE,
  WOOD_STAGE
} from '../lib/constants';

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
    <div
      onClick={onClick}
      key={uuid}
      className={`${getStageClass(stageId)} ${getEventClass(isSelected)}`}
      header={artist}
    >
      <div>
        <div>
          {day} {startTime} - {endTime}
          <br />
          {location}
          <br />
          Gig: {gig}
        </div>
        <div />
      </div>
    </div>
  );
}
