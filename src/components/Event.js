import React from 'react';
import PropTypes from 'prop-types';
import { GALAXY_BARN, LUCKY_BARN, MT_HOOD_STAGE, STARLIGHT_STAGE, TREELINE_STAGE, WOOD_STAGE } from '../lib/constants';

export function Event(props) {
  const { artist, uuid, location, startTime, endTime, day, gig, onClick, isSelected, stageId } = props;

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
    <div onClick={onClick} key={uuid} className={`event ${getStageClass(stageId)} ${getEventClass(isSelected)}`}>
      <div className={'artist'}>{artist}</div>
      <div className={'time'}>
        {day} {startTime} - {endTime}
      </div>
      <div className={'location'}>{location}</div>
      <div className={'gig'}>Gig: {gig}</div>
    </div>
  );
}

Event.propTypes = {
  artist: PropTypes.string.isRequired,
  uuid: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  gig: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  stageId: PropTypes.string.isRequired,
};
