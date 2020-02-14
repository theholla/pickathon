import React from 'react';
import { Stage, StageId, Performance } from '../App';

function getEventClass(isSelected: boolean) {
  let className = '';
  if (isSelected) className = ' selected-event';
  return className;
}

function getStageClass(stageId: StageId) {
  switch (stageId) {
    case Stage.GALAXY_BARN:
      return 'galaxy';
    case Stage.LUCKY_BARN:
      return 'lucky';
    case Stage.MT_HOOD_STAGE:
      return 'mthood';
    case Stage.STARLIGHT_STAGE:
      return 'starlight';
    case Stage.TREELINE_STAGE:
      return 'treeline';
    case Stage.WOOD_STAGE:
      return 'wood';
    default:
      return '';
  }
}
export function EventCard(props: Performance) {
  const { artist, uuid, location, startTime, endTime, day, gig, onClick, isSelected, stageId } = props;

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
